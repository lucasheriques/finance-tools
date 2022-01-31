import useConvertAnnualToMonthlyRate from './useConvertAnnualToMonthlyRate';

function useCompoundInterest(
  initialAmount: number,
  monthlyAdd: number,
  rate: number,
  months: number
) {
  const monthlyRate = useConvertAnnualToMonthlyRate(rate);
  const totalInvested: Array<number> = [];
  const totalAccumulated: Array<number> = [];
  const monthlyInterest: Array<number> = [];
  const monthlyAccumulatedInterest: Array<number> = [];
  let totalInterest = 0;
  let amount = initialAmount;

  let i = 1;

  for (; i <= months; i += 1) {
    monthlyInterest.push((totalInvested[i - 1] ?? amount + totalInterest) * monthlyRate);
    totalInvested.push(amount + monthlyAdd);
    totalInterest += monthlyInterest[i - 1] ?? 0;
    totalAccumulated.push(totalInvested[i - 1] + totalInterest);
    monthlyAccumulatedInterest.push(totalInterest);
    amount += monthlyAdd;
  }

  return {
    totalInvested,
    monthlyInterest,
    totalInterest,
    totalAccumulated,
    monthlyAccumulatedInterest,
  };
}

export default useCompoundInterest;
