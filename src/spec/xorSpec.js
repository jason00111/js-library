const expect = require('chai').expect

import xor from '../functions/xor.js'

describe('xor', () => {
  it('Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.', () => {
    expect(xor([1,1],[3,4],[8,3],[4,9,4,3],[4,6])).to.eql([1, 8, 9, 3, 4, 6])
  })
})
