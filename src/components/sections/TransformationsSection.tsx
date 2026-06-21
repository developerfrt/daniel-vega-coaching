import { marcusTransformation } from '../../data/transformations'
import { TransformationCard } from '../cards/TransformationCard'
import { Reveal } from '../common/Reveal'
import { SectionTitle } from '../common/SectionTitle'

export const TransformationsSection = () => (
  <section className="transformations section-shell">
    <div className="container">
      <Reveal>
        <SectionTitle
          eyebrow="Progreso destacado"
          title="Transformación"
          accent="real"
          subtitle="El antes y después de Marcus, resultado de un proceso guiado y constante."
        />
      </Reveal>
      <Reveal className="transformations__featured">
        <TransformationCard transformation={marcusTransformation} />
      </Reveal>
      <p className="transformations__note">
        Cada resultado depende del punto de partida, el compromiso y la
        adherencia individual.
      </p>
    </div>
  </section>
)
