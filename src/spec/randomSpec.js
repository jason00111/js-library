const chai = require('chai')
const expect = chai.expect

import random from '../functions/random.js'

describe('random', () => {
  it('responds with a non-decimal number between (inclusive) the first two arguments', () => {
    expect( random( 5, 11 )).to.be.within(5,11)
  })

  it('responds with a non-decimal number', () => {
    expect( random(1, 8) % 1).to.equal(0)
  })
})
