import Image from "next/image";


export default function ServiceItem({
  title,
  description,
  items,
}) {
  return (

    <div
      className="
        w-full

        px-2
        py-6

        md:px-6
        md:py-8

        flex
        flex-col

        md:flex-row

        gap-8
        md:gap-16
      "
    >

      {/* CONTEÚDO */}

      <div className="flex-1">

        <h3
          className="
            text-[24px]
            leading-[32px]
            font-bold

            text-[var(--color-brand-primary-700)]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4

            text-[16px]
            md:text-[18px]

            leading-[24px]

            text-[var(--text-tertiary)]
          "
        >
          {description}
        </p>

      </div>

      {/* LISTA */}

      <ul
        className="
          flex-1

          flex
          flex-col

          gap-4
        "
      >

        {items.map((item) => (

          <li
            key={item}

            className="
              flex
              items-start

              gap-2
            "
          >

            {/* ÍCONE */}

            <Image
                src="/icons/service-bullet.svg"
                alt=""
                width={24}
                height={24}
                className="shrink-0"
            />

            {/* TEXTO */}

            <span
              className="
                text-[16px]

                leading-[24px]

                text-[var(--text-secondary)]
              "
            >
              {item}
            </span>

          </li>

        ))}

      </ul>

    </div>

  );
}