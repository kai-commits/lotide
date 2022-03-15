# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kaimeikle/lotide`

**Require it:**

`const _ = require('@kaimeikle/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: creates an object that counts the occurences of each letter in a string.
* `countOnly(allItems, itemsToCount)`: creates an object that counts only specified items.
* `findKey(object, callback)`: returns the first key that satisfies the provided testing function.
* `findKeyByValue(object, value)`: returns the first key of a specified value.
* `head(array)`: returns the first element in an array.
* `letterPositions(string)`: creates an object that counts the indices of each letter in a string.
* `map(array, callback)`: creates a new array of elements that satisfies the provided testing function.
* `middle(array)`: creates an array of the elements in middle of the provided array.
* `tail(array)`: creates an array without the first value of the provided array.
* `takeUntil(array, callback)`: creates an array of elements taken from the beginning of an array until the element satisfies the provided testing function.
* `without(source, itemsToRemove)`: creates an array excluding specified items.