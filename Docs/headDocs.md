# Head

## Function Description
Gets the first element of an array.

## Function Technical Explanation
Head is a function returns the first element of an array. The end result is that all elements after the first one are omitted and only the first element will be left.

In order to achieve this, we first determine if input is neither an array nor a string. If the input is neither an array nor a string, that will return undefined.

If the input is a string, that result will be split into an empty string.

If the input is an empty array, that result will also be returned as undefined.

The final result is that only the first element of the array will be returned in the result.
