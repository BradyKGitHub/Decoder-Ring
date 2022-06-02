// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe("polybius tests written by student", ()=>{
    describe("encoding tests",()=>{
        it("When encoding, it translates the letters i and j to 42.",()=>{
            const message = "ij"
            const actual = polybius(message)
            const expected = "4242"
            expect(actual).to.equal(expected)

        })
        it("when encoding, ignores capital letters",()=>{
            const message = "ThiNkful"
            const actual = polybius(message)
            const expected = "4432423352125413"
            expect(actual).to.equal(expected)

        })
        it("when encoding, maintains space in the message", ()=>{
            const message = "We love coding"
            const actual = polybius(message)
            const expected = "2551 13431551 314341423322"
            expect(actual).to.equal(expected)

        })
    })
        
    describe("decoding tests",()=>{
        it("When decoding, it translates 42 to (i/j).",()=>{
            const message = "42423335"
            const actual = polybius(message, false)
            const expected = "(i/j)(i/j)nx"
            expect(actual).to.equal(expected)

        })
        it("when decoding, maintains the space in the message", ()=>{
            const message = "314341423322 4234 125433"
            const actual = polybius(message, false)
            const expected = "cod(i/j)ng (i/j)s fun"
            expect(actual).to.equal(expected)

        })
    })
})
