const xor = ( ...arrays ) =>
  arrays.reduce( (memo, array) =>
    eliminateRepetitionsFromFront(
      [ ...memo, ...eliminateRepetitions( array ) ]
    ), []
  )

  // let initial = []
  //
  // for( const array of arrays ) {
  //   initial = eliminateRepetitionsFromFront([
  //     ...initial,
  //     ...eliminateRepetitions( array )
  //   ])
  // }
  //
  // return initial

const eliminateRepetitionsFromFront = array =>
  eliminateRepetitions( array.reverse() ).reverse()

const eliminateRepetitions = array =>
  array.reduce( (memo, value) => {
    if( ! memo.includes( value )) {
      memo.push( value )
    }

    return memo
  }, [])

// helper function to count the number of times 'countEl' appears in 'array'
// const count = (array, countEl) => {
//   let count = 0
//   for (let el of array) {
//     if (el === countEl) {
//       count++
//     }
//   }
//   console.log(countEl, 'occurs', count, 'times')
//   return count
// }

// const xor = (...arrays) => {
//   let workingArray = []
//   let result = []
//
//   console.log(arrays)
//   //combine arrays eliminating repitions within each array
//   for (var array of arrays) {
//     for(var el of eliminateRepetitions(array)) {
//       workingArray.push(el)
//     }
//   }
//
//   console.log(workingArray)
//
//   //keeps only elements that occur an odd number of times
//   for (let el of eliminateRepetitions(workingArray)) {
//     if (count(workingArray, el) % 2 === 1) {
//       result.push(el)
//     }
//   }
//
//   console.log(result)
//
//   return result
// }

export default xor
