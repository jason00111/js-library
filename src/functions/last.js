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
  for (let i = 0; i < input.length; i++) {
    if (i < (input.length-1)) {}
    else {
      return input[i]
    }
  }
  // return input.slice(-1)
}

export default last