import Link from 'next/link'

// Presentational shell shared by every legal page. Server component: these
// documents are static text and must be readable with JavaScript disabled.

const wrap = {
  backgroundColor: '#f8f8f8',
  fontFamily: 'var(--font-aileron)',
}

const inner = {
  maxWidth: '820px',
}

export function LegalDoc({ eyebrow, title, intro, lastUpdated, children }) {
  return (
    <main className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24" style={wrap}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20">
        <div style={inner}>
          <p
            className="mb-4 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: 'var(--color-slate-blue-text)' }}
          >
            {eyebrow}
          </p>

          <h1
            className="text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1]"
            style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#6b87a4' }}
          >
            {title}
          </h1>

          {intro && (
            <p
              className="mt-6 text-[1rem] leading-[1.7]"
              style={{ color: 'var(--color-slate-gray-text)', maxWidth: '65ch' }}
            >
              {intro}
            </p>
          )}

          {lastUpdated && (
            <p
              className="mt-6 text-[0.75rem] uppercase tracking-[0.14em]"
              style={{ color: 'var(--color-slate-gray-text)', fontWeight: 600 }}
            >
              Last updated: {lastUpdated}
            </p>
          )}

          <div className="mt-12 legal-body">{children}</div>

          <p className="mt-16 text-[0.85rem]">
            <Link
              href="/"
              style={{ color: 'var(--color-slate-blue-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              ← Back to bsmartish.com
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export function Section({ id, heading, children }) {
  return (
    <section id={id} className="mb-12">
      <h2
        className="text-[1.25rem] md:text-[1.4rem] leading-snug mb-4"
        style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#202831' }}
      >
        {heading}
      </h2>
      <div style={{ color: 'var(--color-slate-gray-text)' }}>{children}</div>
    </section>
  )
}

export function P({ children }) {
  return (
    <p className="mb-4 text-[1rem] leading-[1.7]" style={{ maxWidth: '65ch' }}>
      {children}
    </p>
  )
}

export function UL({ children }) {
  return (
    <ul className="mb-4 pl-5 text-[1rem] leading-[1.7] list-disc" style={{ maxWidth: '65ch' }}>
      {children}
    </ul>
  )
}

export function LI({ children }) {
  return <li className="mb-2">{children}</li>
}

export function A({ href, children, external = false }) {
  const style = {
    color: 'var(--color-slate-blue-text)',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }
  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  )
}

// Renders a definition-style table. Rows whose value is falsy are skipped, so a
// not-yet-filled field in legalEntity.js never renders an empty placeholder.
export function DataTable({ rows }) {
  const present = rows.filter(([, value]) => Boolean(value))
  if (present.length === 0) return null
  return (
    <div className="mb-4 overflow-x-auto">
      <table className="text-[1rem] leading-[1.7]" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {present.map(([label, value]) => (
            <tr key={label} style={{ borderBottom: '1px solid #e4e4e4' }}>
              <th
                scope="row"
                className="pr-8 py-3 text-left align-top whitespace-nowrap"
                style={{ fontWeight: 600, color: '#202831' }}
              >
                {label}
              </th>
              <td className="py-3 align-top">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
