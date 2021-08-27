const arrayMac = [
    {
        id: 1,
        name: "Биг Тейсти",
        price: 6,
        currency: "euro",
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
        type: "burger",
        available: true
    },
    {
        id: 2,
        name: "Тройной чизбургер",
        price: 2.3,
        currency: "usd",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: "burger",
        available: true
    },
    {
        id: 3,
        name: "Чизбургер",
        price: 1,
        currency: "euro",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: "burger",
        available: true
    },
    {
        id: 4,
        name: "Картофель фри",
        price: 2,
        currency: "usd",
        ingredients: ["potato"],
        type: "snack",
        available: true
    },
    {
        id: 5,
        name: "Картофель по-деревенски",
        price: 2,
        currency: "usd",
        ingredients: ["potato"],
        type: "snack",
        available: false
    },
    {
        id: 6,
        name: "Чикен МакНаггетс™",
        price: 5,
        currency: "euro",
        ingredients: ["chicken"],
        type: "chicken",
        available: true
    },
    {
        id: 7,
        name: "Стрипсы",
        price: 2.6,
        currency: "euro",
        ingredients: ["chicken"],
        type: "chicken",
        available: false
    },
    {
        id: 8,
        name: "МакЧикен",
        price: 4.3,
        currency: "euro",
        ingredients: ["chicken", "flour", "cheese", "sauce"],
        type: "burger",
        available: false
    },
]


//1. Собрать в массив ингредиентов (без повторения).
const ingredients = arrayMac.map(({ ingredients }) => ingredients).join(',').split(',');
const arrayIngredients = Array.from(new Set(ingredients));
console.log(arrayIngredients)

//2. Создать функцию, которая принимает массив продуктов и id, и возвращает продукт с таким же id.
const filterById = (arr, id) => arrayMac.filter(el => el.id === id);
console.log(filterById(arrayMac, 2));

//3. Создать массив с отсортированными продуктами по цене.
const arrSortPrice = arrayMac.sort((a, b) => a.price - b.price);
console.log(arrSortPrice);

//4. Сгруппировать продукты по типам. Создать объект, где ключ это тип, а значение - массив с продуктами.
const createNewObj = arrayMac.reduce((acc, { type }) => {
    return { ...acc, [type]: [...(acc[type] || []), { type }] };
}, {})
console.log(createNewObj);

//5. Создать массив с продуктами, которые доступны.
const getArrayForAvailable = (arrayMac) => {
    return arrayMac.reduce((names, food) => {
        if (food.available) {
            names.push(food.name);
        }
        return names;
    }, []);
}
console.log(getArrayForAvailable(arrayMac));

//6. Создать функцию, которая принимает массив продуктов и строку = название ингредиента, и возвращает массив с продуктами, где содержится такой ингредиент.
const chooseIngredient = (arr, str) => arrayMac.filter(item => item.ingredients.includes(str));
console.log(chooseIngredient(arrayMac, "cheese"));

//7. Создать функцию, которая принимает массив продуктов и массив ингредиентов, и возвращает массив с продуктами, где содержатся такие ингредиенты.
const chooseIngredients = (arrProd, arrIngrid) => {
    return arrayMac.filter(
        (item) =>
            [...new Set([...item.ingredients, ...arrIngrid])].join() === item.ingredients.join()
    );
};
console.log(chooseIngredients(arrayMac, ["cheese", "beef"]));


//8. Создать функцию, которая принимает массив продуктов и цену, и возвращает массив продуктов, где цена продукта ниже или равна цене из второго аргумента функции.
const filterIngredientsByPrice = (arr, num) => arrayMac.filter(item => item.price <= num);
console.log(filterIngredientsByPrice(arrayMac, 3));

//9. Создать функцию, которая принимает массив продуктов и массив айдишников, и возвращает строку, где строка включает в себя название продуктов и их цену через запятую, у которых айдишники совпадают.
//Например: `"Биг Тейсти: цена 4€, Картофель по-деревенски: 2$"`
const filterByIdProduct = (arrProd, arrId) => {
    return arrayMac
        .filter((item) => arrId.includes(item.id))
        .map(
            (item) => `${item.name}: ${item.price}${item.currency == "usd" ? "$" : "€"}`
        )
        .join(", ");
}
console.log(filterByIdProduct(arrayMac, [1, 4, 6]));


//10. Создать функцию, которая принимает массив продуктов и массив айдишников, и возвращает объект,
// c общими суммами цен продуктов(у которых айдишники совпадают) по каждой валюте.
//Например: `{ euro: 20, usd: 6}`
const totalPrice = (foodarr, foodId) => {
    let arrById = foodarr.filter((item) => foodId.includes(item.id));
    let sumEuro = arrById
        .map((item) => (item.currency === "euro" ? item.price : 0))
        .reduce((a, b) => a + b);
    let sumUsd = arrById
        .map((item) => (item.currency === "usd" ? item.price : 0))
        .reduce((a, b) => a + b);
    return { euro: sumEuro, usd: sumUsd };
};

console.log(totalPrice(arrayMac, [1, 3, 4]));

//11. Создать функцию, которая принимает массив продуктов и массив айдишников, и строку, где число равно сумме
//цен продуктов + значок валюты. При этом если, у нас попадают продукты с разными валютами, то мы должны получить сумму в евро и перевести доллары в евро(использовать для этого курс евро/доллар).

