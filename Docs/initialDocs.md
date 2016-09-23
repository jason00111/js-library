# Initial

## Function Description
Gets all but the last element of array.

## Function Technical Explanation
Initial is a function returns everything but the last element of an array. The end result is that the last element of the array will be omitted and only those resulting elements will be left.

In order to achieve this, we first determine if input is neither a array nor a string. If the element is a string, that element will be split into an empty string.

The final result will be everything but the last element of the array.


```javascript
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
