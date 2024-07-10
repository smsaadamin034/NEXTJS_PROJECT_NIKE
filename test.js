const person = [
    {
        firstName: "Saad",
        lastName: "Amin",
    },
    {
        firstName:"Amin",
        lastName:"Uddin",
    },
    {
        firstName:"Zulnoor",
        lastName:"Shoaib",
    },
];

console.log(person[2].firstName + ' ' + person[2].lastName);
const firtNames = person.map((items)=>{
    return items.firstName;
});

console.log(firtNames);
