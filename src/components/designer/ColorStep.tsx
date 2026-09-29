import { useState } from 'react'

import {
  nailColors,
  nailColorPalettes,
} from '../../data/nailOptions'

import type {
  ColorMode,
  ColorPalette,
} from '../../types/designer'

interface ColorStepProps {
  mode?: ColorMode
  colors: string[]
  palettes: ColorPalette[]

  onModeChange: (mode: ColorMode) => void
  onToggleColor: (color: string) => void
  onAddCustom: (color: string) => void
  onTogglePalette: (palette: ColorPalette) => void
}

export default function ColorStep({
  mode,
  colors,
  palettes,
  onModeChange,
  onToggleColor,
  onAddCustom,
  onTogglePalette,
}: ColorStepProps) {
  const [customColor, setCustomColor] =
    useState('#ff69b4')

  return (
    <section className="designer-step">
      <header className="step-header">
        <span className="step-number">
          PASO 7
        </span>

        <h1>¿Qué colores quieres?</h1>

        <p>
          Puedes elegir tonos concretos, combinar una o
          varias gamas de colores o dejar que te
          sorprendamos.
        </p>
      </header>

      <div className="color-mode-grid">

        <button
          type="button"
          className={`color-mode-card ${
            mode === 'individual' ? 'selected' : ''
          }`}
          onClick={() =>
            onModeChange('individual')
          }
        >
          <strong>🎨 Elegir colores</strong>

          <span>
            Elige exactamente los tonos que quieres.
          </span>
        </button>

        <button
          type="button"
          className={`color-mode-card ${
            mode === 'palette' ? 'selected' : ''
          }`}
          onClick={() =>
            onModeChange('palette')
          }
        >
          <strong>🌈 Elegir gamas</strong>

          <span>
            Puedes combinar una o varias familias
            de colores.
          </span>
        </button>

        <button
          type="button"
          className={`color-mode-card ${
            mode === 'guided' ? 'selected' : ''
          }`}
          onClick={() =>
            onModeChange('guided')
          }
        >
          <strong>✨ Me dejo guiar</strong>

          <span>
            Elegiremos los colores según el resto
            de tus preferencias.
          </span>
        </button>

      </div>

      {mode === 'individual' && (
        <>
          <div className="color-grid">
            {nailColors.map((color) => (
              <button
                key={color.value}
                type="button"
                className={`color-option ${
                  colors.includes(color.value)
                    ? 'selected'
                    : ''
                }`}
                onClick={() =>
                  onToggleColor(color.value)
                }
              >
                <span
                  className="color-circle"
                  style={{
                    backgroundColor: color.value,
                  }}
                />

                <span>
                  {color.name}
                </span>
              </button>
            ))}
          </div>

          <div className="custom-color">
            <h2>¿Quieres otro tono?</h2>

            <p>
              Puedes seleccionar cualquier color.
            </p>

            <div className="custom-color-controls">

              <input
                type="color"
                value={customColor}
                onChange={(event) =>
                  setCustomColor(
                    event.target.value
                  )
                }
              />

              <span>
                {customColor}
              </span>

              <button
                type="button"
                className="primary-button"
                onClick={() =>
                  onAddCustom(customColor)
                }
              >
                Añadir color
              </button>

            </div>
          </div>

          {colors.length > 0 && (
            <div className="selected-colors">
              <h2>Tu selección</h2>

              <div className="selected-color-list">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="selected-color"
                    onClick={() =>
                      onToggleColor(color)
                    }
                    title="Quitar color"
                  >
                    <span
                      style={{
                        backgroundColor: color,
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {mode === 'palette' && (
        <div className="palette-grid">

          {nailColorPalettes.map((palette) => (
            <button
              key={palette.id}
              type="button"
              className={`palette-card ${
                palettes.includes(palette.id)
                  ? 'selected'
                  : ''
              }`}
              onClick={() =>
                onTogglePalette(palette.id)
              }
            >
              <div className="palette-preview">

                {palette.colors.map((color) => (
                  <span
                    key={color}
                    style={{
                      backgroundColor: color,
                    }}
                  />
                ))}

              </div>

              <strong>
                {palette.name}
              </strong>

            </button>
          ))}

        </div>
      )}

      {mode === 'guided' && (
        <div className="guided-color-message">

          <div className="guided-icon">
            ✨
          </div>

          <h2>
            Perfecto, déjate sorprender
          </h2>

          <p>
            Elegiremos una combinación de colores
            que encaje con los estilos, efectos y
            temáticas que has seleccionado.
          </p>

        </div>
      )}

    </section>
  )
}