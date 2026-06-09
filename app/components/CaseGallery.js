"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function CaseGallery({
  images,
  columns = 2,
}) {

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images?.length) return null;

  const slides = images.map((image) => ({
    src: image,
  }));

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>

      {/* GRID */}

      <div
        className={`
          mt-16

          grid

          gap-4

          grid-cols-1

          justify-items-center

          ${
            columns === 2
              ? "md:grid-cols-2"
              : columns === 3
              ? "md:grid-cols-3"
              : columns === 4
              ? "md:grid-cols-4"
              : "md:grid-cols-2"
          }
        `}
      >

        {images.map((image, index) => (

          <button
            key={index}

            type="button"

            onClick={() => handleOpen(index)}

            className={`
              block

              w-full

              cursor-zoom-in

              overflow-hidden

              ${
                images.length === 1
                  ? `
                    md:col-span-full
                    md:w-full
                    md:max-w-6xl
                    justify-self-center
                  `

                  : images.length % columns !== 0 &&
                    index === images.length - 1

                  ? `
                    md:col-span-full
                    md:w-full
                    md:max-w-6xl
                    justify-self-center
                  `

                  : ""
              }
            `}
          >

            <Image
              src={image}

              alt={`Galeria ${index + 1}`}

              width={1600}

              height={1200}

              priority={false}

              unoptimized

              className="
                w-full
                h-auto

                object-cover

                transition
                duration-300

                hover:opacity-95
              "
            />

          </button>

        ))}

      </div>

      {/* LIGHTBOX */}

      <Lightbox
        open={open}

        close={() => setOpen(false)}

        index={currentIndex}

        slides={slides}

        carousel={{
          finite: false,
        }}

        controller={{
          closeOnBackdropClick: true,
        }}
      />

    </>
  );

}