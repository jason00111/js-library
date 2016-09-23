const round = ( number, precision = 0 ) => {
  if(typeof number !== 'number' || typeof precision !== 'number') {
    return NaN
  }
  return Math.round(number * Math.pow(10,precision)) / Math.pow(10,precision)
}

export default round
