import React, { useState } from 'react';
import { LocalPresenceCTA } from './LocalPresenceCTA';
import { UpgradeOptions } from '../company/UpgradeOptions';
export function LocalPresenceFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = () => {
    setCurrentStep(2);
  };
  const handleBackStep = () => {
    setCurrentStep(1);
  };
  return <div className="space-y-6">
      {currentStep === 1 ? <LocalPresenceCTA onContinue={handleNextStep} /> : <UpgradeOptions showTitle={true} title="Choose Your Local Presence Option" onBack={handleBackStep} includeVirtualOffice={true} />}
    </div>;
}