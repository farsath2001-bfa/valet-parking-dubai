import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  external = false,
  className = '',
  ...props
}) {
  const classes = `btn btn--${variant} ${className}`

  // ── External link (tel, wa.me, mailto) ──────────────────
  if (external && href) {
    return (
      
      <a href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    )
  }

  // ── Internal router link ─────────────────────────────────
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  // ── Regular anchor (tel:, mailto:) ──────────────────────
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  // ── Default button ───────────────────────────────────────
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}