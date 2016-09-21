const chai = require('chai')
const expect = chai.expect 

import compact from '../functions/compact.js'

describe('compact', () => {
  it('removes "" (empty strings) from an array', () => {
    expect(compact([1,2,3,'', , 'hi'])).to.deep.equal([1,2,3,'hi'])
  })
  it('removes null from an array', () => {
    expect(compact([true, null])).to.deep.equal([true])
  })
  it('removes false from an array', () => {
    expect(compact([true, false, 1, 2])).to.deep.equal([true, 1, 2])
  })
  it('removes undefined from an array', () => {
    expect(compact([undefined])).to.deep.equal([])
  })
  it('removes NaN from an array', () => {
    expect(compact([1,2,3,NaN])).to.deep.equal([1,2,3])
  })
  it('removes 0 from an array', () => {
    expect(compact([0,1,23,4])).to.deep.equal([1,23,4])
  })
  it('returns an array of the characters in a string if passed a string', () => {
    expect(compact('hi')).to.deep.equal(['h', 'i'])
  })
  it('returns an empty array for input that is not an array or string', () => {
    expect(compact(123)).to.deep.equal([])
  })
  it('returns an empty array if all values are falsey in the array', () => {
    expect(compact(['', false, null, 0, undefined, NaN])).to.deep.equal([])
  })
})