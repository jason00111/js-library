const chai = require('chai')
const expect = chai.expect

import head from '../functions/head.js'

describe('head', () => {
  it('finds the first element of an array', () => {
    expect( head([1,2,3,4])).to.equal(1)
  })
  it('finds the first character in a string', () => {
    expect( head('string')).to.equal('s')
  })
  it('returns undefined if input is not a string or an array', () => {
    expect( head(true)).to.be.undefined
  })
})