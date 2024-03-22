 import {GovernmentBuildingsType, HouseType} from "../02/02-02";
import {cityTown} from "./05-02.test";


export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: Array<GovernmentBuildingsType>) => {
    return governmentBuildings.map(b => b.address.street.title)
}


export function getStreetsTitlesOfHouses(houses: Array<HouseType>) {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(w => `Hello guys from ${w.address.street.title}`)
}