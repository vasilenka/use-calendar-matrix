import { useEffect, useState } from 'react'
import {
  addDays,
  startOfWeek,
  differenceInCalendarWeeks,
  endOfMonth,
  startOfMonth,
} from 'date-fns'

export const generateMatrix = (
  year,
  month,
  formatDay,
  weekStartsOn,
  daysInWeek
) => {
  let date = new Date(year, month)
  let startDay = startOfMonth(date)
  let lastDay = endOfMonth(date)

  const startDate = startOfWeek(startDay, { weekStartsOn })
  const rows =
    differenceInCalendarWeeks(lastDay, startDay, { weekStartsOn }) + 1
  const cols = daysInWeek
  const totalDays = rows * cols

  return Array.from({ length: totalDays })
    .map((_, index) => addDays(startDate, index))
    .map(day => (typeof formatDay === 'function' ? formatDay(day) : day))
    .reduce((matrix, current, index, days) => {
      return index % cols === 0
        ? [...matrix, days.slice(index, index + cols)]
        : matrix
    }, [])
}

export const useCalendarMatrix = (
  year,
  month,
  formatDay = day => day,
  weekStartsOn = 1,
  daysInWeek = 7
) => {
  let [matrix, setMatrix] = useState(
    generateMatrix(year, month, formatDay, weekStartsOn, daysInWeek)
  )

  useEffect(() => {
    setMatrix(generateMatrix(year, month, formatDay, weekStartsOn, daysInWeek))
  }, [year, month])

  return [matrix]
}
