export default function Footer() {
  return (
    <footer className="border-t border-[var(--neutral-700)]">

      <div className="max-w-6xl mx-auto px-6 py-6">

        <div className="flex flex-col gap-2">

          {/* PRIMEIRA LINHA */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >

            <p
              className="
                text-[var(--brand-primary-900)]
                font-semibold
                text-[16px]
              "
            >
              Paloma Bessa
            </p>

            <a
              href="https://linkedin.com/in/palomabessa"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2

                text-[var(--text-secondary)]
                text-[14px]

                hover:opacity-70
                transition
              "
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />

              <span>/palomabessa</span>

            </a>

          </div>

          {/* SEGUNDA LINHA */}

          <p
            className="
              text-[var(--text-secondary)]
              text-[14px]
            "
          >
            © 2026 Portfólio
          </p>

        </div>

      </div>

    </footer>
  );
}