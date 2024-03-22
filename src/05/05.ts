
export type manType ={
    name:string
    age: number
}
const people: Array<manType> = [
    {name: "Andrey Khanko", age: 30},
    {name: "Dmitry Aleksejnok", age: 29},
    {name: "Anton Savitskiy", age: 31},
]

const transformator = (man: manType) => {
    return {
        stack: ["css","html","js","tdd","react"],
        firstName: man.name.split("")[0],
        lastName: man.name.split("")[1],
    }
}


const dev2 = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2]),
]

const dev3 = people.map(transformator)

const messages = people.map(man => `Hello ${man.name.split("")[0]}. Welcome `)

export function createGreetingMessage (people: Array<manType> ) {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome`)
}