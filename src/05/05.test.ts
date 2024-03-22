import {createGreetingMessage, manType} from "../05/05";

let people: Array<manType> = []

beforeEach(() => {
    people = [
        {name: "Andrey Khanko", age: 30},
        {name: "Dmitry Aleksejnok", age: 29},
        {name: "Anton Savitskiy", age: 31},
    ]
})
test('should get array of greeting messages', ()=> {
    const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome`)

    const messages1 = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrey. Welcome");
    expect(messages[1]).toBe("Hello Dmitry. Welcome");
    expect(messages[2]).toBe("Hello Anton. Welcome");

    expect(messages1.length).toBe(3);
    expect(messages1[0]).toBe("Hello Andrey. Welcome");
    expect(messages1[1]).toBe("Hello Dmitry. Welcome");
    expect(messages1[2]).toBe("Hello Anton. Welcome");
})