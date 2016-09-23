const concat = (array, ...values) => {
  let result = []
  Array.isArray(array) ? result = array : result.push(array)
  for(let value of values) {
    if (!Array.isArray(value)) {
      result.push(value)
    } else {
      value.forEach(ele => {
        result.push(ele)
      })
    }
  }
  return result
}

export default concat
