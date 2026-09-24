import type { NailLength } from '../types/designer'

interface NailLengthOption {
  id: NailLength
  name: string
  description: string
}

export const nailLengths: NailLengthOption[] = [
  {
    id: 'short',
    name: 'Cortas',
    description: 'Cómodas, prácticas y naturales',
  },
  {
    id: 'medium',
    name: 'Medias',
    description: 'Un equilibrio entre comodidad y diseño',
  },
  {
    id: 'long',
    name: 'Largas',
    description: 'Más espacio para diseños detallados',
  },
  {
    id: 'extra-long',
    name: 'Extra largas',
    description: 'Para diseños que no quieren pasar desapercibidos',
  },
]