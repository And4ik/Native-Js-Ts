export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
    skill?: Array<number>
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = { id: number, title: string };
export type WithCompaniesType =  {
    companies: Array<CompanyType>
}
export function makeHairStyle(u:UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair =  u.hair / power
    return copy

}

export function moveUser(u:UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city:city}}
}

export function upgradeUserLaptop(u:UserWithLaptopType, title: string) {
    return {...u, laptop: {...u.laptop, title:title}}
}
export function moveUserToOtherHouse(u:UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house:house}}
}
export function addNewBooks(u:UserWithLaptopType & UserWithBooksType, newBook: Array<string>) {
    return {...u, books: [...u.books,newBook]}
}
export function updateSkill(u:UserWithLaptopType & UserWithBooksType, newSkill: number, oldSkill: number) {
    return {...u, skill: [...u.skill.map(s=> s===oldSkill ? newSkill :s)]}
}
export function updateBook(u:UserWithLaptopType & UserWithBooksType, newBook: string, oldBook: string) {
    return ({...u, books: [...u.books.map(b=> b===oldBook ? newBook : b)]})
}
export function removeBook(u:UserWithLaptopType & UserWithBooksType, oldBook: string) {
    return {...u, books: [ ...u.books.filter(b=>b !==oldBook)]}
}
export const updateCompany = (u: WithCompaniesType, id: number, newTitle: number) =>{
    return {...u, companies: u.companies.map(c=> c.id===1 ? {...c,title: newTitle}:c)}
}
export const updateCompany2 = (companies: {[key:string]: Array<CompanyType>}, userName: string, companyId: number, newTitle:string) =>{
    // let companyCopy = {...companies}
    // companyCopy[userName] = companyCopy[userName].map(c=> c.id===companyId ? {...c, title:newTitle}:c)
    return {...companies, [userName]: companies[userName].map(c=> c.id===companyId ? {...companies, title:newTitle}:c)}
    // return companyCopy
}
