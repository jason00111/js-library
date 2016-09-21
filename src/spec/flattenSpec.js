const chai = require('chai')
const expect = chai.expect

import flatten from '../functions/flatten.js'

describe('flatten', () => {
  it('if the argument is an object the function returns an empty array', () => {
    expect( flatten({a:1}) ).to.deep.equal([])
  })

  it('if the argument is a number the function returns an empty array', () => {
    expect( flatten(4) ).to.deep.equal([])
  })

  it('if the argument is undefined the function returns an empty array', () => {
    expect( flatten(undefined) ).to.deep.equal([])
  })

  it('if the argument is null the function returns an empty array', () => {
    expect( flatten(null) ).to.deep.equal([])
  })

  it('if the argument is a boolean the function returns an empty array', () => {
    expect( flatten(true) ).to.deep.equal([])
  })

  it('if the argument is a string the function returns an array of elements separated in strings', () => {
    expect( flatten('Yaseen') ).to.deep.equal(['Y', 'a', 's', 'e', 'e', 'n'])
  })

  it('if the argument is an array the function returns an array flattened one level deep', () => {
    expect( flatten([1, 2, [3, 4], 5, [6, [7, 8]]]) ).to.deep.equal([1, 2, 3, 4, 5, 6, [7, 8]])
  })
})
