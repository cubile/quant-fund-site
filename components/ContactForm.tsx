"use client";

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  broker: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  broker: '',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null
  );

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.broker.trim()) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error ?? 'Submission failed.');
      }

      setForm(initialState);
      setStatus({
        type: 'success',
        message: 'Thank you. Your information has been received.'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Unable to submit at the moment. Please try again later.'
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-neutral-800 bg-black/40 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            Name*
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none ring-0 focus:border-accent"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            Email*
          </label>
          <input
            type="email"
            className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none ring-0 focus:border-accent"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            Phone*
          </label>
          <input
            type="tel"
            className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none ring-0 focus:border-accent"
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            Broker / Platform*
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none ring-0 focus:border-accent"
            value={form.broker}
            onChange={(e) => setForm((prev) => ({ ...prev, broker: e.target.value }))}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
          Message (optional)
        </label>
        <textarea
          rows={4}
          className="w-full resize-none rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none ring-0 focus:border-accent"
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
        />
      </div>
      {status && (
        <p
          className={`text-xs ${
            status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
          }`}
        >
          {status.message}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-opacity disabled:opacity-60"
      >
        {submitting ? 'Submitting…' : 'Submit Interest'}
      </button>
      <p className="text-[10px] leading-relaxed text-neutral-500">
        This form is intended for qualified investors and institutions seeking additional
        information. Submission does not constitute an offer to sell or a solicitation of an offer
        to buy any security.
      </p>
    </form>
  );
}

