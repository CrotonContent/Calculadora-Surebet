import React from 'react';
import { Plus, Calculator as CalcIcon, Trash2 } from 'lucide-react';
import { BetInput, Currency } from '../../types/calculator';
import { Tooltip } from '../common/Tooltip';

interface BetFormProps {
  bets: BetInput[];
  currency: Currency;
  totalInvestment: string;
  onAddBet: () => void;
  onRemoveBet: (index: number) => void;
  onUpdateBet: (index: number, field: keyof BetInput, value: string) => void;
  onCurrencyChange: (currency: Currency) => void;
  onInvestmentChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function BetForm({
  bets,
  currency,
  totalInvestment,
  onAddBet,
  onRemoveBet,
  onUpdateBet,
  onCurrencyChange,
  onInvestmentChange,
  onSubmit
}: BetFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Investimento Total
          </label>
          <div className="flex">
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as Currency)}
              className="rounded-l-md border border-r-0 border-gray-300 px-3 py-2"
            >
              <option value="BRL">R$</option>
              <option value="USD">$</option>
              <option value="EUR">€</option>
            </select>
            <input
              type="number"
              min="0"
              step="0.01"
              value={totalInvestment}
              onChange={(e) => onInvestmentChange(e.target.value)}
              className="flex-1 rounded-r-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700 mb-2">
          <div className="col-span-3">Casa de Apostas</div>
          <div className="col-span-3 flex items-center">
            Odds
            <Tooltip text="A odd representa o multiplicador do seu investimento caso você ganhe a aposta. Por exemplo, uma odd de 2.00 significa que você receberá 2 vezes o valor apostado." />
          </div>
          <div className="col-span-3 flex items-center">
            Comissão (%)
            <Tooltip text="A comissão é a taxa cobrada pela casa de apostas sobre o valor ganho. Por exemplo, uma comissão de 5% significa que você receberá 95% do valor ganho." />
          </div>
          <div className="col-span-3">Ações</div>
        </div>

        {bets.map((bet, index) => (
          <div key={index} className="grid grid-cols-12 gap-4">
            <input
              type="text"
              className="col-span-3 rounded-md border border-gray-300 px-3 py-2"
              placeholder="Ex: Bet365"
              value={bet.bookmaker}
              onChange={(e) => onUpdateBet(index, 'bookmaker', e.target.value)}
              required
            />
            <input
              type="number"
              min="1"
              step="0.01"
              className="col-span-3 rounded-md border border-gray-300 px-3 py-2"
              value={bet.odds}
              onChange={(e) => onUpdateBet(index, 'odds', e.target.value)}
              required
            />
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              className="col-span-3 rounded-md border border-gray-300 px-3 py-2"
              value={bet.commission}
              onChange={(e) => onUpdateBet(index, 'commission', e.target.value)}
              required
            />
            <div className="col-span-3 flex items-center gap-2">
              {bets.length > 2 && (
                <button
                  type="button"
                  onClick={() => onRemoveBet(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        ))}

        {bets.length < 5 && (
          <button
            type="button"
            onClick={onAddBet}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Plus className="w-4 h-4" />
            Adicionar Casa de Apostas
          </button>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        <CalcIcon className="w-5 h-5" />
        Calcular Surebet
      </button>
    </form>
  );
}