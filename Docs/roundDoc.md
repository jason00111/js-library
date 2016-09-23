# round

## Function Description

Computes number rounded to precision.

## Function Technical Explanation

Arguments

number (number): The number to round.
[precision=0] (number): The precision to round to.
Returns

The function takes two arguments. The first argument takes a number and the second argument takes a precision value that could be negative.  

(number): Returns the rounded number.

## Example

```javascript  
_.round(4.006);
// => 4

_.round(4.006, 2);
// => 4.01

_.round(4060, -2);
// => 4100
```
