const chai = require('chai')
const expect = chai.expect

import size from '../functions/size.js'

describe('size', () => {
  it('counts the number of elements in an array', () => {
    expect( size( [1,2,3] )).to.equal(3)
  })

  it('counts the number of elements in an object', () => {
    expect( size( {a:1, b: 2, c: 3} )).to.equal(3)
  })

  it('counts the number of characters in a string', () => {
    expect( size( "hello world" )).to.equal(11)
  })

  it('expects a collection to be passed and return 0 if not', () => {
    expect( size( 2 )).to.equal(0)
  })
})
