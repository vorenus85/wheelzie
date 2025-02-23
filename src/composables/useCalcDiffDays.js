import { differenceInDays, startOfDay } from 'date-fns'

export const calcDiffDays = (from, to) => {
  const fromDate = startOfDay(new Date(from))
  const toDate = startOfDay(new Date(to))
  return differenceInDays(toDate, fromDate)
}
