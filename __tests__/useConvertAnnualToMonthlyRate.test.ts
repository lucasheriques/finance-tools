import useConvertAnnualToMonthlyRate from 'lib/useConvertAnnualToMonthlyRate';

describe('useConvertAnnualToMonthlyRate hook', () => {
  it('returns the correct results', () => {
    expect(useConvertAnnualToMonthlyRate(6)).toEqual(0.004868); //?
  });
});
