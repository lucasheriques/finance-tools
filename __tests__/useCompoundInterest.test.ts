import useCompoundInterest from 'lib/useCompoundInterest';

describe('useCompoundInterest hook', () => {
  it('returns the correct results', () => {
    const result = useCompoundInterest(100, 10, 6, 12);

    expect(result.totalInvested[11]).toEqual(220);
    expect(result.totalAccumulated[11].toFixed(2)).toEqual('229.27'); //?
  });

  it('returns the correct results with no monthly add', () => {
    const result = useCompoundInterest(100, 0, 6, 12);

    expect(result.totalAccumulated[11].toFixed(2)).toEqual('106.00'); //?
  });
});
