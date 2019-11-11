import { LogoHead } from '../components/common/LogoHead'
import LandingLayout from '../components/layouts/LandingLayout'
import { PricingPlans } from '../components/sections/pricing/PricingPlans'

export interface PricingPageProps {}

export default function PricingPage(_props: PricingPageProps) {
  return (
    <LandingLayout>
      <section id="pricing">
        <LogoHead />

        <div className="container">
          <h1>Choose your plan</h1>
        </div>

        <PricingPlans />
      </section>
    </LandingLayout>
  )
}