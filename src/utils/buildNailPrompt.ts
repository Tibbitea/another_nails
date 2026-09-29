import type { NailDesign } from '../types/designer'

import {
  nailLengths,
  nailShapes,
  nailStyles,
  nailEffects,
  nailThemes,
  nailColorPalettes,
} from '../data/nailOptions'

export function buildNailPrompt(
  design: NailDesign
): string {
  const length = nailLengths.find(
    (item) => item.id === design.length
  )?.name

  const shape = nailShapes.find(
    (item) => item.id === design.shape
  )?.name

  const styles = nailStyles
    .filter((item) =>
      design.styles.includes(item.id)
    )
    .map((item) => item.name)

  const effects = nailEffects
    .filter((item) =>
      design.effects.includes(item.id)
    )
    .map((item) => item.name)

  const themes = nailThemes
    .filter((item) =>
      design.themes.includes(item.id)
    )
    .map((item) => item.name)

  const palettes = nailColorPalettes
    .filter((item) =>
      design.colorPalettes.includes(item.id)
    )
    .map((item) => item.name)

  const colors =
    design.colorMode === 'individual'
      ? design.colors.join(', ')
      : design.colorMode === 'palette'
        ? palettes.join(', ')
        : 'choose a harmonious color palette based on the selected aesthetic'

  const complexity = getComplexityDescription(
    design.complexity
  )

  const avoid = [
    ...design.avoid,
    design.avoidNotes,
  ]
    .filter(Boolean)
    .join(', ')

  return `
Create a professional concept for a complete set of 10 custom press-on nails.

NAIL SHAPE AND LENGTH:
- Length: ${length}
- Shape: ${shape}

AESTHETIC:
- Styles: ${styles.join(', ')}
- Themes: ${themes.join(', ')}

EFFECTS AND TECHNIQUES:
- ${effects.join(', ')}

COLOR DIRECTION:
- ${colors}

DESIGN COMPLEXITY:
- ${complexity}

DESIGN REQUIREMENTS:
- Create a cohesive set of 10 press-on nails.
- Each nail may have a different design, but the complete set must feel visually connected.
- Make the designs realistically achievable with professional nail art techniques.
- Clearly show the individual nail designs.
- Preserve the requested nail shape and length.
- Use the selected aesthetic, themes, effects and colors as the main visual direction.

AVOID:
- ${avoid || 'No specific restrictions'}

IMAGE PRESENTATION:
- Full set of 10 press-on nails.
- Clean studio presentation.
- Nails clearly separated and fully visible.
- High detail.
- Realistic nail art materials and textures.
- No hands.
- No fingers.
- No packaging.
`.trim()
}

function getComplexityDescription(
  complexity?: number
): string {
  switch (complexity) {
    case 1:
      return 'Very minimal and simple, with only a few subtle details'

    case 2:
      return 'Subtle and delicate, with restrained decorative elements'

    case 3:
      return 'Balanced, combining simple nails with more detailed accent nails'

    case 4:
      return 'Bold and detailed, with several decorative techniques and statement nails'

    case 5:
      return 'Highly maximalist, elaborate and detailed, with layered decorative elements'

    default:
      return 'Balanced level of detail'
  }
}

export function buildNailPrompts(
  design: NailDesign
): string[] {
  const basePrompt = buildNailPrompt(design)

  return [
    `
${basePrompt}

CREATIVE DIRECTION:
Create a proposal that follows the customer's choices very closely.
Prioritize coherence, wearability and a polished professional finish.
`.trim(),

    `
${basePrompt}

CREATIVE DIRECTION:
Create a more elegant and refined interpretation.
Keep the selected aesthetic, but simplify some elements and focus on visual harmony.
`.trim(),

    `
${basePrompt}

CREATIVE DIRECTION:
Create a more artistic and experimental interpretation.
Use creative placement, asymmetry and unexpected combinations while respecting all requested constraints.
`.trim(),

    `
${basePrompt}

CREATIVE DIRECTION:
Create the boldest interpretation of the requested design.
Make the accent nails more striking and expressive while keeping the full set cohesive.
`.trim(),
  ]
}