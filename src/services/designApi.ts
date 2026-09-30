import type { NailDesign } from '../types/designer'

interface GenerateDesignResponse {
  message: string
  prompts: string[]
}

export async function generateDesigns(
  design: NailDesign
): Promise<GenerateDesignResponse> {
  const requestBody = {
    length: design.length,
    shape: design.shape,

    styles: design.styles,
    effects: design.effects,
    themes: design.themes,

    colorMode: design.colorMode,
    colors: design.colors,
    colorPalettes: design.colorPalettes,

    avoid: design.avoid,
    avoidNotes: design.avoidNotes,

    complexity: design.complexity,
  }

  const response = await fetch(
    'http://localhost:8080/api/designs/generate',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(requestBody),
    }
  )

  if (!response.ok) {
    throw new Error(
      `Error generating designs: ${response.status}`
    )
  }

  return response.json()
}