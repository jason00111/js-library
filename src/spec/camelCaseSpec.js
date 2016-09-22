const expect = require('chai').expect

import camelCase from '../functions/camelCase.js'

describe('camelCase', () => {
  it('accepts a string of words and returns a string with no spaces with the first letter of each word capitalized except the first word', () => {
    expect(camelCase("It is a good day")).to.equal("itIsAGoodDay")
  })

  it('if the argument is not a string return undefined', () => {
    expect(camelCase(456)).to.deep.equal(undefined)
  })
})
