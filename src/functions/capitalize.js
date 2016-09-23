const capitalize = string => {
  if (typeof string !== 'string') {
    return undefined
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export default capitalize
