# use-calendar-matrix

React hooks to generate a raw calendar matrix (array of weeks and days) given the year and month using [date-fns](https://date-fns.org) library.
This value then can be used for any purpose related to calendar like datepicker and so on.


## Install

```shell
npm install use-calendar-matrix
```

or

```shell
yarn add use-calendar-matrix
```


## Usage

```js
let [matrix] = useCalendarMatrix(
    year,
    month,
    formatter = day => fn(day),
    weekStartsOn = 1,
    daysInWeek = 7
  )
```

The Basic usage for this Hook is to generate a matrix of javascript `Date` value with weeks as the rows and days as the columns by providing both year and month that you want to generate.

```js
import React from 'react'
import useCalendarMatrix from 'use-calendar-matrix'

const MyCalendar = () => {

  let [matrix] = useCalendarMatrix(2019, 8)

  return (
    <ul>
      {matrix.map(
        (week, index) =>
          <ul>{week.map(
            (day, i) => <li>{day}</li>
          )}
          </ul>
        )
      }
    </ul>
  )
}

```

Add some event to change the year and month, and styling to the the components and you'll get yourself something like this: [Example](http://components-lab.netlify.com/#calendar-matrix)

**⚠️ Note:** Javascript `Date` starts from `0`. So `0` for `January` and `11` is `December`.


## Optional Parameters

By default the wooks will return an array of Javascript `Date` value, with Monday as the starting day of the week, and 7 days in a week.

#### day => formatter(day)

You can add your own formatter function to process the `Date` value as you wish. For example turning it into an object with specific value with the help of `date-fns` helper functions.

#### weekStartsOn

Starting day of the week, default to `1` (Monday). Needed for `date-fns` calculation. This value starts from `0` to `6`. So, `0` for Sunday, `1` for Monday, and so on.

#### daysInWeek

This value used to generate the total column for the matrix, default to `7`. For now there's functionality to generate a matrix for less or more days than `7`. So you can't really customize it actually.


## Issue and Contributing

Please kindly submit an issue if you have some. I'm glad if I could help.
And for now this functionality is all I need. But I've some ideas for later development.

## License

MIT