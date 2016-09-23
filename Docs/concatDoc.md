# Concat

## Function Description

Creates a new array concatenating array with any additional arrays and/or values, essentially just merging arrays together.

## Function Technical Explanation

Concat takes an arbitrary number of arguments, the first one being the array that is being added to and the rest of the arguments are the elements that are being added onto the first array given as the first argument. 
First, we check if the array given is an array and if so we push it into an empty results array that we will use to continue and push the remaining elements into. We create a for loop in order to check if the given arguments are an array, if they are, we loop through each element within the array and push it into results. If the element given as an argument is not an array then we simply push it to the results array. Finally, once we iterate through all the secondary arguments we return the results array with all the added elements.


## Examples:
```javascript
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```