import React from 'react';
import { CorporateTaxAnalysis } from '../../components/tax/CorporateTaxAnalysis';
export function CorporateTax() {
  return <main className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Corporate Income Tax
        </h1>
        <CorporateTaxAnalysis />
      </div>
    </main>;
}