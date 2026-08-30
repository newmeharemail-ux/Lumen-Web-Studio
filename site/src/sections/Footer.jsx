import { Link } from 'react-router-dom'

export default function Footer({ brand, contact, cta }) {
  const year = new Date().getFullYear()
  const nav = [
    { label: 'Services', href: '#services' },
    { label: 'Proof', href: '#proof' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ]
  return (
    <footer className="border-t border-line">
      <div className="container-site py-16 pb-28 sm:pb-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              {brand.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Websites that turn visitors into leads for solar installation companies.
            </p>
          </div>

          <nav aria-label="Site">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              Sections
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-quiet">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/blog" className="link-quiet">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="link-quiet">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="link-quiet">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="text-ink-soft">{contact.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-faint">
            © {year} {brand.name}. All rights reserved.
          </p>
          <a href={cta.href} target="_blank" rel="noreferrer" className="link-quiet font-semibold">
            {cta.label}
          </a>
        </div>
      </div>
    </footer>
  )
}