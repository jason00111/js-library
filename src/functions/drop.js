const drop = (input, n) => {
  if( n === 0) {
    n = 0
  } else {
    n = n || 1
  }
  if( typeof input === 'string' ) {
    input = input.split('') 
  }
  if(!(Array.isArray(input))) {
    return []
  }
  if( n > input.length ) {
    return []
  }
  if( n < 1 ) {
    return input
  }
  input = input.slice(n)
  return input
}

export default drop