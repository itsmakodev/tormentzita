// components/HireMe.tsx
"use client";

import React from "react";
import {ContactForm} from "./ContactForm"; // 👈 usa default import
import { LanguageProvider, useLanguage } from "@/context/I18nContext"; // 👈 usa el hook de i18n

const HireMe = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-4 text-center">
      {/* Título */}
      <h2 className="text-3xl font-semibold mb-6">
        {t("hireme.title")}
      </h2>

      {/* Twitter (X) handle con logo */}
      <p className="mb-4 flex items-center justify-center gap-2">
        <a
          href="https://twitter.com/7tormentz"
          className="inline-flex items-center gap-2 text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Logo de X */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1227"
            className="w-5 h-5 fill-current"
          >
            <path d="M714.163 519.284L1160.89 0H1060.42L668.225 450.887L356.723 0H0L468.748 681.821L0 1226.31H100.474L508.365 747.681L843.277 1226.31H1200L714.163 519.284ZM556.567 687.747L514.029 628.144L137.011 79.5731H301.825L601.298 508.712L643.836 568.315L1065.2 1146.73H900.385L556.567 687.747Z" />
          </svg>
          @7tormentz
        </a>
      </p>

      {/* Precios */}
      <div className="mx-auto mb-8 inline-block text-left">
        <p className="font-semibold">{t("hireme.prices_title")}</p>
        <ul className="list-disc list-inside">
          <li>{t("hireme.price_single")}</li>
          <li>{t("hireme.price_bundle")}</li>
          <li>{t("hireme.price_monthly")}</li>
        </ul>
      </div>

      {/* Formulario de contacto */}
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default HireMe;
