import OptionCard from '../OptionCard'
import { nailEffects } from '../../data/nailOptions'
import type { NailEffect } from '../../types/designer'

interface EffectStepProps {
  values: NailEffect[]
  onToggle: (effect: NailEffect) => void
}

export default function EffectStep({
  values,
  onToggle,
}: EffectStepProps) {
  return (
    <section className="designer-step">
      <header className="step-header">
        <span className="step-number">PASO 5</span>

        <h1>¿Qué efectos te gustan?</h1>

        <p>
          Puedes elegir todos los que quieras. Después combinaremos
          tus elecciones para crear las propuestas.
        </p>
      </header>

      <div className="options-grid">
        {nailEffects.map((effect) => (
          <OptionCard
            key={effect.id}
            title={effect.name}
            description={effect.description}
            selected={values.includes(effect.id)}
            onClick={() => onToggle(effect.id)}
          />
        ))}
      </div>
    </section>
  )
}