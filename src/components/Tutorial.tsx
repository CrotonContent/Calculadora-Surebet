import React from 'react';
import { BookOpen, Calculator, DollarSign, Target } from 'lucide-react';

export function Tutorial() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Como Usar a Calculadora</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Insira os Valores</h3>
            <p className="text-gray-600">
              Digite o valor total que deseja investir e as odds encontradas em diferentes casas de apostas.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Verifique os Resultados</h3>
            <p className="text-gray-600">
              A calculadora mostrará quanto apostar em cada casa e o lucro garantido.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Faça as Apostas</h3>
            <p className="text-gray-600">
              Realize as apostas rapidamente para garantir que as odds não mudem.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Lucro Garantido</h3>
            <p className="text-gray-600">
              Independente do resultado, você terá o lucro calculado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}