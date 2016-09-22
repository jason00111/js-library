const chai = require('chai')
const expect = chai.expect
import initial from '../functions/initial.js'

describe('initial', () => {
  it('removes the last element in an array', () => {
    expect(initial([1,2,3])).to.eql([1,2])
  })
  it('turns a string into an array with the same functionality', () => {
    expect(initial('hello')).to.eql(['h','e', 'l', 'l'])
  })
  it('returns an empty array if the input is not an array or string', () => {
    expect(initial({a:1, b:2, c:3})).to.eql([])
  })
})