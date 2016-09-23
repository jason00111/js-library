const flatten = input => {
  let result = []
  if(!Array.isArray(input) && typeof input !== 'string') {
    return []
  }

  if(typeof input === 'string') {
    return input.split('')
  }

  for(let ele of input) {
    if(!Array.isArray(ele)) {
      result.push(ele)
    } else {
      for(let innerEl of ele) {
        result.push(innerEl)
      }
    }
  }
  return result
}

export default flatten
