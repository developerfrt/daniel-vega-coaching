import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../../data/faq'
import { Reveal } from '../common/Reveal'
import { SectionTitle } from '../common/SectionTitle'

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq section-shell">
      <div className="container faq__container">
        <Reveal>
          <SectionTitle
            eyebrow="Resuelve tus dudas"
            title="Preguntas"
            accent="frecuentes"
            subtitle="Todo lo que necesitas saber antes de empezar."
          />
        </Reveal>
        <Reveal className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown aria-hidden="true" />
                </button>
                <div className="faq-item__answer">
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
