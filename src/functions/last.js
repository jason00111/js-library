const last = input => {
  if (!Array.isArray(input) && typeof input !== 'string' ) {
    return undefined
  }
  if (typeof input === 'string') {
    input = input.split('')
  }
  if (input === []) {
    return undefined
  }
  
  return input[input.length-1]
}

export default last