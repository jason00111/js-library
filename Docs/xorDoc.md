# xor

## Function Description

Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.

## Function Technical Explanation

Arguments

[arrays] (...Array): The arrays to inspect.
Returns

(Array): Returns the new array of filtered values.

## Example

```javascript  
_.xor([2, 1], [2, 3]);
// => [1, 3]
```
