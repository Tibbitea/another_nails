import type { NailLength, NailShape, NailStyle } from '../types/designer'

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

interface NailStyleOption {
  id: NailStyle
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

export const nailStyles: NailStyleOption[] = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Diseños limpios, delicados y sencillos',
  },
  {
    id: 'kawaii',
    name: 'Kawaii',
    description: 'Cute, colorido y lleno de pequeños detalles',
  },
  {
    id: 'grunge',
    name: 'Grunge',
    description: 'Oscuro, alternativo y desenfadado',
  },
  {
    id: 'y2k',
    name: 'Y2K',
    description: 'Inspirado en la estética de los años 2000',
  },
  {
    id: 'gothic',
    name: 'Gothic',
    description: 'Oscuro, elegante y dramático',
  },
  {
    id: 'coquette',
    name: 'Coquette',
    description: 'Lazos, perlas y detalles románticos',
  },
  {
    id: 'fairy',
    name: 'Fairy',
    description: 'Mágico, natural y de fantasía',
  },
  {
    id: 'romantic',
    name: 'Romantic',
    description: 'Flores, tonos suaves y detalles delicados',
  },
  {
    id: 'maximalist',
    name: 'Maximalist',
    description: 'Muchos detalles, texturas y elementos llamativos',
  },
  {
    id: 'abstract',
    name: 'Abstract',
    description: 'Formas, líneas y composiciones artísticas',
  },
]