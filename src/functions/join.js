const join = (input, separator = ',') => {
  if (!Array.isArray(input) && typeof input !== 'string')
    return ''
  if (typeof input === 'string')
    input = input.split('')
  let result = ''
  input.forEach( ele => {
    result += ele + separator
  })
  return result.slice(0, (result.length - 1))
}

export default join
