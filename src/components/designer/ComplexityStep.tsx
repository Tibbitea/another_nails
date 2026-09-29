interface ComplexityStepProps {
  value?: number
  onChange: (value: number) => void
}

const complexityOptions = [
  {
    value: 1,
    title: 'Muy sencillo',
    description: 'Diseño limpio, pocos detalles y mucho espacio visual.',
  },
  {
    value: 2,
    title: 'Sutil',
    description: 'Algunos detalles, pero manteniendo un resultado delicado.',
  },
  {
    value: 3,
    title: 'Equilibrado',
    description: 'Una mezcla entre detalles y zonas más simples.',
  },
  {
    value: 4,
    title: 'Llamativo',
    description: 'Más elementos, efectos y protagonismo visual.',
  },
  {
    value: 5,
    title: 'Maximalista',
    description: 'Muchos detalles, texturas y elementos combinados.',
  },
]

export default function ComplexityStep({
  value,
  onChange,
}: ComplexityStepProps) {
  return (
    <section className="designer-step">
      <header className="step-header">
        <span className="step-number">
          PASO 9
        </span>

        <h1>¿Cómo de cargado quieres el diseño?</h1>

        <p>
          Elige cuánto protagonismo quieres que tengan los
          detalles, efectos y elementos decorativos.
        </p>
      </header>

      <div className="complexity-grid">
        {complexityOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`complexity-card ${
              value === option.value
                ? 'selected'
                : ''
            }`}
            onClick={() =>
              onChange(option.value)
            }
          >
            <div className="complexity-number">
              {option.value}
            </div>

            <div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}