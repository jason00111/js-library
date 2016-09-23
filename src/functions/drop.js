const drop = (input, n = 1) => {
  if( typeof input === 'string' ) {
    input = input.split('') 
  }

  if(!(Array.isArray(input))) {
    return []
  }

  if( n < 1 ) {
    return input
  }

  return input.slice(n)
}

export default drop