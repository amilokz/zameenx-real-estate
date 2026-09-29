"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/listings";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Get In Touch</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-emerald-950 sm:text-4xl">
            Let&apos;s Find Your Perfect Property
          </h2>
          <p className="mt-3 text-stone-500">
            Call, WhatsApp or drop us a message — our advisors reply within an hour.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: <Phone size={19} />, title: "Call Us", text: "0300 123 4567", href: "tel:+923001234567" },
              { icon: <MessageCircle size={19} />, title: "WhatsApp", text: "Chat instantly", href: `https://wa.me/${WHATSAPP_NUMBER}` },
              { icon: <Mail size={19} />, title: "Email", text: "hello@zameenx.pk", href: "mailto:hello@zameenx.pk" },
              { icon: <MapPin size={19} />, title: "Head Office", text: "Plaza 12, Main Boulevard, Gulberg Greens, Islamabad", href: undefined },
            ].map((c) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-900 text-gold-400">
                    {c.icon}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-stone-400">{c.title}</span>
                    <span className="block text-sm font-semibold text-emerald-950">{c.text}</span>
                  </span>
                </>
              );
              return c.href ? (
                <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                   className="flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-stone-50/60 p-4 transition hover:border-emerald-900/25 hover:bg-emerald-50/50">
                  {inner}
                </a>
              ) : (
                <div key={c.title} className="flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-stone-50/60 p-4">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-stone-200/80 bg-stone-50/60 p-6 sm:p-8 lg:col-span-3">
            {sent ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={52} className="text-emerald-700" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-emerald-950">Message Received!</h3>
                <p className="mt-2 max-w-sm text-sm text-stone-500">
                  Thank you, {form.name || "friend"}. Our advisor will call you back within an hour.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", phone: "", message: "" }); }}
                  className="mt-6 rounded-full border-2 border-emerald-900 px-6 py-2.5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-900 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-emerald-950">Your Name</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ali Raza"
                      className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-emerald-950">Phone Number</span>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="0300 0000000"
                      className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-emerald-950">What are you looking for?</span>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="e.g. 1 kanal house in DHA Lahore, budget around 8 crore…"
                    className="w-full resize-none rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-800 sm:w-auto"
                >
                  <Send size={16} />
                  Request Callback
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
