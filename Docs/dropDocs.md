# Drop

## Function Description
Creates a slice of array with n elements dropped from the beginning.


## Function Technical Explanation
Drop is a function that slices from existing elements. The end result is that the number of elements that we specify to drop are then removed from the beginning of the original input.

In order to achieve this, we first determine if the input is a string. If the element is a string, we then split it into an empty string.  

We then test if the element is not an array. If the element is not an array, we return an empty array.

We also test element is less than 1, we return that input.

The final result is that the new array will be missing the amount of elements that we specified when we wrote our const.

```javascript
_.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```
