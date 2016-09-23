const range = (...args) => {
  let start, end, step
  if(args.length === 1) {
    start = 0
    end = args[0]
    if (args[0] > 0) {
      step = 1
    } else {
      step = -1
    }
  } else if (args.length === 2) {
    start = args[0]
    end = args[1]
    if (args[0] < args[1]) {
      step = 1
    } else {
      step = -1
    }
  } else if (args.length === 3) {
    start = args[0]
    end = args[1]
    step = args[2]
  }

  let result = []
  for (let x = start; compare(step, x, end); x += step) {
    result.push(x)
  }

  return result
}

const compare = (step, x, end) => {
  if (step > 0) {
    return x < end
  } else {
    return x > end
  }
}

export default range
