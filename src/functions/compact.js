const compact = array => {
  if (typeof array === 'string') {
    array = array.split('')
  }
  if (!Array.isArray(array)) {
    return []
  }
  var results = []
  array.forEach(element => {
    if (element) results.push(element);
  }) 
  return results;
}

export default compact