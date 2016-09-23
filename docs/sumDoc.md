# Sum

## Function Description

Computes the sum of the values in array.

## Function Technical Explanation

Arguments:
array (Array): The array to iterate over.

Returns:
(number): Returns the sum.

The function checks whether the input is an array. If the input is a string it returns the original input of the string. If the input is neither an array nor a string it returns 0. For the array, the function just adds the numbers within the array together, if an element within the array is a string, it just concatenates the string to the result.

## Examples:
```javascript
_.sum([4, 2, 8, 6]);
// => 20
```