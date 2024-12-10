import React from 'react';
import { Calculator } from './components/Calculator';
import { Tutorial } from './components/Tutorial';
import { FAQ } from './components/FAQ';
import { Calculator as CalculatorIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-2">
            <CalculatorIcon className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Calculadora Surebet
            </h1>
          </div>
          <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
            Calcule apostas seguras online e maximize seus lucros com nossa calculadora de arbitragem esportiva
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-12">
          <section id="calculator" className="bg-white rounded-xl shadow-lg p-6">
            <Calculator />
          </section>

          <section id="tutorial">
            <Tutorial />
          </section>

          <section id="faq">
            <FAQ />
          </section>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Calculadora Surebet - Ferramenta gratuita para cálculo de arbitragem esportiva
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;