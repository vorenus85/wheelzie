import { differenceInDays, startOfDay } from 'date-fns'

export const calcDiffDays = (from, to) => {
  const fromDate = startOfDay(new Date(from * 1000))
  const toDate = startOfDay(new Date(to * 1000))
  return differenceInDays(toDate, fromDate)
}
