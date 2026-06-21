export interface Testimonial {
  name: string
  role: string
  quote: string
  initials: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Gabriel G.',
    role: 'Asesoría personalizada',
    initials: 'GG',
    rating: 4,
    quote:
      'Antes entrenaba sin rumbo y cambiaba de rutina cada fin de semana; ahora tengo un plan estructurado y por primera vez estoy viendo progresos reales en fuerza y físico.',
  },
  {
    name: 'Jorge V.',
    role: 'Asesoría personalizada',
    initials: 'JV',
    rating: 5,
    quote:
      'La comunicación es rápida y siempre resuelve mis dudas. Lo que más me gusta es que adapta todo según mi horario de trabajo y no me obliga a seguir algo imposible.',
  },
  {
    name: 'Thiago Q.',
    role: 'Asesoría personalizada',
    initials: 'TQ',
    rating: 4.5,
    quote:
      'Lo que más valoro es el seguimiento: no te deja solo con una rutina, revisa cómo vas y hace cambios cuando son necesarios.',
  },
]
