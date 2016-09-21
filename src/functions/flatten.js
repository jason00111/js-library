const flatten = input => {
  let result = []
  if(!Array.isArray(input) && typeof input !== 'string') {
    return []
  }
  if(Array.isArray(input)) {
    for(let el of input) {
      if(!Array.isArray(el)) {
        result.push(el)
      } else {
        for(let innerEl of el) {
          result.push(innerEl)
        }
      }
    }
    return result
  }
  if(typeof input === 'string') {
    return input.split('')
  }
}

export default flatten
