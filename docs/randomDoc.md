# Random

## Function Description

Creates a random number between two given numbers.

## Function Technical Explanation

Random accepts two numbers, *min* and *max* as arguments and returns a random integer greater than or equal to *min* and less than or equal to *max*. *min* and *max* can be integers or decimal numbers but the random number which is returned is always an integer.

## Examples
```javascript
random(5, 11)
// => 6

random(5, 11)
// => 11

random(5, 11)
// => 7

random(3.2, 5.1)
// => 4

random(3.2, 5.1)
// => 5

random(3.2, 5.1)
// => 4
```
