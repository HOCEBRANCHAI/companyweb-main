import React, { useState } from 'react';
import { XIcon, InfoIcon, CalculatorIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';
interface PayrollTaxCalculatorProps {
  onClose: () => void;
}
interface TaxBracket {
  limit: number;
  rate: number;
  description: string;
}
interface TaxCredit {
  id: string;
  name: string;
  maxAmount: number;
  phaseOutStart?: number;
  phaseOutEnd?: number;
}
interface CalculationResult {
  grossSalary: number;
  taxableIncome: number;
  incomeTax: number;
  socialSecurityContributions: {
    aow: number;
    anw: number;
    wlz: number;
    zvw: number;
    total: number;
  };
  appliedTaxCredits: {
    name: string;
    amount: number;
  }[];
  pensionContribution: number;
  specialTariffAmount: number;
  specialTariffTax: number;
  netSalary: number;
  effectiveTaxRate: number;
}
export function PayrollTaxCalculator({
  onClose
}: PayrollTaxCalculatorProps) {
  // Form state
  const [grossSalary, setGrossSalary] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [employmentType, setEmploymentType] = useState<string>('regular');
  const [workingHoursPercentage, setWorkingHoursPercentage] = useState<string>('100');
  const [generalTaxCredit, setGeneralTaxCredit] = useState<boolean>(true);
  const [employmentTaxCredit, setEmploymentTaxCredit] = useState<boolean>(true);
  const [combinationTaxCredit, setCombinationTaxCredit] = useState<boolean>(false);
  const [thirtyPercentRuling, setThirtyPercentRuling] = useState<boolean>(false);
  const [specialTariffAmount, setSpecialTariffAmount] = useState<string>('');
  const [pensionContribution, setPensionContribution] = useState<string>('');
  // Calculation result
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  // 2025 Dutch Tax Brackets (based on monthly amounts)
  const taxBrackets: TaxBracket[] = [{
    limit: 3039,
    rate: 36.97,
    description: '36.97% up to €3,039'
  }, {
    limit: 5860,
    rate: 36.97,
    description: '36.97% from €3,039 to €5,860'
  }, {
    limit: Infinity,
    rate: 49.5,
    description: '49.50% over €5,860'
  }];
  // Tax credits for 2025
  const taxCredits: TaxCredit[] = [{
    id: 'general',
    name: 'General Tax Credit',
    maxAmount: 3070,
    phaseOutStart: 23789,
    phaseOutEnd: 73031
  }, {
    id: 'employment',
    name: 'Employment Tax Credit',
    maxAmount: 5158,
    phaseOutStart: 37626,
    phaseOutEnd: 115295
  }, {
    id: 'combination',
    name: 'Income-dependent Combination Tax Credit',
    maxAmount: 2694 // Annual amount
  }];
  // Social security rates for 2025
  const socialSecurityRates = {
    aow: 17.9,
    anw: 0.1,
    wlz: 9.65,
    zvw: 6.68,
    maxIncomeForSocialSecurity: 5860 * 12,
    zvwMaxIncome: 66956 // ZVW maximum income
  };
  // Special tariff rate for holiday allowance, bonuses, etc.
  const specialTariffRates = {
    basic: 49.5 // Basic special tariff rate
  };
  // Calculate age from date of birth
  const calculateAge = (birthDate: string): number => {
    if (!birthDate) return 0;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || monthDifference === 0 && today.getDate() < birth.getDate()) {
      age--;
    }
    return age;
  };
  // Check if person is AOW age (67 in 2025)
  const isAOWAge = (birthDate: string): boolean => {
    return calculateAge(birthDate) >= 67;
  };
  // Calculate applied tax credit amount based on income
  const calculateTaxCredit = (credit: TaxCredit, income: number, isPartTime: boolean = false): number => {
    // Convert annual amounts to monthly
    const monthlyMaxAmount = credit.maxAmount / 12;
    // Apply part-time percentage for employment tax credit
    let maxAmount = monthlyMaxAmount;
    if (credit.id === 'employment' && isPartTime) {
      const percentage = parseFloat(workingHoursPercentage) / 100;
      maxAmount = monthlyMaxAmount * percentage;
    }
    // If no phase-out defined or income below phase-out start, return max amount
    if (!credit.phaseOutStart || !credit.phaseOutEnd || income * 12 <= credit.phaseOutStart) {
      return maxAmount;
    }
    // Calculate phase-out
    const annualIncome = income * 12;
    if (annualIncome >= credit.phaseOutEnd) {
      return 0;
    }
    const phaseOutRange = credit.phaseOutEnd - credit.phaseOutStart;
    const incomeAboveStart = annualIncome - credit.phaseOutStart;
    const reductionPercentage = incomeAboveStart / phaseOutRange;
    const reduction = monthlyMaxAmount * reductionPercentage;
    return Math.max(0, monthlyMaxAmount - reduction);
  };
  // Calculate income tax based on brackets
  const calculateIncomeTax = (income: number, isAOWAge: boolean = false): number => {
    let remainingIncome = income;
    let totalTax = 0;
    for (let i = 0; i < taxBrackets.length; i++) {
      const bracket = taxBrackets[i];
      const prevLimit = i === 0 ? 0 : taxBrackets[i - 1].limit;
      const bracketSize = bracket.limit - prevLimit;
      if (remainingIncome <= 0) break;
      const taxableInThisBracket = Math.min(remainingIncome, bracketSize);
      let rate = bracket.rate;
      // Adjust rate for AOW recipients (lower in first two brackets)
      if (isAOWAge && i < 2) {
        rate = rate - 17.9; // AOW premium is not applicable for AOW recipients
      }
      totalTax += taxableInThisBracket * (rate / 100);
      remainingIncome -= taxableInThisBracket;
    }
    return totalTax;
  };
  // Calculate social security contributions
  const calculateSocialSecurity = (income: number, isAOWAge: boolean = false): {
    aow: number;
    anw: number;
    wlz: number;
    zvw: number;
    total: number;
  } => {
    // Maximum income for national insurance (AOW, ANW, WLZ)
    const maxIncomeForSocialSecurity = socialSecurityRates.maxIncomeForSocialSecurity / 12;
    const cappedMonthlyIncome = Math.min(income, maxIncomeForSocialSecurity);
    // AOW is not applicable for AOW recipients
    const aow = isAOWAge ? 0 : cappedMonthlyIncome * (socialSecurityRates.aow / 100);
    const anw = cappedMonthlyIncome * (socialSecurityRates.anw / 100);
    const wlz = cappedMonthlyIncome * (socialSecurityRates.wlz / 100);
    // ZVW has its own cap
    const zvwMaxIncome = socialSecurityRates.zvwMaxIncome / 12;
    const cappedZvwIncome = Math.min(income, zvwMaxIncome);
    // For employees, ZVW is paid by employer (not deducted from salary)
    // For self-employed and director-major shareholders, ZVW is paid by individual
    let zvw = 0;
    if (employmentType === 'freelance' || employmentType === 'director') {
      zvw = cappedZvwIncome * (socialSecurityRates.zvw / 100);
    }
    return {
      aow,
      anw,
      wlz,
      zvw,
      total: aow + anw + wlz + zvw
    };
  };
  // Calculate tax on special tariff (holiday allowance, bonuses)
  const calculateSpecialTariffTax = (amount: number): number => {
    if (!amount) return 0;
    return amount * (specialTariffRates.basic / 100);
  };
  const calculateNetSalary = () => {
    // Parse input values
    const parsedGrossSalary = parseFloat(grossSalary.replace(/,/g, '')) || 0;
    const parsedSpecialTariffAmount = parseFloat(specialTariffAmount.replace(/,/g, '')) || 0;
    const parsedPensionContribution = parseFloat(pensionContribution.replace(/,/g, '')) || 0;
    const workingPercentage = parseFloat(workingHoursPercentage) / 100;
    // Determine if person is AOW age
    const aowAgeReached = isAOWAge(dateOfBirth);
    // Calculate taxable income
    let taxableIncome = parsedGrossSalary;
    // Apply 30% ruling if applicable
    if (thirtyPercentRuling) {
      taxableIncome = parsedGrossSalary * 0.7;
    }
    // Deduct pension contribution
    taxableIncome -= parsedPensionContribution;
    // Calculate income tax
    const incomeTax = calculateIncomeTax(taxableIncome, aowAgeReached);
    // Calculate social security contributions
    const socialSecurityContributions = calculateSocialSecurity(taxableIncome, aowAgeReached);
    // Calculate applicable tax credits
    const appliedTaxCredits = [];
    let totalTaxCredits = 0;
    if (generalTaxCredit) {
      const generalCredit = calculateTaxCredit(taxCredits.find(c => c.id === 'general')!, taxableIncome);
      appliedTaxCredits.push({
        name: 'General Tax Credit',
        amount: generalCredit
      });
      totalTaxCredits += generalCredit;
    }
    if (employmentTaxCredit) {
      const employmentCredit = calculateTaxCredit(taxCredits.find(c => c.id === 'employment')!, taxableIncome, workingPercentage < 1);
      appliedTaxCredits.push({
        name: 'Employment Tax Credit',
        amount: employmentCredit
      });
      totalTaxCredits += employmentCredit;
    }
    if (combinationTaxCredit) {
      const combinationCredit = calculateTaxCredit(taxCredits.find(c => c.id === 'combination')!, taxableIncome);
      appliedTaxCredits.push({
        name: 'Combination Tax Credit',
        amount: combinationCredit
      });
      totalTaxCredits += combinationCredit;
    }
    // Calculate tax on special tariff
    const specialTariffTax = calculateSpecialTariffTax(parsedSpecialTariffAmount);
    // Calculate net salary
    const totalDeductions = incomeTax + socialSecurityContributions.total + parsedPensionContribution + specialTariffTax;
    const totalCredits = totalTaxCredits;
    const netSalary = parsedGrossSalary + parsedSpecialTariffAmount - totalDeductions + totalCredits;
    // Calculate effective tax rate
    const effectiveTaxRate = (totalDeductions - totalCredits) / (parsedGrossSalary + parsedSpecialTariffAmount) * 100;
    // Set calculation result
    setResult({
      grossSalary: parsedGrossSalary,
      taxableIncome,
      incomeTax,
      socialSecurityContributions,
      appliedTaxCredits,
      pensionContribution: parsedPensionContribution,
      specialTariffAmount: parsedSpecialTariffAmount,
      specialTariffTax,
      netSalary,
      effectiveTaxRate
    });
    setHasCalculated(true);
  };
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    // Allow only numbers and commas for currency inputs
    if (e.target.type === 'text' && (e.target.id === 'grossSalary' || e.target.id === 'specialTariffAmount' || e.target.id === 'pensionContribution')) {
      const value = e.target.value.replace(/[^\d,]/g, '');
      setter(value);
    } else {
      setter(e.target.value);
    }
    setHasCalculated(false);
  };
  return <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Dutch Payroll Tax Calculator 2025
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-start">
              <InfoIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-700">
                  This calculator provides an estimate of Dutch wage tax and
                  social security contributions based on the 2025 tax tables.
                </p>
                <p className="text-sm text-blue-700 mt-1">
                  The results are for informational purposes only and may vary
                  from official calculations.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column - Basic Information */}
            <div className="space-y-4">
              <h3 className="text-md font-medium text-gray-900">
                Basic Information
              </h3>
              <div>
                <label htmlFor="grossSalary" className="block text-sm font-medium text-gray-700">
                  Gross Monthly Salary <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">€</span>
                  </div>
                  <input type="text" id="grossSalary" value={grossSalary} onChange={e => handleInputChange(e, setGrossSalary)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0,00" required />
                </div>
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <div className="mt-1 relative">
                  <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={e => handleInputChange(e, setDateOfBirth)} className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 border" />
                  <CalendarIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">
                  Employment Type
                </label>
                <select id="employmentType" value={employmentType} onChange={e => setEmploymentType(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                  <option value="regular">Regular Employment</option>
                  <option value="freelance">Freelance/ZZP</option>
                  <option value="director">Director-Major Shareholder</option>
                </select>
              </div>
              <div>
                <label htmlFor="workingHoursPercentage" className="block text-sm font-medium text-gray-700">
                  Working Hours Percentage
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input type="number" id="workingHoursPercentage" value={workingHoursPercentage} onChange={e => setWorkingHoursPercentage(e.target.value)} min="1" max="100" className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right column - Deductions and Additional Information */}
            <div className="space-y-4">
              <h3 className="text-md font-medium text-gray-900">
                Tax Credits & Deductions
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="generalTaxCredit" type="checkbox" checked={generalTaxCredit} onChange={e => setGeneralTaxCredit(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="generalTaxCredit" className="ml-2 block text-sm text-gray-700">
                    General Tax Credit (Algemene heffingskorting)
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="employmentTaxCredit" type="checkbox" checked={employmentTaxCredit} onChange={e => setEmploymentTaxCredit(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="employmentTaxCredit" className="ml-2 block text-sm text-gray-700">
                    Employment Tax Credit (Arbeidskorting)
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="combinationTaxCredit" type="checkbox" checked={combinationTaxCredit} onChange={e => setCombinationTaxCredit(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="combinationTaxCredit" className="ml-2 block text-sm text-gray-700">
                    Income-dependent Combination Tax Credit
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="thirtyPercentRuling" type="checkbox" checked={thirtyPercentRuling} onChange={e => setThirtyPercentRuling(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="thirtyPercentRuling" className="ml-2 block text-sm text-gray-700">
                    30% Ruling Applicable
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="pensionContribution" className="block text-sm font-medium text-gray-700">
                  Pension Contribution
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">€</span>
                  </div>
                  <input type="text" id="pensionContribution" value={pensionContribution} onChange={e => handleInputChange(e, setPensionContribution)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0,00" />
                </div>
              </div>
              <div>
                <label htmlFor="specialTariffAmount" className="block text-sm font-medium text-gray-700">
                  Special Tariff Amount (Holiday Allowance/Bonus)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">€</span>
                  </div>
                  <input type="text" id="specialTariffAmount" value={specialTariffAmount} onChange={e => handleInputChange(e, setSpecialTariffAmount)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0,00" />
                </div>
              </div>
            </div>
          </div>
          <button onClick={calculateNetSalary} disabled={!grossSalary} className={`w-full flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${grossSalary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            <CalculatorIcon className="mr-2 h-4 w-4" />
            Calculate Net Salary
          </button>
          {hasCalculated && result && <div className="mt-6 space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Calculation Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gross Salary:</span>
                      <span className="font-medium">
                        {formatCurrency(result.grossSalary)}
                      </span>
                    </div>
                    {result.specialTariffAmount > 0 && <div className="flex justify-between">
                        <span className="text-gray-600">
                          Special Tariff Amount:
                        </span>
                        <span className="font-medium">
                          {formatCurrency(result.specialTariffAmount)}
                        </span>
                      </div>}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxable Income:</span>
                      <span className="font-medium">
                        {formatCurrency(result.taxableIncome)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Income Tax:</span>
                      <span className="font-medium text-red-600">
                        -{formatCurrency(result.incomeTax)}
                      </span>
                    </div>
                    {result.socialSecurityContributions.total > 0 && <div className="flex justify-between">
                        <span className="text-gray-600">
                          Social Security Contributions:
                        </span>
                        <span className="font-medium text-red-600">
                          -
                          {formatCurrency(result.socialSecurityContributions.total)}
                        </span>
                      </div>}
                    {result.pensionContribution > 0 && <div className="flex justify-between">
                        <span className="text-gray-600">
                          Pension Contribution:
                        </span>
                        <span className="font-medium text-red-600">
                          -{formatCurrency(result.pensionContribution)}
                        </span>
                      </div>}
                    {result.specialTariffTax > 0 && <div className="flex justify-between">
                        <span className="text-gray-600">
                          Special Tariff Tax:
                        </span>
                        <span className="font-medium text-red-600">
                          -{formatCurrency(result.specialTariffTax)}
                        </span>
                      </div>}
                    {result.appliedTaxCredits.length > 0 && <div className="flex justify-between">
                        <span className="text-gray-600">Tax Credits:</span>
                        <span className="font-medium text-green-600">
                          +
                          {formatCurrency(result.appliedTaxCredits.reduce((sum, credit) => sum + credit.amount, 0))}
                        </span>
                      </div>}
                  </div>
                  <div className="space-y-3">
                    <div className="border-t border-gray-200 pt-4 md:border-t-0 md:pt-0">
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-gray-900">
                          Net Monthly Salary:
                        </span>
                        <span className="text-blue-600">
                          {formatCurrency(result.netSalary)}
                        </span>
                      </div>
                      <div className="flex justify-between mt-1 text-sm">
                        <span className="text-gray-600">
                          Effective Tax Rate:
                        </span>
                        <span className="font-medium">
                          {result.effectiveTaxRate.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                    <button onClick={() => setShowDetails(!showDetails)} className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-4 flex items-center">
                      {showDetails ? 'Hide Details' : 'Show Detailed Breakdown'}
                      <ArrowRightIcon className={`ml-1 h-4 w-4 transform ${showDetails ? 'rotate-90' : ''} transition-transform`} />
                    </button>
                  </div>
                </div>
                {showDetails && <div className="mt-6 pt-4 border-t border-gray-200 space-y-4">
                    <h4 className="text-md font-medium text-gray-900">
                      Detailed Breakdown
                    </h4>
                    <div className="space-y-4">
                      {/* Tax Brackets */}
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">
                          Tax Brackets Applied
                        </h5>
                        <div className="bg-white p-3 rounded-md border border-gray-200">
                          <ul className="space-y-1 text-sm">
                            {taxBrackets.map((bracket, index) => {
                        const prevLimit = index === 0 ? 0 : taxBrackets[index - 1].limit;
                        return <li key={index} className="flex justify-between">
                                  <span>{bracket.description}</span>
                                  <span>{bracket.rate}%</span>
                                </li>;
                      })}
                          </ul>
                        </div>
                      </div>
                      {/* Social Security */}
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">
                          Social Security Contributions
                        </h5>
                        <div className="bg-white p-3 rounded-md border border-gray-200">
                          <ul className="space-y-1 text-sm">
                            <li className="flex justify-between">
                              <span>AOW (Old Age Pension):</span>
                              <span>
                                {formatCurrency(result.socialSecurityContributions.aow)}
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span>ANW (Surviving Dependents):</span>
                              <span>
                                {formatCurrency(result.socialSecurityContributions.anw)}
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span>WLZ (Long-term Care):</span>
                              <span>
                                {formatCurrency(result.socialSecurityContributions.wlz)}
                              </span>
                            </li>
                            {result.socialSecurityContributions.zvw > 0 && <li className="flex justify-between">
                                <span>ZVW (Health Insurance):</span>
                                <span>
                                  {formatCurrency(result.socialSecurityContributions.zvw)}
                                </span>
                              </li>}
                            <li className="flex justify-between font-medium pt-1 border-t border-gray-100">
                              <span>Total Social Security:</span>
                              <span>
                                {formatCurrency(result.socialSecurityContributions.total)}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Tax Credits */}
                      {result.appliedTaxCredits.length > 0 && <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">
                            Applied Tax Credits
                          </h5>
                          <div className="bg-white p-3 rounded-md border border-gray-200">
                            <ul className="space-y-1 text-sm">
                              {result.appliedTaxCredits.map((credit, index) => <li key={index} className="flex justify-between">
                                  <span>{credit.name}:</span>
                                  <span>{formatCurrency(credit.amount)}</span>
                                </li>)}
                              <li className="flex justify-between font-medium pt-1 border-t border-gray-100">
                                <span>Total Tax Credits:</span>
                                <span>
                                  {formatCurrency(result.appliedTaxCredits.reduce((sum, credit) => sum + credit.amount, 0))}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>}
                    </div>
                  </div>}
              </div>
              <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                <div className="flex items-start">
                  <InfoIcon className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    This calculation is based on the 2025 Dutch tax tables and
                    is provided for informational purposes only. The actual tax
                    amounts may vary based on personal circumstances and
                    official calculations by the Dutch Tax Authority
                    (Belastingdienst).
                  </p>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>;
}