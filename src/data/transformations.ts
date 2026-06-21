import beforeImage from '../assets/images/transformations/marcus-before.jpeg'
import afterImage from '../assets/images/transformations/marcus-after.jpeg'

export interface Transformation {
  id: string
  name: string
  description: string
  beforeImage: string
  afterImage: string
  beforePosition: string
  afterPosition: string
}

export const marcusTransformation: Transformation = {
  id: 'marcus',
  name: 'Marcus',
  description:
    'Un proceso real construido con planificación, seguimiento y constancia.',
  beforeImage,
  afterImage,
  beforePosition: '50% 35%',
  afterPosition: '50% 42%',
}
