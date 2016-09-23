# Compact

## Function Description
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

## Function Technical Explanation
Compact is a function that creates a new array from its original elements. Elements will be split into groups according to their length. If the array is an odd split, the final chunk will be all that remains.

In order to achieve this, we first determine if input is a string. If it's a string, we split it into an empty string.

We then use a forIf the input is not an array, that will be returned as an empty array.

The final result is that only the first element of the array will be returned in the result.

```javascript
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
