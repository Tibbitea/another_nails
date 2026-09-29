import { useState } from 'react'
import LengthStep from '../components/designer/LengthStep'
import ShapeStep from '../components/designer/ShapeStep'
import DesignPathStep from '../components/designer/DesignPathStep'
import StyleStep from '../components/designer/StyleStep'
import EffectStep from '../components/designer/EffectStep'
import ThemeStep from '../components/designer/ThemeStep'
import ColorStep from '../components/designer/ColorStep'
import AvoidStep from '../components/designer/AvoidStep'
import ComplexityStep from '../components/designer/ComplexityStep'

import type {
  NailDesign,
  NailLength,
  NailShape,
  DesignPath,
  NailStyle,
  NailEffect,
  NailTheme,
  ColorMode,
  ColorPalette,
} from '../types/designer'


const initialDesign: NailDesign = {
  styles: [],
  effects: [],
  themes: [],
  colors: [],
  colorPalettes: [],
  avoid: [],
  referenceImages: [],
  
}

export default function Designer() {
  const [step, setStep] = useState(1)

  const [design, setDesign] =
    useState<NailDesign>(initialDesign)

  const selectLength = (length: NailLength) => {
    setDesign((previousDesign) => ({
      ...previousDesign,
      length,
    }))
  }

  const selectShape = (shape: NailShape) => {
    setDesign((previousDesign) => ({
      ...previousDesign,
      shape,
    }))
  }
  const selectDesignPath = (designPath: DesignPath) => {
    setDesign((previousDesign) => ({
        ...previousDesign,
        designPath,
    }))
  }
  const toggleStyle = (style: NailStyle) => {
    setDesign((previousDesign) => {
        const alreadySelected =
        previousDesign.styles.includes(style)

        return {
        ...previousDesign,

        styles: alreadySelected
            ? previousDesign.styles.filter(
                (selectedStyle) => selectedStyle !== style
            )
            : [...previousDesign.styles, style],
        }
    })
  }
  const toggleEffect = (effect: NailEffect) => {
    setDesign((previousDesign) => {
        const alreadySelected =
        previousDesign.effects.includes(effect)

        return {
        ...previousDesign,

        effects: alreadySelected
            ? previousDesign.effects.filter(
                (selectedEffect) => selectedEffect !== effect
            )
            : [...previousDesign.effects, effect],
        }
    })
  }

  const toggleTheme = (theme: NailTheme) => {
    setDesign((previousDesign) => {
        const alreadySelected =
        previousDesign.themes.includes(theme)

        return {
        ...previousDesign,

        themes: alreadySelected
            ? previousDesign.themes.filter(
                (selectedTheme) =>
                selectedTheme !== theme
            )
            : [...previousDesign.themes, theme],
        }
    })
  }
  const selectColorMode = (colorMode: ColorMode) => {
    setDesign((previousDesign) => ({
      ...previousDesign,
      colorMode,
      colors: [],
      colorPalettes: [],
    }))
  }
  const toggleColor = (color: string) => {
    setDesign((previousDesign) => {
      const alreadySelected =
        previousDesign.colors.includes(color)

      return {
        ...previousDesign,

        colors: alreadySelected
          ? previousDesign.colors.filter(
              (selectedColor) =>
                selectedColor !== color
            )
          : [...previousDesign.colors, color],
      }
    })
  }
  const addCustomColor = (color: string) => {
    setDesign((previousDesign) => {
      if (previousDesign.colors.includes(color)) {
        return previousDesign
      }

      return {
        ...previousDesign,
        colors: [
          ...previousDesign.colors,
          color,
        ],
      }
    })
  }
  const toggleColorPalette = (
    palette: ColorPalette) => {
    setDesign((previousDesign) => {
      const alreadySelected =
        previousDesign.colorPalettes.includes(
          palette
        )

      return {
        ...previousDesign,

        colorPalettes: alreadySelected
          ? previousDesign.colorPalettes.filter(
              (selectedPalette) =>
                selectedPalette !== palette
            )
          : [
              ...previousDesign.colorPalettes,
              palette,
            ],
      }
    })
  }
  const toggleAvoid = (value: string) => {
    setDesign((previousDesign) => {
      const alreadySelected =
        previousDesign.avoid.includes(value)

      return {
        ...previousDesign,

        avoid: alreadySelected
          ? previousDesign.avoid.filter(
              (selectedValue) =>
                selectedValue !== value
            )
          : [
              ...previousDesign.avoid,
              value,
            ],
      }
    })
  }
  const changeAvoidNotes = (avoidNotes: string) => {
    setDesign((previousDesign) => ({
      ...previousDesign,
      avoidNotes,
    }))
  }
  const colorSelectionComplete =
    (design.colorMode === 'individual' &&
      design.colors.length > 0) ||

    (design.colorMode === 'palette' &&
      design.colorPalettes.length > 0) ||

    design.colorMode === 'guided'
  
  const selectComplexity = (complexity: number) => {
    setDesign((previousDesign) => ({
      ...previousDesign,
      complexity,
    }))
  }

  const canContinue =
    (step === 1 && Boolean(design.length)) ||
    (step === 2 && Boolean(design.shape)) ||
    (step === 3 && Boolean(design.designPath)) ||
    (step === 4 && design.styles.length > 0) ||
    (step === 5 && design.effects.length > 0) ||
    (step === 6 && design.themes.length > 0) ||
    (step === 7 && colorSelectionComplete) ||
    step == 8 || 
    (step === 9 && Boolean(design.complexity))

  return (
    <main className="designer-page">
      <div className="designer-container">

        <div className="progress">
          Paso {step}
        </div>

        {step === 1 && (
          <LengthStep
            value={design.length}
            onChange={selectLength}
          />
        )}

        {step === 2 && (
          <ShapeStep
            value={design.shape}
            onChange={selectShape}
          />
        )}

        {step === 3 && (
          <DesignPathStep
            value={design.designPath}
            onChange={selectDesignPath}
          />
        )}

        {step === 4 && design.designPath === 'guided' && (
            <StyleStep
                values={design.styles}
                onToggle={toggleStyle}
            />
        )}
        {step === 5 && design.designPath === 'guided' && (
            <EffectStep
                values={design.effects}
                onToggle={toggleEffect}
            />
        )}

        {step === 6 && design.designPath === 'guided' && (
            <ThemeStep
                values={design.themes}
                onToggle={toggleTheme}
            />
        )}

        {step === 7 && design.designPath === 'guided' && (
          <ColorStep
            mode={design.colorMode}
            colors={design.colors}
            palettes={design.colorPalettes}
            onModeChange={selectColorMode}
            onToggleColor={toggleColor}
            onAddCustom={addCustomColor}
            onTogglePalette={toggleColorPalette}
          />
        )}
        {step === 8 && design.designPath === 'guided' && (
          <AvoidStep
            values={design.avoid}
            notes={design.avoidNotes}
            onToggle={toggleAvoid}
            onNotesChange={changeAvoidNotes}
          />
        )}
        {step === 9 && design.designPath === 'guided' && (
          <ComplexityStep
            value={design.complexity}
            onChange={selectComplexity}
          />
        )}
        {step === 10 && design.designPath === 'guided' && (
          <section className="designer-step">
            <header className="step-header">

              <span className="step-number">
                PASO 10
              </span>

              <h1>Tu diseño está preparado</h1>

              <p>
                En el siguiente paso revisaremos todas tus elecciones
                antes de generar las propuestas con IA.
              </p>

            </header>
          </section>
        )}

        <div className="designer-navigation">

          {step > 1 && (
            <button
              type="button"
              className="secondary-button"
              onClick={() =>
                setStep((currentStep) => currentStep - 1)
              }
            >
              ← Atrás
            </button>
          )}

          {step < 10 && (
            <button
              type="button"
              className="primary-button"
              disabled={!canContinue}
              onClick={() =>
                setStep((currentStep) => currentStep + 1)
              }
            >
              Continuar →
            </button>
          )}
          

        </div>
      </div>
    </main>
  )
}