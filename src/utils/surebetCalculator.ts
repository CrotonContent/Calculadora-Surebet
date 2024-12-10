import { BetInput, CalculationResult } from '../types/calculator';

export function calculateSurebet(
  investment: number,
  bets: BetInput[]
): { results: CalculationResult[] | null; totalProfit: number; profitPercentage: number } {
  // Filter out empty odds
  const validBets = bets.filter(bet => parseFloat(bet.odds) > 0);
  
  if (validBets.length < 2) {
    return { results: null, totalProfit: 0, profitPercentage: 0 };
  }

  // Calculate probabilities and check if it's a valid surebet
  const probabilities = validBets.map(bet => {
    const odds = parseFloat(bet.odds);
    const commission = parseFloat(bet.commission) / 100;
    return 1 / (odds * (1 - commission));
  });

  const totalProbability = probabilities.reduce((sum, prob) => sum + prob, 0);

  // Not a valid surebet if total probability is >= 1
  if (totalProbability >= 1) {
    return { results: null, totalProfit: 0, profitPercentage: 0 };
  }

  // Calculate stakes and returns
  const results = validBets.map((bet, index) => {
    const odds = parseFloat(bet.odds);
    const commission = parseFloat(bet.commission) / 100;
    const probability = probabilities[index];
    const stake = (investment * probability) / totalProbability;
    const expectedReturn = stake * odds;
    const commissionAmount = expectedReturn * commission;
    const netReturn = expectedReturn - commissionAmount;

    return {
      stake,
      probability: probability * 100,
      expectedReturn,
      commission: commissionAmount,
      netReturn
    };
  });

  const lowestNetReturn = Math.min(...results.map(r => r.netReturn));
  const totalInvestment = results.reduce((sum, r) => sum + r.stake, 0);
  const profit = lowestNetReturn - totalInvestment;
  const profitPercentage = (profit / totalInvestment) * 100;

  return {
    results,
    totalProfit: profit,
    profitPercentage
  };
}