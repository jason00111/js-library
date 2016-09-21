const chai = require('chai')
const expect = chai.expect

import flattenDeep from '../functions/flattenDeep.js'

describe('flattenDeep', () => {
  it('iterates through an array to flatten it to a simple array', () => {
    const array = [1, [2], 3, [4, 5, [6], 7], 8];
    const flattenedArray  = flattenDeep(array)
    expect(flattenedArray).to.deep.equal([1,2,3,4,5,6,7,8])
  })
  it('if the string is an input then it turns a string into an array', () => {
    expect(flattenDeep("hello")).to.deep.equal(['h', 'e', 'l', 'l', 'o'])
  })
  it('returns an empty array if the input is not an array or string', () => {
    expect(flattenDeep(1)).to.deep.equal([])
  })
})