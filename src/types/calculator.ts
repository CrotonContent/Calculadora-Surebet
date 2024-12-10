export interface BetInput {
  odds: string;
  commission: string;
  bookmaker: string;
}

export interface CalculationResult {
  stake: number;
  probability: number;
  expectedReturn: number;
  commission: number;
  netReturn: number;
}

export type Currency = 'BRL' | 'USD' | 'EUR';

export interface CalculatorState {
  totalInvestment: string;
  currency: Currency;
  bets: BetInput[];
  results: CalculationResult[] | null;
  totalProfit: number | null;
  profitPercentage: number | null;
}