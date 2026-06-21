import {
  Award,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Users,
} from 'lucide-react'
import heroWideImage from '../../assets/images/hero/daniel-pool-wide.jpeg'
import heroCloseImage from '../../assets/images/hero/daniel-pool-close.jpeg'
import { buildGeneralMessage, buildWhatsAppUrl } from '../../utils/whatsapp'

const stats = [
  { icon: Users, value: '+50', label: 'Alumnos asesorados' },
  { icon: ShieldCheck, value: '100%', label: 'Confidencial' },
  { icon: Award, value: 'Resultados', label: 'Comprobados' },
]

export const HeroSection = () => (
  <section id="inicio" className="hero">
    <picture className="hero__picture">
      <source media="(max-width: 620px)" srcSet={heroCloseImage} />
      <img
        className="hero__background"
        src={heroWideImage}
        alt="Daniel Vega mostrando su progreso físico en una piscina"
        loading="eager"
      />
    </picture>
    <div className="hero__overlay" />
    <div className="container hero__inner">
      <div className="hero__content">
        <span className="hero__eyebrow">
          <CheckCircle2 size={14} />
          Coaching personalizado
        </span>
        <h1>
          Transforma
          <br />
          tu físico.
          <br />
          Transforma
          <br />
          <span>tu vida.</span>
        </h1>
        <p>
          Entrenamiento, nutrición y mentalidad para hombres que buscan un físico
          estético, disciplina y confianza.
        </p>
        <a
          className="button button--primary hero__cta"
          href={buildWhatsAppUrl(buildGeneralMessage())}
          onClick={(event) => {
            event.currentTarget.href = buildWhatsAppUrl(buildGeneralMessage())
          }}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={22} />
          Quiero mi evaluación gratuita
        </a>
        <div className="hero__stats">
          {stats.map(({ icon: Icon, value, label }) => (
            <div className="hero-stat" key={label}>
              <Icon aria-hidden="true" />
              <span>
                <strong>{value}</strong>
                <small>{label}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
      <blockquote className="hero__quote">
        <span>“</span>
        <p>
          Tu físico actual es el resultado de tus hábitos actuales. Tu físico
          futuro dependerá de las decisiones que tomes hoy.
        </p>
        <cite>Daniel Vega</cite>
      </blockquote>
    </div>
  </section>
)
