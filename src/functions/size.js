const size = input => {
  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length
  }

  if (input instanceof Object) {
    return Object.keys(input).length
  }

  return 0
}

export default size
