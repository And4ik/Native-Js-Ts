type UserType = {
    name: string
    age:number
}
function icreaseAge(u:UserType) {
    u.age++
}
test("reference type test", () => {
    var user: UserType ={
        name: "Dimych",
        age: 32
    }
    icreaseAge(user)
    expect(user.age).toBe(33)

    const superman = user
    superman.age= 1000
    superman.name= "andrey"
    expect(user.age).toBe(1000)
    expect(user.name).toBe("andrey")
})