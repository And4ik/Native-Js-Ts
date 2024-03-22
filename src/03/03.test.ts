import {addskill, doesStudentLiveIn, makeStudentActive, StudentType} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})


test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);//ожидаем, что технологий 3

    addskill(student, "JS");// отдаем студента этой ф-ции и она что-то делает

    expect(student.technologies.length).toBe(4); // к технолог. должна добавиться  4-я
    expect(student.technologies[3].title).toBe("JS")// а именно title = "JS"
    expect(student.technologies[3].id).toBeDefined()// и пишем, что id определено и не важно какой
})


test("student should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})

test("does student live in city?", () => {
    expect(student.isActive).toBe(false);

    let result1 = doesStudentLiveIn(student, "Moskow");
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})