const flattenDeep = array => {
  if( typeof array === 'string') {
    array = array.split('')
  }
  if( !(Array.isArray(array))) {
    return []
  }
  let results = []
  array.forEach(element => {
    if(Array.isArray(element)) {
      results = results.concat(flattenDeep(element))
    } else {
      results.push(element)
    }
  })
  return results
}


  // //  If its not an array andstring then return []
  // // checks if its an array or string
  //   // if its a string splice it into an array
  // //  declare a results array that is empty
  // // for the array iterate through each element using forEach
  //   // Then check if its an array
  //   //  if its not then push it into the results aray
  //   //  if it is an array then concatenate it with the results array
  // //  return result
  // console.log('here', input)
  // if ( !(Array.isArray(input)) && typeof input !== 'string') {
  //   console.log('here1', input)
  //   return []
  // }
  
  // if ( typeof input === 'string' ) {
  //   // input = input.split('')
  //   // console.log('here2', input)
  //   console.log('here654', input.split(''))
  //   return input.split('')
  //   // let results = []
  //   // input.forEach(element => {
  //   //   results.push(element)
  //   // })
  //   // console.log('here25', results)
  //   // return results
  // }
  // if (Array.isArray(input)) {    
  //   let results = []
  //   input.forEach(element => {
  //     if ( Array.isArray(element) ) {
  //       element.filter(Array.isArray(element))
  //       results.concat(element)    
  //     }
  //     results.push(element)
  //   })
  //   console.log('here3', results)
  //   return results
  // }
// }

// const flattenDeep = array => {
//   if (typeof array === 'string'){
//     array = array.split('')
//   }
//   if (!Array.isArray(array)) return [];
//   let flattenedArray = []
//   array.forEach(member => {
//     if (Array.isArray(member)){
//       flattenedArray = flattenedArray.concat(flattenDeep(member))
//     }else{
//       flattenedArray.push(member)
//     }
//   })
//   return flattenedArray;
// }

export default flattenDeep