const expect = require('chai').expect

import range from '../functions/range.js'

describe('range', () => {
  it('when passed two arguments min and max returns an array with the numbers between min (inclusive) and max (exclusive)', () => {
    expect( range(5,11) ).to.eql([5,6,7,8,9,10])
  })

  it('if the second argument is less than the first, return numbers in reverse order', () => {
    expect( range(11,5) ).to.eql([11,10,9,8,7,6])
  })

  it('if only one argument is passed, return the numbers from 0 to the argument', () => {
    expect( range(5) ).to.eql([0,1,2,3,4])
  })

  it('if three arguments are passed, the third argument is the step size between numbers', () => {
    expect( range(5,11,2) ).to.eql([5,7,9])
  })

  it('if 0 is passed, returns an empty array', () => {
    expect( range(0) ).to.eql([])
  })

  it('if the only argument is a negative number, return the numbers from 0 to the argument, counting down by one', () => {
    expect( range(-5) ).to.eql([0,-1,-2,-3,-4])
  })

})
