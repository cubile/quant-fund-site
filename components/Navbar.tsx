import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/performance', label: 'Performance' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/risk', label: 'Risk' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1f1f1f] bg-black/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-300 hover:text-white transition-colors"
        >
          Quantitative Research Fund
        </Link>
        <div className="hidden items-center gap-8 text-sm text-neutral-300 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative pb-0.5 transition-colors hover:text-white"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover/link:scale-x-100" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6 text-sm text-neutral-300 sm:hidden">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
