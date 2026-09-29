import { nailThemes } from '../../data/nailOptions'
import type { NailTheme } from '../../types/designer'

interface ThemeStepProps {
  values: NailTheme[]
  onToggle: (theme: NailTheme) => void
}

export default function ThemeStep({
  values,
  onToggle,
}: ThemeStepProps) {
  const categories = [
    ...new Set(nailThemes.map((theme) => theme.category)),
  ]

  return (
    <section className="designer-step">
      <header className="step-header">
        <span className="step-number">PASO 6</span>

        <h1>¿Qué temática te inspira?</h1>

        <p>
          Puedes mezclar varias ideas. Por ejemplo:
          mar + flores + fantasía.
        </p>
      </header>

      {categories.map((category) => (
        <div
          key={category}
          className="theme-category"
        >
          <h2>{category}</h2>

          <div className="theme-options">
            {nailThemes
              .filter(
                (theme) =>
                  theme.category === category
              )
              .map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  className={`theme-chip ${
                    values.includes(theme.id)
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() =>
                    onToggle(theme.id)
                  }
                >
                  {theme.name}
                </button>
              ))}
          </div>
        </div>
      ))}
    </section>
  )
}