const parseInt = (input) => {
  if(typeof input === 'number') {
    return Math.floor(input)
  }
  if(Array.isArray(input)) {
    return Math.floor(input[0])
  }
  if(typeof input === 'string') {
    return Math.floor(Number(input))
  }
  return NaN
}

export default parseInt
