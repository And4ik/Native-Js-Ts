
export type StreetType = {
    title: string
}


export type AddressType = {
    number?: number // ?  - типо может быть number, а может и не быть
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: false
    address: AddressType
}

export type GovernmentBuildingsType = {
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