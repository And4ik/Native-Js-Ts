import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04";


type StreetType = {
    title: string
}
export type AddressType = {
    number?: number // ?  - типо может быть number, а может и не быть
    street: StreetType
}
type HouseType = {
    id: number
    buildedAt: number
    repaired: false
    address: AddressType
}
type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}
export let town: CityType

beforeEach(() => {
    town = {
        title: "New York",
        houses: [
            {id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
            {id: 2, buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
            {id: 3,buildedAt: 2020, repaired: false, address: {number: 200, street: {title: "Happy street"}}},
        ],
        governmentBuildings: [
            {type: "HOSPITAL", budget: 200000, staffCount: 200,
                address:
                    {street: {
                            title: "Central Str" }}},
            {type: "FIRE-STATION", budget: 500000, staffCount: 1000, address: {street: {title: "Souths park str" }}}],
        citizensNumber: 1000000
    }

})
// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet (town, "Happy street")

    expect(town.houses.length).toBe(1);
    expect(town.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(town.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})
test ("should take old men older then 90", () => {
    const ages = [18, 25, 1, 100, 95];

    const oldAges = ages.filter(predicate => predicate > 95)


    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test ("should courses < then 160", () =>{
    type CoursesType = {
        title: string
        price: number
    }
    const courses: Array<CoursesType> = [
        {title: "CSS", price: 100},
        {title: "HTML", price: 120},
        {title: "TS", price: 1220},
    ]
    const filterCourses =
        courses.filter(cheap => cheap.price < 160)
    expect(filterCourses.length).toBe(2);
    expect(filterCourses[0].title).toBe("CSS");
    expect(filterCourses[1].title).toBe("HTML");
})

test ("get only completed task", () => {
    const tasks = [
        {id: 1, title: "Milk", isDone: false},
        {id: 2, title: "Sugar", isDone: true},
        {id: 3, title: "Bread", isDone: false},
        {id: 4, title: "Solt", isDone: true},
    ]
    const filteredTasks = tasks.filter(task => !task.isDone)

    expect(filteredTasks.length).toBe(2);
    expect(filteredTasks[0].title).toBe("Milk");
    expect(filteredTasks[1].title).toBe("Bread");
})

