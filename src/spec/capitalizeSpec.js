const expect = require('chai').expect

import capitalize from '../functions/capitalize.js'

describe(
  'capitalize',
  () => {
    it('accepts a string and returns the string with the first letter uppercase and the remaining letters lowercase', () => {
      expect(capitalize('hElLo')).to.equal('Hello')
    })
    it('returns undefined if not passed a string', () => {
      expect(capitalize([1,2,3])).to.be.undefined
    })
  }
)
