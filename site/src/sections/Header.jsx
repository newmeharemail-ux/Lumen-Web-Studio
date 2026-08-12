export default function Header({ brand, cta }) {
  return (
    <header className="fixed inset-x-3 top-3 z-40 sm:inset-x-4 sm:top-4">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-line bg-bg/75 px-4 shadow-[0_14px_34px_-14px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:px-6">
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