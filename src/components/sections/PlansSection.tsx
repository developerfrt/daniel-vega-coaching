import { plans } from '../../data/plans'
import { PlanCard } from '../cards/PlanCard'
import { BenefitsSection } from './BenefitsSection'
import { Reveal } from '../common/Reveal'
import { SectionTitle } from '../common/SectionTitle'

export const PlansSection = () => (
  <section id="planes" className="plans section-shell section-shell--texture">
    <div className="container">
      <Reveal>
        <SectionTitle
          eyebrow="Invierte en tu mejor versión"
          title="Elige tu"
          accent="plan"
          subtitle="Más opciones. Mismo objetivo: resultados reales y sostenibles."
        />
      </Reveal>
      <div className="plans__grid">
        {plans.map((plan, index) => (
          <Reveal key={plan.id} delay={index * 100}>
            <PlanCard plan={plan} />
          </Reveal>
        ))}
      </div>
      <div className="plans__benefits">
        <p className="plans__benefits-label">Tu proceso también incluye</p>
        <BenefitsSection />
      </div>
    </div>
  </section>
)
