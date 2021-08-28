const university = [
    {
        id: 1,
        faculty: "History department",
        subjects: ["The World History", "History of Rome"],
        countStudents: 44
    },
    {
        id: 2,
        faculty: "Department of Biology",
        subjects: ["biology", "chemistry"],
        countStudents: 50
    },
    {
        id: 3,
        faculty: "Faculty of Mathematics",
        subjects: ["mathematics", "geometry", "trigonometry"],
        countStudents: 72
    },
    {
        id: 4,
        faculty: "Faculty of Design",
        subjects: ["ui", "ux", "graphic design"],
        countStudents: 37
    }
]


//1. Создать массив всех факультетов.
const arrayFaculty = university.reduce((acc, { faculty }) => {
    /* return Array.from(new Set([...arr, ...genre])); */
    return [...acc, faculty]
}, [])
console.log(arrayFaculty);

//2. Создать массив всех предметов.Помним, что предметы у нас всегда уникальны(проверку на повторения делать не надо).
const arraySubjects = university.reduce((acc, { subjects }) => {
    return [...acc, ...subjects]
}, [])
console.log(arraySubjects);

//3. Посчитать общее количество студентов на всех факультетах.
const amountOfStudents = university.reduce((acc, { countStudents }) => {
    return acc + countStudents;
}, 0);
console.log(amountOfStudents);

//4. Создать объект, где ключ это название факультета, а значение - предметы этого факультета.
const createFaculty = university.reduce((acc, { faculty, subjects }) => {
    return { ...acc, [faculty]: subjects }
}, {})
console.log(createFaculty);
