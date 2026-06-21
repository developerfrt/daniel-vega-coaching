export interface CoachingPlan {
  id: 'essential' | 'alfa' | 'titan'
  name: string
  subtitle: string
  price: number
  oldPrice: number
  benefits: string[]
  libraryTitle: string
  libraryItems: string[]
  featured?: boolean
  badge?: string
  accent: 'green' | 'gold' | 'orange'
}

export const plans: CoachingPlan[] = [
  {
    id: 'essential',
    name: 'ESSENTIAL',
    subtitle: 'Tu punto de partida',
    price: 14.99,
    oldPrice: 24.99,
    benefits: [
      'Rutina personalizada',
      'Guía nutricional personalizada',
      'Actualización mensual',
    ],
    libraryTitle: 'Contenido básico',
    libraryItems: ['Videos educativos', 'Guías en PDF', 'Recursos base'],
    accent: 'green',
  },
  {
    id: 'alfa',
    name: 'ALFA',
    subtitle: 'Para resultados reales',
    price: 24.99,
    oldPrice: 39.99,
    benefits: [
      'Todo lo de Essential',
      'Seguimiento semanal',
      'Soporte por WhatsApp',
      'Llamada estratégica semanal de 1 hora',
    ],
    libraryTitle: 'Contenido premium',
    libraryItems: [
      'Masterclass exclusivas',
      'Seminarios',
      'Guías y PDFs avanzados',
    ],
    featured: true,
    badge: 'Más elegido',
    accent: 'gold',
  },
  {
    id: 'titan',
    name: 'TITÁN',
    subtitle: 'Máximo nivel',
    price: 49.99,
    oldPrice: 59.99,
    benefits: [
      'Todo lo de Alfa',
      'Atención prioritaria',
      'Monitoreo diario de alimentación',
      'Videollamada semanal de 1 hora',
      'Diagnóstico semanal',
    ],
    libraryTitle: 'Contenido élite + bonos',
    libraryItems: [
      'Contenido avanzado',
      'Evolución personal',
      'Bonos exclusivos',
    ],
    accent: 'orange',
  },
]
