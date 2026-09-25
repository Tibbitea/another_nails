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

export interface NailDesign {
  length?: NailLength
  shape?: NailShape
  designPath?: DesignPath

  styles: NailStyle[]
  effects: NailEffect[]
  themes: string[]
  colors: string[]
  avoid: string[]

  complexity?: number
  comments?: string

  referenceImages: File[]
}