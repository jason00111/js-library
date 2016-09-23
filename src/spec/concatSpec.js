const expect = require('chai').expect

import concat from '../functions/concat.js'

describe('concat', () => {
  it('concatenates all arrays and values to a given array', () => {
    expect( concat([1,2,3], [4], 5, ['one', 2]) ).to.deep.equal([1,2,3,4,5,'one',2])
  })
  it('concatenates all arrays and values to a given value no matter what the value', () => {
    expect( concat('weirdness', NaN, ['+', false]) ).to.deep.equal(['weirdness', NaN, '+', false])
  })

})
