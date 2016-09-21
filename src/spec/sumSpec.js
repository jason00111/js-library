const chai = require('chai')
const expect = chai.expect

import sum from '../functions/sum.js'

describe('sum', () => {
  it('returns the sum of all the numbers in an array', () => {
    expect(sum([1,2,3])).to.deep.equal(6)
  })
  it('returns 0 if it is not an array or string', () => {
    expect(sum(1)).to.equal(0)
  })
  it('returns NaN if its in the array', () => {
    expect(sum([1,NaN])).to.deep.equal(NaN)
  })
})