import type { CoachingPlan } from '../data/plans'
import { siteConfig } from '../data/siteConfig'
import { formatPrice } from './formatters'

const PRIZE_KEY = 'dv-wheel-prize'

export const getSavedPrize = () => {
  if (typeof window === 'undefined') return null
  return sessionStorage.getItem(PRIZE_KEY)
}

export const savePrize = (prize: string) => {
  sessionStorage.setItem(PRIZE_KEY, prize)
}

export const buildWhatsAppUrl = (message: string): string =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`

export const buildPlanMessage = (plan: CoachingPlan): string => {
  const prize = getSavedPrize()
  const mainBenefits = plan.benefits.slice(0, 3).join(', ')
  const prizeText = prize ? ` Además, gané ${prize} en la ruleta.` : ''

  return `Hola Daniel, quiero iniciar mi transformación. Estoy interesado en el plan ${plan.name} de S/${formatPrice(plan.price)} al mes. Incluye ${mainBenefits}.${prizeText} Deseo recibir mi evaluación gratuita.`
}

export const buildWheelPrizeMessage = (prize: string): string =>
  `Hola Daniel, acabo de girar la ruleta y gané ${prize}. Quiero más información sobre tus planes de coaching.`

export const buildGeneralMessage = (): string => {
  const prize = getSavedPrize()
  return `Hola Daniel, quiero empezar mi transformación y recibir una evaluación gratuita.${prize ? ` También gané ${prize} en la ruleta.` : ''}`
}
