const chai = require('chai')
const expect = chai.expect
import last from '../functions/last.js'

describe('last', () => {
  it('returns the last element of an array', () => {
    expect(last([1,2,3])).to.eql(3)
  })
  it('returns undefined if input is not string or array', () => {
    expect(last(2)).to.be.undefined
  })
  it('treats a string as an array and returns the last character of the string', () => {
    expect(last('string')).to.eql('g')
  }) 
  it('returns undefined if input is an empty array', () => {
    expect(last([])).to.be.undefined
  })
  it('returns undefined if input is an empty string', () => {
    expect(last('')).to.be.undefined
  })
})
