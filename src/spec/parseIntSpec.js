const chai = require('chai')
const expect = chai.expect

import parseInt from '../functions/parseInt.js'

describe('pasreInt', () => {
  it('if the first argument is a string then the function returns an integer represting the number in the string', () => {
    expect( parseInt('105')).to.equal(105)
  })

  it('if the first argument is a decimal number in a string then the function returns an integer', () => {
    expect( parseInt('1.05')).to.equal(1)
  })

  it('Converts a string representing a number of the specified radix to an integer', () => {
    expect( parseInt('111', 2)).to.equal(7)
  })

  it('if the first argument is an array then the function operates on the first element of the array', () => {
    expect( parseInt([111], 2)).to.equal(7)
  })

  it('if the first argument is an object then the function returns NaN', () => {
    expect( parseInt({a:1})).to.be.NaN
  })

  it('if the first argument is number not in a string then the function returns an integer', () => {
    expect( parseInt(1.1)).to.equal(1)
  })
})
