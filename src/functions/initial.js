const initial = input => {
  if (!Array.isArray(input) && typeof input !== 'string')
    return []
  if (typeof input === 'string')
    input = input.split('')
  // let result = []
  // for ( let i = 0; i < (input.length-1); i++ ) {
  //   result.push(input[i])
  // }
  // return result
  return input.slice(0, (input.length-1))
}

export default initial