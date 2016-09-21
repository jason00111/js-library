const chai = require('chai')
const expect = chai.expect

import join from '../functions/join.js'

describe('join', () => {
  it('converts elements of an array into a string with each element separated by a comma', () => {
    expect(join(['hello',1,2,3])).to.equal('hello,1,2,3')
  })
  it('converts elements of an array into a string with each element separated by a separator passed as the second argument', () => {
    expect(join(['hello',1,2,3], ' ')).to.equal('hello 1 2 3')
  })
  it('converts characters in a string into a string with each character separated by a seperator', () => {
    expect(join('hello', '~')).to.equal('h~e~l~l~o')
  })
  it('returns an empty string if passed an object', () => {
    expect(join({a:1,b:2})).to.equal('')
  })
  it('returns an empty string if passed a number', () => {
    expect(join(5)).to.equal('')
  })
})
