export const sum = (a: number, b: number) => {
    return a + b;
}

const res = sum(sum(1, 2), sum(1, 3))
// console.log(res)

export type CityType = {
    title: string
    countryTitle: string
}
export type AddressType = {
    streetTitle: string
    city: CityType
}
export type TechnologiesType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}


export const addskill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}


export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}