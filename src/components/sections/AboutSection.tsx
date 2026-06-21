import { Eye, Quote, Star, Target } from 'lucide-react'
import beforeImage from '../../assets/images/about/daniel-real-before.jpeg'
import afterImage from '../../assets/images/about/daniel-real-after.jpeg'
import { Reveal } from '../common/Reveal'
import { SectionTitle } from '../common/SectionTitle'

const principles = [
  {
    icon: Target,
    title: 'Mi misión',
    text: 'Ayudar a hombres a transformar su físico, mente y hábitos para que vivan con más confianza, disciplina y propósito.',
  },
  {
    icon: Eye,
    title: 'Mi visión',
    text: 'Ser referente en Latinoamérica en transformación física y mental para hombres.',
  },
  {
    icon: Star,
    title: 'Mis valores',
    text: 'Disciplina, honestidad, compromiso, mejora continua y enfoque en resultados.',
  },
]

export const AboutSection = () => (
  <section id="sobre-mi" className="about section-shell section-shell--texture">
    <div className="container">
      <Reveal>
        <SectionTitle
          title="Sobre"
          accent="mí"
          subtitle="Mi historia. Mi propósito. Mi compromiso contigo."
        />
      </Reveal>

      <div className="about__grid">
        <Reveal className="about__photos">
          <figure>
            <span>Antes</span>
            <img
              src={beforeImage}
              alt="Daniel Vega al inicio de su proceso físico"
              loading="lazy"
            />
          </figure>
          <div className="about__arrow" aria-hidden="true">↓</div>
          <figure>
            <span>Después</span>
            <img
              src={afterImage}
              alt="Daniel Vega después de su transformación física"
              loading="lazy"
            />
          </figure>
        </Reveal>

        <Reveal className="about__story" delay={120}>
          <h3>
            Así llegué
            <br />
            <span>a ser quién soy</span>
          </h3>
          <div className="about__paragraphs">
            <p>
              No siempre fui la mejor versión de mí. Hubo un tiempo en el que me
              sentía sin energía, sin confianza y sin dirección. Mi físico no
              reflejaba lo que realmente quería ser, y mi mentalidad tampoco.
            </p>
            <p>
              Fue cuando decidí tomar el control de mi vida. Me sumergí en el
              entrenamiento, la nutrición y el desarrollo personal. No fue fácil,
              pero fue <strong>la mejor decisión</strong> que pude tomar.
            </p>
            <p>
              Hoy he transformado mi cuerpo, mi mente y mi vida. Mi misión es
              guiarte para que tú también descubras tu mejor versión y alcances
              resultados reales y sostenibles.
            </p>
          </div>
          <div className="about__principles">
            {principles.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="about__quote">
        <Quote aria-hidden="true" />
        <blockquote>
          Si yo pude cambiar, tú también puedes.
          <span>Estoy aquí para mostrarte el camino y caminarlo contigo.</span>
        </blockquote>
        <cite>Daniel Vega</cite>
      </Reveal>
    </div>
  </section>
)
