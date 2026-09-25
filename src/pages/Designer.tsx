import { useState } from 'react'
import LengthStep from '../components/designer/LengthStep'
import ShapeStep from '../components/designer/ShapeStep'
import DesignPathStep from '../components/designer/DesignPathStep'
import StyleStep from '../components/designer/StyleStep'

import type {
  NailDesign,
  NailLength,
  NailShape,
  DesignPath,
  NailStyle,
} from '../types/designer'

const initialDesign: NailDesign = {
  styles: [],
  effects: [],
  themes: [],
  colors: [],
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

  const canContinue =
    (step === 1 && Boolean(design.length)) ||
    (step === 2 && Boolean(design.shape)) ||
    (step === 3 && Boolean(design.designPath)) ||
    (step === 4 && design.styles.length > 0)

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
        {step === 5 && (
        <section className="designer-step">
            <header className="step-header">
            <span className="step-number">PASO 5</span>

            <h1>¿Qué efectos te gustan?</h1>

            <p>
                Aquí elegiremos acabados, texturas y elementos
                especiales para tus uñas.
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

          {step < 5 && (
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