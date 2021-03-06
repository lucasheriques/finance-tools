import { Button, NumberInput, SimpleGrid, Space, Table, Title } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import Shell from 'components/AppShell';
import { formatCurrency } from 'lib/functions';
import useCompoundInterest from 'lib/useCompoundInterest';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

interface InterestRateValuesForm {
  initial: number;
  monthly: number;
  time: number;
  rate: number;
}

export default function CompoundInterestCalculator() {
  const { t } = useTranslation('compound-interest');
  const { locale } = useRouter();
  console.log('locale', locale);
  const [interestRateValues, setInterestRateValues] = useState<InterestRateValuesForm>({
    initial: 0,
    monthly: 0,
    time: 1,
    rate: 1.0,
  });
  const interestRateResults = useMemo(
    () =>
      useCompoundInterest(
        interestRateValues.initial,
        interestRateValues.monthly,
        interestRateValues.rate,
        interestRateValues.time
      ),
    [interestRateValues]
  );

  console.log(interestRateResults);

  const form = useForm({
    initialValues: {
      initial: 0,
      monthly: 0,
      time: 1,
      rate: 1.0,
    },
  });

  return (
    <Shell>
      <Title>{t('title')}</Title>
      <Space h="md" />
      <form
        onSubmit={form.onSubmit((values) =>
          setInterestRateValues({ ...values, time: values.time * 12 })
        )}
      >
        <SimpleGrid cols={2} spacing="lg">
          <div>
            <NumberInput
              defaultValue={1000}
              placeholder="Investimento inicial"
              label="Investimento inicial"
              required
              hideControls
              {...form.getInputProps('initial')}
            />
            <Space h="md" />
            <NumberInput
              defaultValue={100}
              placeholder="Investimento mensal"
              label="Investimento mensal"
              required
              hideControls
              {...form.getInputProps('monthly')}
            />
          </div>
          <div>
            <NumberInput
              defaultValue={6.0}
              placeholder="Taxa de juros"
              label="Taxa de juros"
              required
              hideControls
              {...form.getInputProps('rate')}
            />
            <Space h="md" />
            <NumberInput
              defaultValue={5}
              placeholder="Per??odo em anos"
              label="Per??odo em anos"
              required
              hideControls
              {...form.getInputProps('time')}
            />
          </div>
        </SimpleGrid>
        <Space h="lg" />
        <Button type="submit">Calcular</Button>
      </form>
      <Space h="lg" />

      <Table striped>
        <thead>
          <tr>
            <td>M??s</td>
            <td>Juros</td>
            <td>Total investido</td>
            <td>Total juros</td>
            <td>Total acumulado</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>--</td>
            <td>R${interestRateValues.initial}</td>
            <td>--</td>
            <td>R${interestRateValues.initial}</td>
          </tr>
          {interestRateResults.monthlyInterest.map((value, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>R${value.toFixed(2)}</td>
              <td>R${interestRateResults.totalInvested[i]}</td>
              <td>
                R$
                {interestRateResults.monthlyAccumulatedInterest[i].toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </td>
              <td>{formatCurrency(interestRateResults.totalAccumulated[i])}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Shell>
  );
}
