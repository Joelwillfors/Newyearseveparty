"use client";

import { useState } from "react";

export default function RsvpPage() {
  const [name, setName] = useState("");
  const [rules, setRules] = useState("");
  const [latePerson, setLatePerson] = useState("");
  const [color, setColor] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        rules,
        latePerson,
        color,
        userAgent: navigator.userAgent,
      }),
    });

    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <main className="h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg text-neutral-300">Tack. Vi ses.</p>
      </main>
    );
  }

  return (
    <main className="h-screen bg-black text-white flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-8 text-center">

        <h1 className="tracking-widest uppercase text-sm text-neutral-400">
          RSVP
        </h1>

        <input
          required
          placeholder="Namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border-b border-neutral-600 py-2 text-center outline-none"
        />

        {/* Question 1 */}
        <div className="space-y-2">
          <p className="text-sm text-neutral-400">
            Hur ser du på regler?
          </p>
          <select
            required
            value={rules}
            onChange={(e) => setRules(e.target.value)}
            className="w-full bg-black border border-neutral-600 py-2 text-center"
          >
            <option value="" disabled hidden />
            <option>De finns av en anledning</option>
            <option>De är till för att utmanas</option>
            <option>De är förhandlingsbara</option>
          </select>
        </div>

        {/* Question 2 */}
        <div className="space-y-2">
          <p className="text-sm text-neutral-400">
            Kl. 02.47. Vem sitter du helst kvar med?
          </p>
          <select
            required
            value={latePerson}
            onChange={(e) => setLatePerson(e.target.value)}
            className="w-full bg-black border border-neutral-600 py-2 text-center"
          >
            <option value="" disabled hidden />
            <option>Kungen</option>
            <option>GW</option>
          </select>
        </div>

        {/* Question 3 */}
        <div className="space-y-2">
          <p className="text-sm text-neutral-400">
            Vilken färg föredrar du att bära?
          </p>
          <select
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full bg-black border border-neutral-600 py-2 text-center"
          >
            <option value="" disabled hidden />
            <option>Vit</option>
            <option>Grå</option>
            <option>Lila</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-10 py-3 rounded-full border border-neutral-500 tracking-widest hover:border-neutral-300 transition"
        >
          SKICKA
        </button>

      </form>
    </main>
  );
}
