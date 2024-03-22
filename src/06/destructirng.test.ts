
type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string

        }
    }
}

let props: ManType;
beforeEach (() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})
test ("", () => {


    // const age  = props.age
    const {age} = props
    const {title} = props.address.street


    expect(age).toBe(32)
    expect(title).toBe("Nezavisimosti street")
})