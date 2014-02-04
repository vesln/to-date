[![NPM
version](https://badge.fury.io/js/to-date.png)](http://badge.fury.io/js/to-date)
[![Build Status](https://secure.travis-ci.org/vesln/to-date.png)](http://travis-ci.org/vesln/to-date)

# to-date

Simple time ago/from now date generator.

## Usage

#### from now

```js
var toDate = require('to-date');
```

```js
toDate('1 day from now');
toDate('2 months from now');
toDate('11 years from now');
```

#### ago

```js
toDate('1 day ago');
toDate('2 months ago');
toDate('11 years ago');
```

## Installation

```bash
npm install to-date
```

## Tests

```bash
$ make test
```

## License

MIT License
