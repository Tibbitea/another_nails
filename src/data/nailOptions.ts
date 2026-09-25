import type { NailLength, NailShape, NailStyle, NailEffect } from '../types/designer'

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

interface NailEffectOption {
  id: NailEffect
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

export const nailEffects: NailEffectOption[] = [
  {
    id: 'cat-eye',
    name: 'Cat Eye',
    description: 'Efecto magnético con profundidad y brillo',
  },
  {
    id: 'chrome',
    name: 'Chrome',
    description: 'Acabado metálico y efecto espejo',
  },
  {
    id: 'jelly',
    name: 'Jelly',
    description: 'Color translúcido con aspecto brillante',
  },
  {
    id: 'glitter',
    name: 'Glitter',
    description: 'Brillo y partículas reflectantes',
  },
  {
    id: 'pearlescent',
    name: 'Perlado',
    description: 'Reflejos suaves con acabado nacarado',
  },
  {
    id: 'aura',
    name: 'Aura',
    description: 'Degradado difuminado desde el centro',
  },
  {
    id: 'matte',
    name: 'Mate',
    description: 'Acabado sin brillo y efecto aterciopelado',
  },
  {
    id: '3d-relief',
    name: 'Relieve 3D',
    description: 'Texturas y elementos elevados sobre la uña',
  },
  {
    id: 'charms',
    name: 'Charms',
    description: 'Adornos decorativos aplicados sobre las uñas',
  },
  {
    id: 'rhinestones',
    name: 'Piedras',
    description: 'Cristales y pequeños elementos brillantes',
  },
  {
    id: '3d-flowers',
    name: 'Flores 3D',
    description: 'Flores modeladas con volumen',
  },
  {
    id: 'hand-painted',
    name: 'Dibujos a mano',
    description: 'Ilustraciones y detalles pintados a mano',
  },
]