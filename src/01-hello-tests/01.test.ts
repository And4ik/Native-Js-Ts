import {mult, splitIntoWords, sum} from "./01";

test("sum should be correct", () => {
    const a = 1;
    const b = 2;
    const c = 3;

    const result1 = sum(a, b)
    const result2 = sum(b, c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("multiply should be correct", () => {
    const a = 1;
    const b = 2;
    const c = 3;

    const result1 = mult(a, b)
    const result2 = mult(b, c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test("splitting into words should be correct", () => {
    const sent1 = "Hello my friend!";
    const sent2 = "Js-  programming!";

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

})