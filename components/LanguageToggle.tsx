"use client";

import Image from "next/image";
import { useLanguage } from "@/context/I18nContext";

export default function LanguageToggleButton() {
  const { toggleLang, lang } = useLanguage(); // aquí usas el contexto

  return (
    <button
      onClick={() => toggleLang(lang === "en" ? "es" : "en")} // alterna entre idiomas
      className="focus:outline-none"
    >
      <Image
        src={lang === "en" ? "/es.png" : "/en.png"}
        alt={lang === "en" ? "Cambiar a Español" : "Switch to English"}
        width={32}
        height={32}
        priority
      />
    </button>
  );
}
