import { calcDiffDays } from '@/composables/useCalcDiffDays'

export const calcPlanPrice = ({ from, to, price }) => {
  const diffDays = calcDiffDays(from, to)
  return diffDays * price
}
