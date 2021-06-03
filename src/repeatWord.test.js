import { repeatWord } from './repeatWord.js';

//unit-тесты
describe("unit-tests", ()=> {
    it("operates correctly with a word and a positive number", ()=> {
        expect(repeatWord("student", 5)).toBe("student1, student2, student3, student4, student5, ");
    })
})

//корнер-кейсы
describe("corner cases", ()=> {
    it("doesn't work with a negative number", ()=> {
        expect(repeatWord("student", -3)).toBe("");
    }),
        it("works with a fractional number", ()=> {
            expect(repeatWord("student", 2.4)).toBe("student1, student2, ");
        })
})