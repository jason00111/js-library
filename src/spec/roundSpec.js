const expect = require('chai').expect

import round from '../functions/round.js'

describe('round', () => {
  it('if the argument is a decimal number the function returns the number rounded to the nearest integer', () => {
    expect(round(1234.45)).to.equal(1234)
  })

  it('if the first argument is a decimal number and the second argument is a positive integer the function returns the first argument only rounding the numbers on the right side of the decimal', () => {
    expect( round(1234.45, 1) ).to.equal(1234.5)
  })

  it('if the first argument is a number and the second argument is a negative integer the function returns the first argument only rounding the numbers on the left side of the decimal to the precison specified in the second argument', () => {
    expect( round(1234.45, -1) ).to.equal(1230)
  })

  it('if the first argument is a string the function returns NaN', () => {
    expect(round('string')).to.be.NaN
  })

  it('if the second argument is a string the function returns NaN', () => {
    expect(round(5, 'string')).to.be.NaN
  })

})
