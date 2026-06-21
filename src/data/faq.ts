export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: '¿La asesoría es personalizada?',
    answer:
      'Sí, cada plan se adapta al objetivo, nivel de experiencia y estilo de vida del cliente.',
  },
  {
    question: '¿Incluye plan de alimentación?',
    answer:
      'Sí, se entrega una guía nutricional adaptada a los objetivos del alumno.',
  },
  {
    question: '¿Cuánto tiempo tardaré en ver resultados?',
    answer:
      'Los resultados dependen del compromiso del alumno, aunque normalmente se observan cambios entre las 4 y 8 semanas.',
  },
  {
    question: '¿Qué sucede después del pago?',
    answer:
      'El cliente recibe un formulario de evaluación para diseñar su plan personalizado y comenzar de inmediato.',
  },
  {
    question: '¿Tendré contacto directo contigo?',
    answer:
      'Sí, según el plan contratado contará con seguimiento y soporte.',
  },
]
