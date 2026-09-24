import type { NailLength, NailShape } from '../types/designer'

interface NailLengthOption {
  id: NailLength
  name: string
  description: string
}

interface NailShapeOption {
  id: NailShape
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

export const nailShapes: NailShapeOption[] = [
  {
    id: 'almond',
    name: 'Almond',
    description: 'Suave, estilizada y ligeramente puntiaguda',
  },
  {
    id: 'square',
    name: 'Square',
    description: 'Recta y definida',
  },
  {
    id: 'coffin',
    name: 'Coffin',
    description: 'Estrecha en los laterales y recta en la punta',
  },
  {
    id: 'oval',
    name: 'Oval',
    description: 'Redondeada y natural',
  },
  {
    id: 'stiletto',
    name: 'Stiletto',
    description: 'Larga, marcada y puntiaguda',
  },
]