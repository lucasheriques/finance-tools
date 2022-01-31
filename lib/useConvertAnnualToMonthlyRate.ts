function useConvertAnnualToMonthlyRate(annualRate: number): number {
  return +((1 + annualRate / 100) ** (1 / 12) - 1).toFixed(6);
}

useConvertAnnualToMonthlyRate(6); //?

export default useConvertAnnualToMonthlyRate;
