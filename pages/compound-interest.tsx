import CompoundInterestCalculator from 'features/compoundInterestCalculator/CompoundInterestCalculator';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function CompoundInterestCalculatorPage() {
  return <CompoundInterestCalculator />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer', 'compound-interest'])),
  },
});
