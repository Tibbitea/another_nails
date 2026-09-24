import OptionCard from '../OptionCard'
import { nailShapes } from '../../data/nailOptions'
import type { NailShape } from '../../types/designer'

interface ShapeStepProps {
  value?: NailShape
  onChange: (shape: NailShape) => void
}

export default function ShapeStep({
  value,
  onChange,
}: ShapeStepProps) {
  return (
    <section className="designer-step">
      <header className="step-header">
        <span className="step-number">PASO 2</span>

        <h1>¿Qué forma prefieres?</h1>

        <p>
          Elige la forma que quieres para tus press-on.
          Más adelante añadiremos imágenes para que puedas
          comparar cada una visualmente.
        </p>
      </header>

      <div className="options-grid">
        {nailShapes.map((shape) => (
          <OptionCard
            key={shape.id}
            title={shape.name}
            description={shape.description}
            selected={value === shape.id}
            onClick={() => onChange(shape.id)}
          />
        ))}
      </div>
    </section>
  )
}