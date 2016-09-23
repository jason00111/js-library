# Join

## Function Description

Converts all elements in array into a string separated by separator, which is by default a comma.

## Function Technical Explanation

Arguments:
array (Array): The array to convert.
[separator=','] (string): The element separator.

Returns:
(string): Returns the joined string.

The function iterates over every single element in an array and concatenates it to a string along with the seprator.

## Examples:
```javascript
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```