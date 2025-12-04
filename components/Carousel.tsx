"use client";

import Image from "next/image";
import { useState } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-lg">
      <Image
        src={images[current]}
        alt="carousel"
        width={400}
        height={225}
        className="h-48 w-full object-cover transition-all"
      />

      {/* Botones prev/next */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
      >
        ›
      </button>
    </div>
  );
}
