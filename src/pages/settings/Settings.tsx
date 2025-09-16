import React from 'react';
import { Billing } from './Billing';
import { SettingsNav } from '../../components/settings/SettingsNav';
export function Settings() {
  return <main className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 flex-shrink-0">
            <SettingsNav />
          </div>
          <div className="flex-1">
            <Billing />
          </div>
        </div>
      </div>
    </main>;
}