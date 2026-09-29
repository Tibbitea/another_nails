import type { NailLength, NailShape, NailStyle, NailEffect, NailTheme, ColorPalette, } from '../types/designer'

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

interface NailThemeOption {
  id: NailTheme
  name: string
  category: string
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
export const nailThemes: NailThemeOption[] = [
  {
    id: 'halloween',
    name: 'Halloween',
    category: 'Temporadas',
  },
  {
    id: 'christmas',
    name: 'Navidad',
    category: 'Temporadas',
  },
  {
    id: 'valentines',
    name: 'San Valentín',
    category: 'Temporadas',
  },
  {
    id: 'summer',
    name: 'Verano',
    category: 'Temporadas',
  },
  {
    id: 'spring',
    name: 'Primavera',
    category: 'Temporadas',
  },
  {
    id: 'autumn',
    name: 'Otoño',
    category: 'Temporadas',
  },
  {
    id: 'winter',
    name: 'Invierno',
    category: 'Temporadas',
  },

  {
    id: 'ocean',
    name: 'Mar',
    category: 'Naturaleza',
  },
  {
    id: 'flowers',
    name: 'Flores',
    category: 'Naturaleza',
  },
  {
    id: 'forest',
    name: 'Bosque',
    category: 'Naturaleza',
  },
  {
    id: 'butterflies',
    name: 'Mariposas',
    category: 'Naturaleza',
  },
  {
    id: 'stars',
    name: 'Estrellas',
    category: 'Naturaleza',
  },
  {
    id: 'moon',
    name: 'Luna',
    category: 'Naturaleza',
  },

  {
    id: 'tarot',
    name: 'Tarot',
    category: 'Fantasía',
  },
  {
    id: 'mermaid',
    name: 'Sirenas',
    category: 'Fantasía',
  },
  {
    id: 'fairy',
    name: 'Hadas',
    category: 'Fantasía',
  },
  {
    id: 'zodiac',
    name: 'Zodiaco',
    category: 'Fantasía',
  },

  {
    id: 'anime',
    name: 'Anime',
    category: 'Cultura pop',
  },
  {
    id: 'gaming',
    name: 'Videojuegos',
    category: 'Cultura pop',
  },
  {
    id: 'music',
    name: 'Música',
    category: 'Cultura pop',
  },

  {
    id: 'vintage',
    name: 'Vintage',
    category: 'Arte',
  },
  {
    id: 'baroque',
    name: 'Barroco',
    category: 'Arte',
  },
]

interface NailColorOption {
  name: string
  value: string
}

interface ColorPaletteOption {
  id: ColorPalette
  name: string
  colors: string[]
}

export const nailColors: NailColorOption[] = [
  {
    name: 'Negro',
    value: '#111111',
  },
  {
    name: 'Blanco',
    value: '#ffffff',
  },
  {
    name: 'Rojo',
    value: '#c92a2a',
  },
  {
    name: 'Rosa',
    value: '#f4a6c1',
  },
  {
    name: 'Rosa pastel',
    value: '#f8c8dc',
  },
  {
    name: 'Morado',
    value: '#8e44ad',
  },
  {
    name: 'Lavanda',
    value: '#c8b6e2',
  },
  {
    name: 'Azul',
    value: '#3b82f6',
  },
  {
    name: 'Azul claro',
    value: '#a7d8f0',
  },
  {
    name: 'Verde',
    value: '#4f8a5b',
  },
  {
    name: 'Verde pastel',
    value: '#b7d7b0',
  },
  {
    name: 'Amarillo',
    value: '#f4d35e',
  },
  {
    name: 'Naranja',
    value: '#f28c45',
  },
  {
    name: 'Beige',
    value: '#ddc7a1',
  },
  {
    name: 'Marrón',
    value: '#795548',
  },
  {
    name: 'Gris',
    value: '#9ca3af',
  },
  {
    name: 'Plateado',
    value: '#c0c0c0',
  },
  {
    name: 'Dorado',
    value: '#d4af37',
  },
]

export const nailColorPalettes: ColorPaletteOption[] = [
  {
    id: 'pastel',
    name: 'Pasteles',
    colors: ['#F8C8DC', '#CDB4DB', '#BDE0FE', '#B7E4C7'],
  },
  {
    id: 'dark',
    name: 'Oscuros',
    colors: ['#111111', '#2B193D', '#4A0E0E', '#263238'],
  },
  {
    id: 'earthy',
    name: 'Tierra',
    colors: ['#7F5539', '#B08968', '#DDB892', '#A68A64'],
  },
  {
    id: 'neutral',
    name: 'Neutros',
    colors: ['#F5F1EB', '#DDD3C5', '#A89F91', '#514D48'],
  },
  {
    id: 'warm',
    name: 'Cálidos',
    colors: ['#E63946', '#F77F00', '#FCBF49', '#D62828'],
  },
  {
    id: 'cool',
    name: 'Fríos',
    colors: ['#4361EE', '#4CC9F0', '#7209B7', '#3A0CA3'],
  },
  {
    id: 'pink',
    name: 'Gama rosa',
    colors: ['#FFD6E0', '#FFAFCC', '#FF70A6', '#C9184A'],
  },
  {
    id: 'blue',
    name: 'Gama azul',
    colors: ['#CAF0F8', '#48CAE4', '#0077B6', '#023E8A'],
  },
  {
    id: 'green',
    name: 'Gama verde',
    colors: ['#D8F3DC', '#74C69D', '#40916C', '#1B4332'],
  },
  {
    id: 'purple',
    name: 'Gama morada',
    colors: ['#E0AAFF', '#C77DFF', '#9D4EDD', '#5A189A'],
  },
  {
    id: 'red',
    name: 'Gama roja',
    colors: ['#FFCCD5', '#E63946', '#C1121F', '#780000'],
  },
  {
    id: 'sunset',
    name: 'Atardecer',
    colors: ['#FFB703', '#FB8500', '#EF476F', '#8338EC'],
  },
  {
    id: 'ocean',
    name: 'Océano',
    colors: ['#ADE8F4', '#00B4D8', '#0077B6', '#03045E'],
  },
  {
    id: 'autumn',
    name: 'Otoño',
    colors: ['#BC6C25', '#DDA15E', '#606C38', '#7F4F24'],
  },
  {
    id: 'candy',
    name: 'Candy',
    colors: ['#FFAFCC', '#BDE0FE', '#CDB4DB', '#FFFFB7'],
  },
  {
    id: 'metallic',
    name: 'Metálicos',
    colors: ['#D4AF37', '#C0C0C0', '#B87333', '#8A8D8F'],
  },
]