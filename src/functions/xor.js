const xor = ( ...arrays ) =>
  arrays.reduce( (memo, array) =>
    eliminateRepetitionsFromFront(
      [ ...memo, ...eliminateRepetitions( array ) ]
    ), []
  )

const eliminateRepetitionsFromFront = array =>
  eliminateRepetitions( array.reverse() ).reverse()

const eliminateRepetitions = array =>
  array.reduce( (memo, value) => {
    if( ! memo.includes( value )) {
      memo.push( value )
    }

    return memo
  }, [])

export default xor
