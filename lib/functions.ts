import { useRouter } from 'next/router';

export function formatCurrency(value: number): string {
  const { locale } = useRouter();

  return value.toLocaleString(locale ?? 'en', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
