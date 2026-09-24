import OptionCard from '../OptionCard'
import { nailLengths } from '../../data/nailOptions'
import type { NailLength } from '../../types/designer'

interface LengthStepProps {
  value?: NailLength
  onChange: (length: NailLength) => void
}

export default function LengthStep({
  value,
  onChange,
}: LengthStepProps) {
  return (
    <section className="designer-step">
      <header className="step-header">
        <span className="step-number">PASO 1</span>

        <h1>¿Qué largo quieres?</h1>

        <p>
          Elige el largo de tus press-on. Podrás cambiarlo
          más adelante si cambias de idea.
        </p>
      </header>

      <div className="options-grid">
        {nailLengths.map((length) => (
          <OptionCard
            key={length.id}
            title={length.name}
            description={length.description}
            selected={value === length.id}
            onClick={() => onChange(length.id)}
          />
        ))}
      </div>
    </section>
  )
}