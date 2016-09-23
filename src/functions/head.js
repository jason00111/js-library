const head = input => {
  if (!Array.isArray(input) && typeof input !=='string')
    return undefined
  if (typeof input === 'string')
    input = input.split('')
  if (input === [])
    return undefined
  return input[0]
}

export default head