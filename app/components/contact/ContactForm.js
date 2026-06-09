import Image from "next/image";

export default function ContactForm() {
  return (

    <form
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

      {/* Botão */}

      <div className="flex justify-end">

        <button
            type="submit"
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
            "
            >

            <Image
                src="/icons/send.svg"
                alt=""
                 width={24}
                height={24}
            />

            <span>
                Enviar mensagem
            </span>

            </button>

      </div>

    </form>

  );
}