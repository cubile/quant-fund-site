import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container-page space-y-10">
      <header className="space-y-3 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
          Investor contact
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Connect regarding the quantitative derivatives program.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          This website is for informational purposes only and does not constitute an offer to sell
          or a solicitation of an offer to buy any security. If you are a qualified or
          institutional investor interested in learning more, please share your contact details
          below.
        </p>
      </header>

      <section className="pb-10">
        <ContactForm />
      </section>
    </div>
  );
}

