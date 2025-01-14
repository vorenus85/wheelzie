import { format } from 'date-fns'

export const formatDate = timestamp => {
  return format(new Date(timestamp), 'MMM d, yyyy')
}
