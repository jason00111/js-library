const chai = require('chai')
const expect = chai.expect

import drop from '../functions/drop.js'

describe('drop', () => {
  it( 'if no second argument is given it returns an array without the first element in the original array of the input', () => {
    expect(drop([1,2,3])).to.eql([2,3])
  })
  it('returns an array omitting the number of elements specified by the second argument ', () => {
    expect(drop([1,2,3,4], 3)).to.eql([4])
  })
  it('treats a string as an array if a string is the input', () => {
    expect(drop('string', 2)).to.eql(['r', 'i', 'n', 'g'])
  })
  it('returns an empty array if the input is not a string or array', () => {
    expect(drop({a:2, b:1}, 1)).to.eql([])
  })
  it('if the second argument is a number exceeding the length of the array then it returns []', () => {
    expect(drop([1,2,3], 4)).to.eql([])
  })
  it('if the second argument is zero the original array is returned', () => {
    expect(drop([1,2,3,4], 0)).to.eql([1,2,3,4])
  })
})