const chai = require('chai')
const expect = chai.expect

import toArray from '../functions/toArray.js'

describe('toArray', () => {
  it('converts a string to an array', () => {
    expect(toArray('string')).to.deep.equal(['s', 't', 'r', 'i', 'n', 'g'])
  })
  it('converts objects into an array', () => {
    expect(toArray({a:1,b:2})).to.deep.equal([1,2])
  })
  it('returns an empty array if value is not a string or object', () => {
    expect(toArray(5)).to.deep.equal([])
  })
  it('if value is an array it returns the given array', () => {
    expect(toArray([1, 25])).to.deep.equal([1, 25])
  })
})