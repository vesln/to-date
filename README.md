[![NPM
version](https://badge.fury.io/js/to-date.png)](http://badge.fury.io/js/to-date)
[![Build Status](https://secure.travis-ci.org/vesln/to-date.png)](http://travis-ci.org/vesln/to-date)

# to-date

Simple time ago/from now date generator.

## Usage

```js
var toDate = require('to-date');
```

```js
toDate(1).day.ago;
toDate(1).day.fromNow;
toDate(1).day.from.now;

toDate(2).hours.ago;
toDate(2).hours.fromNow;
toDate(2).hours.from.now;

toDate(3).months.ago;
toDate(3).months.fromNow;
toDate(3).months.from.now;

toDate(4).years.ago;
toDate(4).years.fromNow;
toDate(4).years.from.now;

toDate('1 day from now');
toDate('2 months from now');
toDate('11 years from now');

toDate('1 day ago');
toDate('2 months ago');
toDate('11 years ago');
```

#### Units

- second
- seconds
- minute
- minutes
- hour
- hours
- day
- days
- week
- weeks
- month
- months
- year
- years

## Installation

```bash
npm install to-date
```

## License

MIT License
