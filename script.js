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
let fio = arr.map(user => ({
    fullName: `${user.first_name} ${user.last_name}`
}));
let fName = fio.map(users => `${Object.values(users)}`).join(", ")
console.log(fName)

//Задача №2
let getAge = {
    average: arr.reduce((aver, user) => aver + user.age, 0) / arr.length,
    age30: arr.filter(a => a.age > 30).length,
    age40: arr.filter(a => a.age > 40).length,
    age18: arr.filter(a => a.age > 18).length,
}
console.log(getAge)

//Задача №3
let getUser = arr.map(person => ({
    personId: person.id,
    personF: `${person.first_name} ${person.last_name}`,
}))
console.log(getUser)

//Задача №4 
let emailArr = arr.sort((a, b) => a.email > b.email ? 1 : -1);
let result = Object.values(emailArr).map(em => ({
    emailU: em.email
}))
console.log(result)

//Задача №5
let youngUser = arr.filter(a => a.age < 40).sort((a, b) => a.age > b.age ? 1 : -1)
/* let youngResult = Object.values(youngUser).map(young => ({
    yUser: `${young.first_name} ${young.last_name}`
})) */
console.log(youngUser)
console.log(youngResult)

//Задача №6
let lastN = {}
let key = arr.map(word => word[last_name])
console.log(key)

