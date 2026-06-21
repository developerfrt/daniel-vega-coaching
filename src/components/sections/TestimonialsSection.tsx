import { testimonials } from '../../data/testimonials'
import { TestimonialCard } from '../cards/TestimonialCard'
import { Reveal } from '../common/Reveal'
import { SectionTitle } from '../common/SectionTitle'

export const TestimonialsSection = () => (
  <section id="testimonios" className="testimonials section-shell">
    <div className="container">
      <Reveal>
        <SectionTitle title="Lo que dicen" accent="mis alumnos" />
      </Reveal>
      <div className="testimonials__grid">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 100}>
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)
