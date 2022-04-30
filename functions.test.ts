const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4]


describe('shuffleArray test', () => {

    test('should test shuffleArray return array', () => {
        // expect(typeof shuffleArray).toBe('function')
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)

    })
    it('should check the length is the same', ()=>{
        // expect(shuffleArray(testArr)).toHaveLength(10)
        expect(shuffleArray(testArr)).toHaveLength(testArr.length)
    })
})