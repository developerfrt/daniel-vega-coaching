import { BarChart3, LockKeyhole, MessageCircle, Target } from 'lucide-react'
import { Reveal } from '../common/Reveal'

const benefits = [
  {
    icon: Target,
    title: 'Planes personalizados',
    text: 'Según tus objetivos y tu nivel actual.',
  },
  {
    icon: BarChart3,
    title: 'Seguimiento constante',
    text: 'Ajustes periódicos para maximizar resultados.',
  },
  {
    icon: MessageCircle,
    title: 'Atención directa por WhatsApp',
    text: 'Resuelve tus dudas cuando lo necesites.',
  },
  {
    icon: LockKeyhole,
    title: 'Privacidad total',
    text: 'Tu información y proceso 100% confidencial.',
  },
]

export const BenefitsSection = () => (
  <Reveal className="benefits benefits--embedded">
    <div className="benefits__grid">
      {benefits.map(({ icon: Icon, title, text }) => (
        <article className="benefit" key={title}>
          <Icon aria-hidden="true" />
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  </Reveal>
)
