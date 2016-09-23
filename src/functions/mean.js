const mean = input => {
  if ( !Array.isArray( input )) {
    return NaN
  }

  return input.reduce( sumReducer ) / input.length
}

const sumReducer = (memo, number) => {
  if( isNaN(number) ) {
    return NaN
  }

  return memo + number
}

export default mean