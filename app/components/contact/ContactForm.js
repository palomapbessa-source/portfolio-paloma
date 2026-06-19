"use client";

import { useState } from "react";

import Image from "next/image";

import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm({ onSuccess }) {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const [loading, setLoading] = useState(false);

const [turnstileToken, setTurnstileToken] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        turnstileToken,
      }),
    });

    const data = await response.json();

    console.log("API Response:", data);

    if (data.success) {
      setName("");
      setEmail("");
      setMessage("");

      onSuccess?.();
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (

    <form onSubmit={handleSubmit}
      className="
        mt-8

        flex
        flex-col

        gap-6
      "
    >

      {/* Nome + Email */}

      <div
        className="
            flex
            flex-col

            gap-6
        "
        >

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="
                h-14

                px-4

                rounded-lg

                border
                border-[var(--neutral-300)]
                "
            />

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="
                h-14

                px-4

                rounded-lg

                border
                border-[var(--neutral-300)]
                "
            />

        </div>

      {/* Mensagem */}

      <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem aqui..."
          className="
          h-40

          p-4

          rounded-lg

          border
          border-[var(--neutral-300)]

          resize-none
        "
      />

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        onSuccess={(token) => setTurnstileToken(token)}
      />

      {/* Botão */}

      <div className="flex justify-end">

        <button
            type="submit"
            disabled={loading || !turnstileToken}
            className="
                mt-8

                ml-auto

                flex
                items-center
                gap-2

                px-8
                py-4

                rounded-full

                bg-[var(--brand-accent-500)]

                text-white
                font-semibold

                hover:opacity-90
                transition-opacity

                disabled:opacity-50
                disabled:cursor-not-allowed
            "
            >

            <Image
                src="/icons/send.svg"
                alt=""
                 width={24}
                height={24}
            />

            <span>
                 {loading ? "Enviando..." : "Enviar mensagem"}
            </span>

            </button>

      </div>

    </form>

  );
}