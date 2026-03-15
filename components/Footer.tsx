export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/80">
      <div className="container-page flex flex-col gap-4 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="tracking-wide">
          © {new Date().getFullYear()} Quantitative Research Fund. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-6">
          <button className="text-neutral-500 hover:text-neutral-300">Terms</button>
          <button className="text-neutral-500 hover:text-neutral-300">Privacy Policy</button>
          <button className="text-neutral-500 hover:text-neutral-300">Risk Disclosure</button>
        </div>
      </div>
    </footer>
  );
}

