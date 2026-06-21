import { BookOpen, Dumbbell, Gift, Sparkles, Wrench } from 'lucide-react'
import { Reveal } from '../common/Reveal'

const gifts = [
  { icon: BookOpen, label: 'Guías y PDFs exclusivos' },
  { icon: Dumbbell, label: 'Plantillas de entrenamiento' },
  { icon: Wrench, label: 'Recursos y herramientas' },
  { icon: Sparkles, label: 'Y mucho más...' },
]

export const GiftsSection = () => {
  const openWheel = () => window.dispatchEvent(new Event('dv-open-wheel'))

  return (
    <section id="regalos" className="gifts section-shell">
      <div className="container">
        <Reveal className="gifts__card">
          <div className="gifts__icon">
            <Gift aria-hidden="true" />
          </div>
          <div className="gifts__copy">
            <span>Acceso exclusivo</span>
            <h2>Regalos gratis</h2>
            <p>
              Recursos prácticos para acelerar tu proceso desde el primer día.
            </p>
          </div>
          <ul>
            {gifts.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <button className="button button--primary" type="button" onClick={openWheel}>
            Ver todos los regalos
          </button>
        </Reveal>
      </div>
    </section>
  )
}
