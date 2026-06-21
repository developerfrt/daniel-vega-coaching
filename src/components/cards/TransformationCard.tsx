import { ArrowRight } from 'lucide-react'
import type { Transformation } from '../../data/transformations'

interface TransformationCardProps {
  transformation: Transformation
}

export const TransformationCard = ({
  transformation,
}: TransformationCardProps) => (
  <article className="transformation-feature">
    <header className="transformation-feature__copy">
      <span>Caso real</span>
      <h3>{transformation.name}</h3>
      <p>{transformation.description}</p>
    </header>
    <div className="transformation-card__images">
      <figure>
        <span>Antes</span>
        <img
          src={transformation.beforeImage}
          alt={`Marcus antes de comenzar su proceso de asesoría`}
          style={{ objectPosition: transformation.beforePosition }}
          loading="lazy"
        />
      </figure>
      <div className="transformation-card__arrow">
        <ArrowRight aria-hidden="true" />
      </div>
      <figure>
        <span>Después</span>
        <img
          src={transformation.afterImage}
          alt={`Marcus después de avanzar en su proceso de asesoría`}
          style={{ objectPosition: transformation.afterPosition }}
          loading="lazy"
        />
      </figure>
    </div>
  </article>
)
