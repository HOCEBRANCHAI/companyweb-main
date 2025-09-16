import React, { useEffect, useState } from 'react';
import { MapPinIcon, BuildingIcon, ArrowRightIcon, GlobeIcon, BriefcaseIcon, CheckCircleIcon, ArrowUpIcon } from 'lucide-react';
export function Map() {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress(prev => prev >= 100 ? 0 : prev + 1);
    }, 50);
    const stageInterval = setInterval(() => {
      setActiveStage(prev => prev >= 2 ? 0 : prev + 1);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearInterval(stageInterval);
    };
  }, []);
  const stages = [{
    name: 'Virtual Office',
    status: 'Ready',
    timeline: '48h',
    icon: <GlobeIcon className="h-8 w-8" />,
    color: 'indigo'
  }, {
    name: 'Branch Office',
    status: 'Available',
    timeline: '2-3 weeks',
    icon: <BuildingIcon className="h-8 w-8" />,
    color: 'purple'
  }, {
    name: 'Local LTD (BV)',
    status: 'Available',
    timeline: '3-4 weeks',
    icon: <BriefcaseIcon className="h-8 w-8" />,
    color: 'blue'
  }];
  return;
}