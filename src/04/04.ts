import {CityType, town} from "./04.test";
import {GovernmentBuildingsType} from "../02/02-02";


const ages = [18, 25, 1, 100, 95];

const predicate = (age: number) => {
    return age > 90
}


const oldAges = [100] //. 95

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 100},
    {title: "HTML", price: 150},
    {title: "TS", price: 1220},
]

const cheapPredicate= (courses: CoursesType) => {
    return courses.price < 160
}


// const chipCourses = []

export function demolishHousesOnTheStreet(town: CityType, happyStreet: string) {
    town.houses = town.houses.filter(h => h.address.street.title !== happyStreet)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
    return buildings.filter(s => s.staffCount > number)
}

