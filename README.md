[![NPM
version](https://badge.fury.io/js/to-date.png)](http://badge.fury.io/js/to-date)
[![Build Status](https://secure.travis-ci.org/vesln/to-date.png)](http://travis-ci.org/vesln/to-date)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

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
