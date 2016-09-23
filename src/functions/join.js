const join = (input, separator = ',') => {
  if (!Array.isArray(input) && typeof input !== 'string')
    return ''
  if (typeof input === 'string')
    input = input.split('')

  return input.reduce( (memo, current) => {
    return memo + current + separator
  }, '' ).slice(0, -1)
}

export default join
