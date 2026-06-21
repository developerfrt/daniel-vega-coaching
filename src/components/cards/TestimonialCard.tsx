import type { Testimonial } from '../../data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <article className="testimonial-card">
    <div className="testimonial-card__top">
      <div className="testimonial-card__avatar">{testimonial.initials}</div>
      <div>
        <strong>{testimonial.name}</strong>
        <small>{testimonial.role}</small>
      </div>
      <div
        className="testimonial-card__stars"
        aria-label={`${testimonial.rating} de 5 estrellas`}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const fill = Math.min(Math.max(testimonial.rating - index, 0), 1)
          return (
            <span
              className="testimonial-star"
              style={{ '--star-fill': `${fill * 100}%` } as React.CSSProperties}
              aria-hidden="true"
              key={index}
            >
              ☆
            </span>
          )
        })}
      </div>
    </div>
    <blockquote>“{testimonial.quote}”</blockquote>
  </article>
)
