# Prepend the Date and Time

## Installation and Usage

First, install with `npm install --save prepend-date`

Then require it in and use it like so:

``` javascript
var prepend = require('prepend-date');
var array = ['Stephen', 'Charlie', 'Tanya'];

console.log(prepend.prependDateTime(array));
```

It prepends the current date in MM/DD format to each string and returns a new array. Expected outcome:

**[ '11/15 Stephen', '11/15 Charlie', '11/15 Tanya' ]**
