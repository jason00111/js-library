const random = (a, b) => {
  if(isNaN(a) || isNaN(b)) {
    return NaN
  }

  if(a > b) {
    [a, b] = [b, a]
  }

  a = Math.ceil(a)
  b = Math.floor(b)

  let c = Math.random()
  c = c * (b - a)
  c = c + a
  c = Math.floor(c)
  return c
}

export default random
