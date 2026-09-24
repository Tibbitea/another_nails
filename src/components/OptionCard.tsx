interface OptionCardProps {
  title: string
  description?: string
  image?: string
  selected?: boolean
  onClick: () => void
}

export default function OptionCard({
  title,
  description,
  image,
  selected = false,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      className={`option-card ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="option-card-image"
        />
      )}

      <div className="option-card-content">
        <h3>{title}</h3>

        {description && <p>{description}</p>}
      </div>
    </button>
  )
}