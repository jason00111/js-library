# Size

## Function Description
Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.

## Function Technical Explanation
Size is a function that returns the size of a collection by determining its length in arrays, number, strings, or keys.

In order to achieve this, we first determine if input is either a string or an array. If this is true, the length will be returned.

We then use an if statement to check if the element is an object. 

The final result will be the size of the collection.

```javascript
_.size([1, 2, 3]);
// => 3

_.size({ 'a': 1, 'b': 2 });
// => 2

_.size('pebbles');
// => 7
// => [1, 2, 3]
```
