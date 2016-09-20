const chai = require('chai')
const expect = chai.expect

import mean from '../functions/mean.js'

describe('mean', () => {
  it('responds with NaN when the input is not an array', () => {
    expect( mean( 5 )).to.be.NaN
  })
  
  it('responds with NaN when an element of the array is not an integer', () => {
    expect( mean( [1, 2, 'a'] )).to.be.NaN
  })

  it('responds with NaN when an element of the array is a boolean value', () => {
    expect( mean( [1,true] )).to.equal(1)
  })

  it('finds the average of the numbers in an array', () => {
    const testArray = [1,2,3,4,5]
    expect(mean(testArray)).to.equal(3)
  })
})