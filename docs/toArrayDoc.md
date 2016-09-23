# toArray

# Function Description

Converts value to an array.

# Function Technical Explanation

Arguments

value (*): The value to convert.
Returns

(Array): Returns the converted array.

If the input is an array we return the input. If the input is a string we split the string into an array. If the input is an object we iterate over every single key and push the value of the key into the results array. If the input is not any of these three the return is an empty array.

#Example:
```javascript
_.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]
 
_.toArray('abc');
// => ['a', 'b', 'c']
 
_.toArray(1);
// => []
 
_.toArray(null);
// => []
```