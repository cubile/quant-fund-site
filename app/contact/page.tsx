import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container-page space-y-10">
      <header className="space-y-3 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
          Investor contact
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Investor & Partnership Inquiries
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          This page is intended for professional investors, partners, and collaborators seeking
          additional information about the Cubile Prop Fund&apos;s systematic derivatives program.
        </p>
      </header>

      <section className="pb-10">
        <ContactForm />
      </section>
    </div>
  );
}

