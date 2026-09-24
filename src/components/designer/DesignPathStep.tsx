import OptionCard from '../OptionCard'
import type { DesignPath } from '../../types/designer'

interface DesignPathStepProps {
  value?: DesignPath
  onChange: (path: DesignPath) => void
}

export default function DesignPathStep({
  value,
  onChange,
}: DesignPathStepProps) {
  return (
    <section className="designer-step">
      <header className="step-header">
        <span className="step-number">PASO 3</span>

        <h1>¿Cómo quieres crear tu diseño?</h1>

        <p>
          Puedes enseñarnos una idea que ya tengas o dejar que
          te ayudemos a descubrir qué estilo encaja contigo.
        </p>
      </header>

      <div className="options-grid">
        <OptionCard
          title="Tengo referencias"
          description="Sube imágenes de diseños, colores o ideas que te gusten."
          selected={value === 'reference'}
          onClick={() => onChange('reference')}
        />

        <OptionCard
          title="Ayúdame a crear mi diseño"
          description="Te guiaremos paso a paso para descubrir qué tipo de uñas quieres."
          selected={value === 'guided'}
          onClick={() => onChange('guided')}
        />
      </div>
    </section>
  )
}