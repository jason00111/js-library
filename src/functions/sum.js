const sum = array => {
  if ((!Array.isArray(array)) && typeof array !== 'string') {
    return 0
  }
  let total = 0
  array.forEach(element => {
    total += element
  })
  return total
}

export default sum