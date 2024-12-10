import React from 'react';
import { formatCurrency } from '../../utils/formatters';
import { CalculationResult, Currency, BetInput } from '../../types/calculator';

interface ResultsTableProps {
  results: CalculationResult[];
  bets: BetInput[];
  currency: Currency;
  totalProfit: number;
  profitPercentage: number;
}

export function ResultsTable({
  results,
  bets,
  currency,
  totalProfit,
  profitPercentage
}: ResultsTableProps) {
  return (
    <div className="mt-8 bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Resultados:</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2">Casa de Apostas</th>
              <th className="pb-2">Valor Aposta</th>
              <th className="pb-2">Probabilidade</th>
              <th className="pb-2">Retorno Bruto</th>
              <th className="pb-2">Comissão</th>
              <th className="pb-2">Retorno Líquido</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{bets[index].bookmaker}</td>
                <td className="py-2">{formatCurrency(result.stake, currency)}</td>
                <td className="py-2">{result.probability.toFixed(2)}%</td>
                <td className="py-2">{formatCurrency(result.expectedReturn, currency)}</td>
                <td className="py-2">{formatCurrency(result.commission, currency)}</td>
                <td className="py-2">{formatCurrency(result.netReturn, currency)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-md shadow">
          <p className="text-sm text-gray-600">Lucro Total:</p>
          <p className={`text-lg font-bold ${totalProfit > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(totalProfit, currency)}
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <p className="text-sm text-gray-600">ROI:</p>
          <p className={`text-lg font-bold ${profitPercentage > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {profitPercentage.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
}