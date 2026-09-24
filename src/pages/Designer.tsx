import { useState } from 'react'
import LengthStep from '../components/designer/LengthStep'
import ShapeStep from '../components/designer/ShapeStep'
import type {
  NailDesign,
  NailLength,
  NailShape,
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

  const canContinue =
    (step === 1 && Boolean(design.length)) ||
    (step === 2 && Boolean(design.shape))

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
          <section className="designer-step">
            <header className="step-header">
              <span className="step-number">PASO 3</span>

              <h1>¿Cómo quieres crear tu diseño?</h1>

              <p>
                Este será el siguiente paso que vamos a construir.
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

          {step < 3 && (
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