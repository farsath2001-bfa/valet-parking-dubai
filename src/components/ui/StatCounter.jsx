import { useEffect, useRef, useState } from 'react'

export default function StatCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          let start = 0
          const duration = 2000
          const step = value / (duration / 16)

          const timer = setInterval(() => {
            start += step
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="stat-counter" ref={ref}>
      <div className="stat-counter__value">
        {count.toLocaleString()}
        <span className="stat-counter__suffix">{suffix}</span>
      </div>
      <p className="stat-counter__label">{label}</p>

      <style>{`
        .stat-counter {
          text-align: center;
          padding: 2rem;
        }

        .stat-counter__value {
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--color-white);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-counter__suffix {
          color: var(--color-gold);
          font-size: 2.5rem;
        }

        .stat-counter__label {
          font-size: var(--fs-sm);
          color: var(--color-gray-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}