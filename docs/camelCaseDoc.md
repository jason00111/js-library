# CamelCase

## Function Description

Converts a string to camel case style.

## Function Technical Explanation

CamelCase accepts a string of words as an argument and returns that string with all the spaces removed and the first letter of each word except the first word uppercased and the remaining characters lowercased.

## Examples
```javascript
camelCase('camel case')
// => 'camelCase'

camelCase('HELLO WORLD')
// => 'helloWorld'

camelCase('hElLo wOrLd')
// => 'helloWorld'
```
