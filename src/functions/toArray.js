const toArray = value => {
  let results = []
  if(Array.isArray(value)) {
    return value
  }
  if(value instanceof Object) {
    for ( let key in value) {
      results.push(value[key])
    }
    return results
  }
  if(typeof value === 'string') {
    return value.split('')
  }
  return results
}

export default toArray