export default function ButtonSecondary({
  children,
  icon,
  iconRight,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button-secondary ${className}`}
    >
      {icon && (
        <span className="button-secondary__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      <span className="button-secondary__label">
        {children}
      </span>

      {iconRight && (
        <span className="button-secondary__icon" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  );
}