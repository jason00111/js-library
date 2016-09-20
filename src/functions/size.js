const size = input => {
  if (typeof input === 'string') {
    return input.length
  }

  if (input instanceof Object) {
    return Object.keys(input).length
  }

  if (Array.isArray(input)) {
    return input.length
  }

  return 0
}

export default size
