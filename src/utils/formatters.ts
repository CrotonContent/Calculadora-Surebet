import { Currency } from '../types/calculator';

export function formatCurrency(value: number, currency: Currency): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };

  const formatter = new Intl.NumberFormat(
    currency === 'BRL' ? 'pt-BR' : 'en-US',
    options
  );

  return formatter.format(value);
}