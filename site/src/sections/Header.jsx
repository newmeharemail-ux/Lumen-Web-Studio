export default function Header({ brand, cta }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="container-site flex h-[72px] items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 text-base font-semibold tracking-tight sm:gap-2.5 sm:text-lg">
          <span
            className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(173,235,179,0.7)]"
            aria-hidden="true"
          />
          {brand.name}
        </a>
        <a href={cta.href} target="_blank" rel="noreferrer" className="btn-sm whitespace-nowrap px-4 sm:px-5">
          {cta.label}
        </a>
      </div>
    </header>
  )
}