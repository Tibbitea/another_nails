import { avoidOptions } from '../../data/nailOptions'

interface AvoidStepProps {
  values: string[]
  notes?: string

  onToggle: (value: string) => void
  onNotesChange: (notes: string) => void
}

export default function AvoidStep({
  values,
  notes = '',
  onToggle,
  onNotesChange,
}: AvoidStepProps) {
  return (
    <section className="designer-step">

      <header className="step-header">
        <span className="step-number">
          PASO 8
        </span>

        <h1>¿Qué NO quieres?</h1>

        <p>
          Marca cualquier elemento que prefieras evitar.
          Este paso es opcional.
        </p>
      </header>

      <div className="avoid-grid">
        {avoidOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`avoid-option ${
              values.includes(option.id)
                ? 'selected'
                : ''
            }`}
            onClick={() =>
              onToggle(option.id)
            }
          >
            {option.name}
          </button>
        ))}
      </div>

      <div className="avoid-notes">
        <h2>¿Algo más?</h2>

        <p>
          Puedes explicarnos cualquier cosa que no quieras
          encontrar en tu diseño.
        </p>

        <textarea
          value={notes}
          onChange={(event) =>
            onNotesChange(event.target.value)
          }
          placeholder="Por ejemplo: no quiero dibujos de personas, prefiero evitar el dorado..."
          rows={5}
        />
      </div>

    </section>
  )
}