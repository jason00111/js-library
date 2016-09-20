const sumReducer = (memo, number) => {
  if( isNaN( number) ) {
    throw "Found a thing that wasn't a number"
  }

  return memo + number
}

const mean = input => {
  if ( !Array.isArray( input )) {
    return NaN
  }

  try {
    return input.reduce( sumReducer ) / input.length
  } catch( exception ) {
    return NaN
  }
}

export default mean