const size = input => {
  if (input instanceof String) {
    return input.length
  }

  if (input instanceof Object) {
    return input.length
  }

  if (Array.isArray(input)) {
    return input.length
  }

  return 0
}

export default size
