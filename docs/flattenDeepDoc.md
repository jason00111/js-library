# Flatten Deep 

## Function Description

Recursively flattens an array of arrays within arrays into a simple array.

## Function Technical Explanantion

The function takes one aragument, which is an array. We then check if the input that is given is actually an array, if it's not an array nor a string we return an empty array. If it is a string, we split the string into an array and return that. Then, when the input is an array we iterate through each element and check if its an array. If it is not an array then we push it to a results array, if it is an array then we concatenate it and call the flattenDeep function within the iteration, so that way we create a recursive function that will iterate through the elements in the array and check if its an array x ammount of times, since we don't know how many array are going to be in the original array.

## Examples:
```javascript
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```