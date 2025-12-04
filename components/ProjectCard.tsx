"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tags: string[];
  media?: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  media,
  demoUrl,
  codeUrl,
}: Project) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const cover = media?.[0];

  return (
    <>
      {/* Card */}
      <article className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
        {cover ? (
          <Image
            src={cover}
            alt={title}
            width={400}
            height={225}
            sizes="(max-width: 640px) 100vw, 400px"
            className="h-48 w-full cursor-pointer object-cover"
            onClick={() => setIsOpen(true)}
            priority={false}
          />
        ) : (
          <div className="flex h-48 w-full items-center justify-center bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
            No image
          </div>
        )}

        <div className="p-4">
          <h3 className="mb-1 text-base font-semibold">{title}</h3>
          <p className="m-0 text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-dashed border-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-3 flex gap-3">
            {demoUrl && (
              <Link
                className="text-sm font-semibold underline-offset-4 hover:underline"
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ↗
              </Link>
            )}
            {codeUrl && (
              <Link
                className="text-sm font-semibold underline-offset-4 hover:underline"
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Modal */}
      {isOpen && media && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-auto rounded-lg bg-black/10 p-4 backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} media`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            {media.length <= 1 ? (
              <Image
                src={media[0]!}
                alt={title}
                width={1600}
                height={900}
                sizes="100vw"
                className="mx-auto max-h-[80vh] w-auto object-contain"
                priority
              />
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {media.map((src) => (
                  <div key={src} className="relative">
                    <Image
                      src={src}
                      alt={title}
                      width={1200}
                      height={675}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full max-h-[70vh] rounded-md object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
