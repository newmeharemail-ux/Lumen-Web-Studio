export default function Footer({ brand, contact, cta }) {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-paper">
      <div className="container-site py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-semibold tracking-tight">{brand.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#5a5a5a]">
              Websites that turn visitors into leads for solar installation companies.
            </p>
          </div>
          <div className="text-sm text-[#5a5a5a]">
            <a href={`mailto:${contact.email}`} className="block hover:text-ink">
              {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="mt-1.5 block hover:text-ink">
              {contact.phone}
            </a>
            <p className="mt-1.5">{contact.serviceArea}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#8a8a8a]">© {year} {brand.name}. All rights reserved.</p>
          <a href={cta.href} target="_blank" rel="noreferrer" className="text-sm font-medium underline-offset-2 hover:underline">
            {cta.label}
          </a>
        </div>
      </div>
    </footer>
  )
}