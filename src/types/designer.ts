export type NailLength =
  | 'short'
  | 'medium'
  | 'long'
  | 'extra-long'

export type NailShape =
  | 'almond'
  | 'square'
  | 'coffin'
  | 'oval'
  | 'stiletto'

export type DesignPath =
  | 'reference'
  | 'guided'

export type NailStyle =
  | 'minimal'
  | 'kawaii'
  | 'grunge'
  | 'y2k'
  | 'gothic'
  | 'coquette'
  | 'fairy'
  | 'romantic'
  | 'maximalist'
  | 'abstract'

export type NailEffect =
  | 'cat-eye'
  | 'chrome'
  | 'jelly'
  | 'glitter'
  | 'pearlescent'
  | 'aura'
  | 'matte'
  | '3d-relief'
  | 'charms'
  | 'rhinestones'
  | '3d-flowers'
  | 'hand-painted'

export type NailTheme =
  | 'halloween'
  | 'christmas'
  | 'valentines'
  | 'summer'
  | 'spring'
  | 'autumn'
  | 'winter'
  | 'ocean'
  | 'flowers'
  | 'forest'
  | 'butterflies'
  | 'stars'
  | 'moon'
  | 'tarot'
  | 'mermaid'
  | 'fairy'
  | 'anime'
  | 'gaming'
  | 'music'
  | 'zodiac'
  | 'vintage'
  | 'baroque'

export type ColorMode =
  | 'individual'
  | 'palette'
  | 'guided'

export type ColorPalette =
  | 'pastel'
  | 'dark'
  | 'earthy'
  | 'neutral'
  | 'warm'
  | 'cool'
  | 'pink'
  | 'blue'
  | 'green'
  | 'purple'
  | 'red'
  | 'sunset'
  | 'ocean'
  | 'autumn'
  | 'candy'
  | 'metallic'

export interface NailDesign {
  length?: NailLength
  shape?: NailShape
  designPath?: DesignPath

  styles: NailStyle[]
  effects: NailEffect[]
  themes: NailTheme[]
  colorMode?: ColorMode
  colors: string[]
  colorPalettes: ColorPalette[]
  avoid: string[]

  complexity?: number
  comments?: string
  avoidNotes?: string

  referenceImages: File[]
}