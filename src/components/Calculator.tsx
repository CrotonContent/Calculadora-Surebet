import React, { useState } from 'react';
import { calculateSurebet } from '../utils/surebetCalculator';
import { BetInput, CalculatorState, Currency } from '../types/calculator';
import { BetForm } from './calculator/BetForm';
import { ResultsTable } from './calculator/ResultsTable';

const initialBetInput: BetInput = {
  odds: '',
  commission: '0',
  bookmaker: ''
};

export function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    totalInvestment: '',
    currency: 'BRL',
    bets: [{ ...initialBetInput }, { ...initialBetInput }],
    results: null,
    totalProfit: null,
    profitPercentage: null
  });

  const addBet = () => {
    if (state.bets.length < 5) {
      setState(prev => ({
        ...prev,
        bets: [...prev.bets, { ...initialBetInput }]
      }));
    }
  };

  const removeBet = (index: number) => {
    if (state.bets.length > 2) {
      setState(prev => ({
        ...prev,
        bets: prev.bets.filter((_, i) => i !== index)
      }));
    }
  };

  const updateBet = (index: number, field: keyof BetInput, value: string) => {
    setState(prev => ({
      ...prev,
      bets: prev.bets.map((bet, i) =>
        i === index ? { ...bet, [field]: value } : bet
      )
    }));
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const investment = parseFloat(state.totalInvestment);
    
    if (isNaN(investment) || investment <= 0) return;

    const { results, totalProfit, profitPercentage } = calculateSurebet(
      investment,
      state.bets
    );

    setState(prev => ({
      ...prev,
      results,
      totalProfit,
      profitPercentage
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <BetForm
        bets={state.bets}
        currency={state.currency}
        totalInvestment={state.totalInvestment}
        onAddBet={addBet}
        onRemoveBet={removeBet}
        onUpdateBet={updateBet}
        onCurrencyChange={(currency) => setState(prev => ({ ...prev, currency }))}
        onInvestmentChange={(value) => setState(prev => ({ ...prev, totalInvestment: value }))}
        onSubmit={handleCalculate}
      />

      {state.results && state.totalProfit !== null && state.profitPercentage !== null && (
        <ResultsTable
          results={state.results}
          bets={state.bets}
          currency={state.currency}
          totalProfit={state.totalProfit}
          profitPercentage={state.profitPercentage}
        />
      )}
    </div>
  );
}