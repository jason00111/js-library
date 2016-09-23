const random = (a, b) => {
  if(isNaN(a) || isNaN(b)) {
    return NaN
  }

  if(a > b) {
    [a, b] = [b, a]
  }

  a = Math.ceil(a)
  b = Math.floor(b)

  return Math.floor(Math.random() * (b - a) + a)
}

export default random
