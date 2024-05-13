
import {
    addNewBooks,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompany2, updateSkill,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01"
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;



test("reference type test", ()=> {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            title: "Minsk"
        }
    }

  const awesomeUser =   makeHairStyle(user, 2)
    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", ()=> {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }

    }
    const movedUser =   moveUser(user, "kiev")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("kiev")
})
test("upgrade laptop to macbook", ()=> {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }

    }
    const userCopy = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
})

test("upgrade house", ()=> {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html","react", "js"]

    }
    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
})
test("add new book to user", ()=> {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html","react", "js"]

    }
    const userCopy = addNewBooks(user, "ts")

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[4]).toBe("ts")

})
test("change book: update js to ts", ()=> {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html","react", "js"]

    }
    const userCopy = updateBook(user, "js","ts")

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[3]).toBe("js")
})
test("update skill", ()=> {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html","react", "js"],
        skill: [44, 33, 66, 66, 152]

    }
    const userCopy = updateSkill(user, 66,112)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.skill[2]).toBe(66)
    expect(userCopy.skill[3]).toBe(66)
})
test("remove js", ()=> {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html","js","react", ],

    }
    const userCopy = removeBook(user, "js")

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books[2]).toBe("react")
})
test("change name", ()=> {
    let user: UserWithLaptopType & WithCompaniesType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [{id: 1, title: "епам"},{id: 2, title: "Google"}]

    }
    const userCopy = updateCompany(user, 1, "EPAM" ) as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[0].title).toBe("EPAM")
})
test("update company", ()=> {

    let companies = {
        "Dimych" : [{id: 1, title: "епам"},{id: 2, title: "Google"}],
        "Artem" : [{id: 2, title: "Google"}]
    }
    const copy = updateCompany2(companies, "Dimych", 1, "EPAM")
    expect(copy["Dimych"]).not.toBe(companies["Dimych"])
    expect(copy["Dimych"][1]).toBe(companies["Dimych"][1])
    expect(copy["Dimych"][0]).not.toBe(companies["Dimych"][0])
    expect(copy["Artem"]).toBe(companies["Artem"])
})