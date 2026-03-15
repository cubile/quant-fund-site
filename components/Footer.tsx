export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/80">
      <div className="container-page flex flex-col items-center gap-6 py-8 text-xs text-neutral-500 sm:flex-row sm:justify-between sm:items-center">

        <p className="tracking-wide text-center sm:text-left">
          © 2026 CUBILE PROP FUND. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="min-h-[40px] text-neutral-500 transition-colors hover:text-neutral-300">
            Terms
          </button>

          <button className="min-h-[40px] text-neutral-500 transition-colors hover:text-neutral-300">
            Privacy Policy
          </button>

          <button className="min-h-[40px] text-neutral-500 transition-colors hover:text-neutral-300">
            Risk Disclosure
          </button>
        </div>

      </div>
    </footer>
  );
}