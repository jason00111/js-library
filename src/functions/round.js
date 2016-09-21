const round = ( number, precison = 0 ) => {
  if(typeof number !== 'number' || typeof precison !== 'number') {
    return NaN
  }
  return Math.round(number * Math.pow(10,precison)) / Math.pow(10,precison)
}


export default round
