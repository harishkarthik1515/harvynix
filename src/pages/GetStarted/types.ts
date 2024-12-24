export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}