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

export interface NailDesign {
  length?: NailLength
  shape?: NailShape
  designPath?: DesignPath

  styles: string[]
  effects: string[]
  themes: string[]
  colors: string[]
  avoid: string[]

  complexity?: number
  comments?: string

  referenceImages: File[]
}