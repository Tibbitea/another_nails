import { useState } from 'react'
import LengthStep from '../components/designer/LengthStep'
import type { NailDesign, NailLength } from '../types/designer'

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

        <div className="designer-navigation">

          {step > 1 && (
            <button
              type="button"
              className="secondary-button"
              onClick={() => setStep(step - 1)}
            >
              ← Atrás
            </button>
          )}

          <button
            type="button"
            className="primary-button"
            disabled={!design.length}
            onClick={() => setStep(step + 1)}
          >
            Continuar →
          </button>

        </div>
      </div>
    </main>
  )
}