"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();

  function handleSubmit() {
    if (password === process.env.NEXT_PUBLIC_FEST_PASSWORD) {
      router.push("/info");
    } else {
      alert("Fel lösenord");
    }
  }

  return (
    <main className="h-screen bg-black flex items-center justify-center text-white">
      <div className="space-y-6 text-center w-72">

        <h1 className="text-xl font-medium">Enter password</h1>

        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="
              w-full
              px-4 py-3
              rounded-md
              bg-white
              text-black
              placeholder-neutral-400
              caret-black
              focus:outline-none
              focus:ring-2
              focus:ring-white/50
            "
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-neutral-900"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="
            w-full
            border border-white/60
            py-3
            rounded-md
            hover:bg-white
            hover:text-black
            transition
          "
        >
          Enter
        </button>

      </div>
    </main>
  );
}
