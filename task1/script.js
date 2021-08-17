let arr = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        "age": 45
    }
]
//Задача №1
//Получить строку c именами и фамилиями всех пользователей через запятую.
let fio = arr.map(user => ({
    fullName: `${user.first_name} ${user.last_name}`
}));
let fName = fio.map(users => `${Object.values(users)}`).join(", ")
console.log(fName)

//Задача №2 
//Получить объект, где были бы **a)** данные о среднем возрасте пользователей, **b)** количество пользователей старше **30, c)** количество пользователей старше 40**,  d)** количество пользователей старше 18 ****
let getAge = {
    average: arr.reduce((aver, user) => aver + user.age, 0) / arr.length,
    age30: arr.filter(a => a.age > 30).length,
    age40: arr.filter(a => a.age > 40).length,
    age18: arr.filter(a => a.age > 18).length,
}
console.log(getAge)

//Задача №3
//Создать новый массив пользователей, где объект пользователя должен содержать только id  и поле, отвечающее за имя пользователя, которое должно содержать имя и фамилию.
let getUser = arr.map(person => ({
    personId: person.id,
    personF: `${person.first_name} ${person.last_name}`,
}))
console.log(getUser)

//Задача №4 
//Создать массив из emails по алфавиту.
let emailArr = arr.sort((a, b) => a.email > b.email ? 1 : -1);
let result = Object.values(emailArr).map(em => ({
    emailU: em.email
}))
console.log(result)

//Задача №5
//Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.
let youngUser = arr.filter(a => a.age < 40).sort((a, b) => a.age > b.age ? 1 : -1)
let youngResult = Object.values(youngUser).map(young => ({
    yUser: `${young.first_name} ${young.last_name}`
}))
console.log(youngUser)
console.log(youngResult)

//Задача №6
/* Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву **Y,** а значит и такого поля не должно быть в объекте.
Пример того, что надо получить, когда пользователи имеют следующие фамилии `Yasenko`, `Felton` , `Ford`, `Ferdinand`:

    `{
       y: ['Yasenko'],
       f: ['Felton', 'Ford', 'Ferdinand'
    }` */
const transformObj = arr.reduce((acc, { last_name }) => {
    const key = last_name[0].toLowerCase()
    if (acc.hasOwnProperty(key)) return { ...acc, [key]: [...acc[key], last_name], }
    return { ...acc, [key]: [last_name] }
}, {})
console.log(transformObj);






