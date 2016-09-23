# ParseInt 

## Function Description

Converts string to an integer.

## Function Technical Explanation

Arguments:
string (string): The string to convert.

Returns:
(number): Returns the converted integer.

The function gets the string and converts the number within the string using the Number function and returns the number rounded up. It also rounds the number if the input is a number in the decimal format.

## Examples:
```javascript
_.parseInt('08');
// => 8
```