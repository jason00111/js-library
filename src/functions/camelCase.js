const camelCase = string => {
  if(typeof string !== 'string') {
    return undefined
  }

  let result = ''
  let array = string.split(' ')

  result += array[0].toLowerCase()

  array.shift()

  for(let word of array) {
    result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }

  return result
}

export default camelCase
