export default function Footer() {
  return (
    <footer className="bg-[var(--brand-primary-900)]">
      <div
        className="
          w-auto
          flex
          px-5
          py-5

          flex-col
          justify-center
          items-center
          gap-4

          md:flex-row
          md:justify-between
          md:items-center
          md:gap-0
        "
      >
        {/* Logo + copyright */}
        <div
          className="
            flex
            flex-row
            items-center
            justify-center

            md:flex-col
            md:items-start

            gap-2

            order-2
            md:order-1
          "
        >
          <img
            src="/logo-pb-mobile-white.svg"
            alt="PB Design"
            className="h-6 w-auto"
          />

          <p className="text-sm text-white">
            © 2026 Portfólio
          </p>
        </div>

        {/* Redes sociais */}
        <nav
          aria-label="Redes sociais"
          className="
            flex
            items-center
            gap-3

            order-1
            md:order-2
          "
        >
          <a
            href="https://instagram.com/pbessa.design"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-70"
          >
            <img
              src="/icons/instagram.svg"
              alt="icone do Instagram"
              className="w-5 h-5"
            />
          </a>

          <a
            href="https://facebook.com/pbessa.design"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-opacity hover:opacity-70"
          >
            <img
              src="/icons/facebook.svg"
              alt="icone do Facebook"
              className="w-5 h-5"
            />
          </a>

          <a
            href="https://linkedin.com/in/palomabessa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity hover:opacity-70"
          >
            <img
              src="/icons/linkedin.svg"
              alt="icone do LinkedIn"
              className="w-5 h-5"
            />
          </a>
        </nav>
      </div>
    </footer>
  );
}