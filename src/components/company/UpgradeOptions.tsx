import React, { useState } from 'react';
import { ArrowUpIcon, BuildingIcon, CheckIcon, ClockIcon, ChevronDownIcon, ChevronUpIcon, ArrowLeftIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { FormationTimelineModal } from './FormationTimelineModal';
import { DutchBVRegistration } from '../workflows/DutchBVRegistration';
type EntityType = 'Branch Office' | 'Dutch BV';
interface UpgradeOption {
  type: string;
  timeline: string;
  features: string[];
  price: string;
  prerequisite?: {
    name: string;
    included: boolean;
  };
  additionalInfo?: string;
  icon?: React.ReactNode;
}
interface UpgradeOptionsProps {
  className?: string;
  showTitle?: boolean;
  title?: string;
  initialExpanded?: boolean;
  onBack?: () => void;
  includeVirtualOffice?: boolean;
}
export function UpgradeOptions({
  className = '',
  showTitle = true,
  title = 'Upgrade Options Available',
  initialExpanded = true,
  onBack,
  includeVirtualOffice = false
}: UpgradeOptionsProps) {
  const [showTimeline, setShowTimeline] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState<EntityType | null>(null);
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const handleShowTimeline = (type: EntityType) => {
    setSelectedEntity(type);
    setShowTimeline(true);
  };
  const handleUpgradeClick = (type: string) => {
    if (type === 'Dutch BV (Private Limited)') {
      setShowRegistration(true);
    }
  };
  let upgradeOptions: UpgradeOption[] = [{
    type: 'Branch Office',
    timeline: '6-10 business days',
    features: ['Legal presence in the Netherlands', 'Use parent company name', 'Operate under parent company', 'Chamber of Commerce registration', 'Local business address'],
    price: '€2,499',
    icon: <BuildingIcon className="h-8 w-8 text-blue-600" />
  }, {
    type: 'Dutch BV (Private Limited)',
    timeline: '6-8 business days',
    features: ['Independent legal entity', 'Limited liability protection', 'Full operational freedom', 'Access to local banking', 'Enhanced credibility'],
    price: '€3,999',
    icon: <BuildingIcon className="h-8 w-8 text-purple-600" />
  }, {
    type: 'Local Employee Payroll',
    timeline: '10-14 business days',
    features: ['Employer registration (via eBranch)', 'Monthly salary processing', 'Payslip generation', 'Tax & social security handling', 'Labor law compliance'],
    price: '€25/month',
    prerequisite: {
      name: 'eBranch Package',
      included: true
    },
    additionalInfo: 'Price per employee. Requires active eBranch package.',
    icon: <BuildingIcon className="h-8 w-8 text-green-600" />
  }];
  if (includeVirtualOffice) {
    upgradeOptions = [{
      type: 'Virtual Office',
      timeline: '1-3 business days',
      features: ['Professional business address', 'Mail handling & forwarding', 'Local phone number', 'Call answering service', 'Use address on business cards & website'],
      price: '€99/month',
      icon: <MailIcon className="h-8 w-8 text-blue-600" />
    }, ...upgradeOptions];
  }
  return;
}