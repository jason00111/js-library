# Range

## Function Description

Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.

## Function Technical Explanation

Arguments:
[start=0] (number): The start of the range.
end (number): The end of the range.
[step=1] (number): The value to increment or decrement by.

Returns:
(Array): Returns the range of numbers.

The function iterates through some logic in order to configure the correct processes for the arguments that are given. It then adds the start argument with the step argument in order to create an array of the sums up to the end.

## Examples:
```javascript
_.range(4);
// => [0, 1, 2, 3]
 
_.range(-4);
// => [0, -1, -2, -3]
 
_.range(1, 5);
// => [1, 2, 3, 4]
 
_.range(0, 20, 5);
// => [0, 5, 10, 15]
 
_.range(0, -4, -1);
// => [0, -1, -2, -3]
 
_.range(1, 4, 0);
// => [1, 1, 1]
 
_.range(0);
// => []
```