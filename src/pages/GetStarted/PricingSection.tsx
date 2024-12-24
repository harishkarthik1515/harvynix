import React from 'react';
import PricingCard from './PricingCard';
import { PricingPlan } from './types';

interface PricingSectionProps {
  plans: PricingPlan[];
}

export default function PricingSection({ plans }: PricingSectionProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <PricingCard key={plan.id} {...plan} />
      ))}
    </div>
  );
}