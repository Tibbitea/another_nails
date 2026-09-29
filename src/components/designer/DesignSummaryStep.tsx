import type { NailDesign } from '../../types/designer'
import {
  nailLengths,
  nailShapes,
  nailStyles,
  nailEffects,
  nailThemes,
  nailColorPalettes,
} from '../../data/nailOptions'

interface DesignSummaryStepProps {
  design: NailDesign
}

export default function DesignSummaryStep({
  design,
}: DesignSummaryStepProps) {
  const lengthName =
    nailLengths.find(
      (length) => length.id === design.length
    )?.name ?? ''

  const shapeName =
    nailShapes.find(
      (shape) => shape.id === design.shape
    )?.name ?? ''

  const styleNames = nailStyles
    .filter((style) =>
      design.styles.includes(style.id)
    )
    .map((style) => style.name)

  const effectNames = nailEffects
    .filter((effect) =>
      design.effects.includes(effect.id)
    )
    .map((effect) => effect.name)

  const themeNames = nailThemes
    .filter((theme) =>
      design.themes.includes(theme.id)
    )
    .map((theme) => theme.name)

  const paletteNames = nailColorPalettes
    .filter((palette) =>
      design.colorPalettes.includes(palette.id)
    )
    .map((palette) => palette.name)

  return (
    <section className="designer-step">
      <header className="step-header">
        <span className="step-number">
          PASO 10
        </span>

        <h1>Así será tu diseño</h1>

        <p>
          Revisa tus elecciones antes de crear las
          propuestas.
        </p>
      </header>

      <div className="design-summary">

        <SummaryItem
          title="Largo"
          value={lengthName}
        />

        <SummaryItem
          title="Forma"
          value={shapeName}
        />

        <SummaryItem
          title="Estilos"
          value={styleNames.join(', ')}
        />

        <SummaryItem
          title="Efectos"
          value={effectNames.join(', ')}
        />

        <SummaryItem
          title="Temáticas"
          value={themeNames.join(', ')}
        />

        <div className="summary-item">
          <span className="summary-label">
            Colores
          </span>

          {design.colorMode === 'individual' && (
            <div className="summary-colors">
              {design.colors.map((color) => (
                <span
                  key={color}
                  className="summary-color"
                  style={{
                    backgroundColor: color,
                  }}
                  title={color}
                />
              ))}
            </div>
          )}

          {design.colorMode === 'palette' && (
            <p>
              {paletteNames.join(', ')}
            </p>
          )}

          {design.colorMode === 'guided' && (
            <p>Me dejo guiar ✨</p>
          )}
        </div>

        <SummaryItem
          title="Nivel de detalle"
          value={getComplexityName(
            design.complexity
          )}
        />

        <div className="summary-item">
          <span className="summary-label">
            Quiero evitar
          </span>

          {design.avoid.length > 0 ? (
            <p>{design.avoid.join(', ')}</p>
          ) : (
            <p>Ninguna preferencia específica</p>
          )}

          {design.avoidNotes && (
            <p className="summary-note">
              “{design.avoidNotes}”
            </p>
          )}
        </div>

      </div>
    </section>
  )
}

interface SummaryItemProps {
  title: string
  value: string
}

function SummaryItem({
  title,
  value,
}: SummaryItemProps) {
  return (
    <div className="summary-item">
      <span className="summary-label">
        {title}
      </span>

      <p>{value}</p>
    </div>
  )
}

function getComplexityName(
  complexity?: number
) {
  switch (complexity) {
    case 1:
      return 'Muy sencillo'
    case 2:
      return 'Sutil'
    case 3:
      return 'Equilibrado'
    case 4:
      return 'Llamativo'
    case 5:
      return 'Maximalista'
    default:
      return ''
  }
}