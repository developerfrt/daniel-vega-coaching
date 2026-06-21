import { Check, Crown, Leaf, Shield } from 'lucide-react'
import type { CoachingPlan } from '../../data/plans'
import { formatPrice } from '../../utils/formatters'
import { buildPlanMessage, buildWhatsAppUrl } from '../../utils/whatsapp'

interface PlanCardProps {
  plan: CoachingPlan
}

const planIcons = {
  essential: Leaf,
  alfa: Shield,
  titan: Crown,
}

export const PlanCard = ({ plan }: PlanCardProps) => {
  const Icon = planIcons[plan.id]

  return (
    <article
      className={`plan-card plan-card--${plan.accent}${plan.featured ? ' plan-card--featured' : ''}`}
    >
      {plan.badge && <span className="plan-card__badge">{plan.badge}</span>}
      <header className="plan-card__header">
        <Icon aria-hidden="true" />
        <h3>{plan.name}</h3>
        <p>{plan.subtitle}</p>
      </header>
      <div className="plan-card__price">
        <span>S/</span>
        <strong>{formatPrice(plan.price)}</strong>
        <small>/mes</small>
      </div>
      <div className="plan-card__old-price">
        Antes <s>S/{formatPrice(plan.oldPrice)}</s>
      </div>
      <ul>
        {plan.benefits.map((benefit) => (
          <li key={benefit}>
            <Check aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="plan-card__library">
        <h4>{plan.libraryTitle}</h4>
        <ul>
          {plan.libraryItems.map((item) => (
            <li key={item}>
              <Check aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <a
        className={`button ${plan.featured ? 'button--primary' : 'button--outline'} button--full`}
        href={buildWhatsAppUrl(buildPlanMessage(plan))}
        onClick={(event) => {
          event.currentTarget.href = buildWhatsAppUrl(buildPlanMessage(plan))
        }}
        target="_blank"
        rel="noreferrer"
      >
        Elegir plan
      </a>
    </article>
  )
}
