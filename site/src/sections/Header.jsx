export default function Header({ brand, cta }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="container-site flex h-[72px] items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
          {brand.name}
        </a>
        <a href={cta.href} target="_blank" rel="noreferrer" className="btn-sm">
          {cta.label}
        </a>
      </div>
    </header>
  )
}