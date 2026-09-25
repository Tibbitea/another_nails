import OptionCard from '../OptionCard'
import { nailStyles } from '../../data/nailOptions'
import type { NailStyle } from '../../types/designer'

interface StyleStepProps {
  values: NailStyle[]
  onToggle: (style: NailStyle) => void
}

export default function StyleStep({
  values,
  onToggle,
}: StyleStepProps) {
  return (
    <section className="designer-step">
      <header className="step-header">
        <span className="step-number">PASO 4</span>

        <h1>¿Qué estilo te representa?</h1>

        <p>
          Puedes elegir más de uno. Combina estilos si no
          quieres limitarte a una sola estética.
        </p>
      </header>

      <div className="options-grid">
        {nailStyles.map((style) => (
          <OptionCard
            key={style.id}
            title={style.name}
            description={style.description}
            selected={values.includes(style.id)}
            onClick={() => onToggle(style.id)}
          />
        ))}
      </div>
    </section>
  )
}