const flattenDeep = array => {
  if( typeof array === 'string') {
    array = array.split('')
  }
  if( !(Array.isArray(array))) {
    return []
  }
  let results = []
  array.forEach(element => {
    if(Array.isArray(element)) {
      results = results.concat(flattenDeep(element))
    } else {
      results.push(element)
    }
  })
  return results
}

export default flattenDeep