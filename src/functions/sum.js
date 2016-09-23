const sum = input => {
  if(typeof input === 'string') 
    return input

  if(!Array.isArray(input)) {
    return 0
  }

  return input.reduce( (initial, current) => 
    initial + current
  , 0)
}

export default sum