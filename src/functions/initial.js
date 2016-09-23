const initial = input => {
  if (!Array.isArray(input) && typeof input !== 'string')
    return []
  if (typeof input === 'string')
    input = input.split('')

  return input.slice(0, -1)
}

export default initial