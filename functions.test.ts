const {shuffleArray} = require('./utils')

describe('shuffleArray test', () => {

    it('should test shuffleArray return array', () => {
        expect(typeof shuffleArray).toBe('function')
    })
    // test('should check the length is the same', ()=>{
    //     expect(shuffleArray).toHaveLength(10)
    // })
})