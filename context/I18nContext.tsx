"use client";

import { createContext, useContext, useState, useMemo, useEffect, ReactNode } from "react";

type Lang = "es" | "en";

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: (lang?: Lang) => void; // puede alternar o forzar idioma
  t: (key: string) => string;
};

const MESSAGES: Record<Lang, Record<string, string>> = {
  en: {
    "hero.hello": "Hi, I'm",
    "hero.role": "Graphic Designer",
    "hero.subtitle": "I make YouTube thumbnails",
    "hero.desc": "SEO and YouTube content specialist",
    "buttons.hire": "Hire me",
    "buttons.thumbnails": "See thumbnails",
    "contact.availability": "Availability",
    "contact.desc": "Available for freelance projects and collaborations.",
    "projects.title": "Projects",
    "projects.subtitle": "Some of my recent work",
    "skills_title": "Skills",
    "skill_photoshop": "Adobe Photoshop",
    "skill_composition": "Thumbnail Composition",
    "skill_typography": "Typography",
    "contact_title": "Contact",
    "contact_name": "Name",
    "contact_email": "Email",
    "contact_message": "Message",
    "contact_send": "Send",
    "contact_copy": "Copy email",
    "contact_copied": "Email copied!",
    "contact_twitter": "Follow me on Twitter!",
    "(opcional)": "(optional)",
    "tu_nombre": "Your name",
    "tu_email": "your_email@example.com",
    "tu_mensaje": "Write what you need",
    "tu_nombredeusuario": "@yourusername",
    "price_title": "Estimated Prices",
    "price_single": "Single thumbnail: $10",
    "price_bundle": "Pack of 5 thumbnails: $40",
    "price_monthly": "Monthly pack (20 thumbnails): $120",
    "contact_aviability": "Availability",
    "contact_desc": "Available for freelance projects and collaborations.",
  },
  es: {
    "hero.hello": "Hola, mi nombre es",
    "hero.role": "Diseñador gráfico",
    "hero.subtitle": "Hago miniaturas para YouTube",
    "hero.desc": "Especialista en SEO y contenido de YouTube",
    "buttons.hire": "Contrátame",
    "buttons.thumbnails": "Ver miniaturas",
    "contact.availability": "Disponibilidad",
    "contact.desc": "Disponible para proyectos freelance y colaboraciones.",
    "projects.title": "Proyectos",
    "projects.subtitle": "Algunos de mis trabajos recientes",
    "skills_title": "Competencias",
    "skill_photoshop": "Adobe Photoshop",
    "skill_composition": "Composición de Miniaturas",
    "skill_typography": "Tipografía",
    "contact_title": "Contacto",
    "contact_name": "Nombre",
    "contact_email": "Correo",
    "contact_message": "Mensaje",
    "contact_send": "Enviar",
    "contact_copy": "Copiar correo",
    "contact_copied": "¡Correo copiado!",
    "contact_twitter": "¡Sígueme en Twitter!",
    "(opcional)": "(opcional)",
    "tu_nombre": "Tu nombre",
    "tu_email": "tu_email@ejemplo.com",
    "tu_mensaje": "Escribe qué necesitas",
    "tu_nombredeusuario": "@tunombredeusuario",
    "price_title": "Precios estimados",
    "price_single": "Miniatura individual: $10",
    "price_bundle": "Pack de 5 miniaturas: $40",
    "price_monthly": "Pack mensual (20 miniaturas): $120",
    "contact_aviability": "Disponibilidad",
    "contact_desc": "Disponible para proyectos freelance y colaboraciones.",
  },
};

const LanguageContext = createContext<I18nContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  defaultLang = "en",
}: {
  children: ReactNode;
  defaultLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("lang") as Lang | null)) ||
      null;
    const initial =
      saved ?? (navigator.language?.startsWith("es") ? "es" : defaultLang);
    setLangState(initial);
  }, [defaultLang]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = useMemo(() => {
    const dict = MESSAGES[lang] ?? MESSAGES[defaultLang];
    return (key: string) => dict[key] ?? key;
  }, [lang, defaultLang]);

  const toggleLang = (newLang?: Lang) => {
    if (newLang) {
      setLangState(newLang);
    } else {
      setLangState((prev) => (prev === "en" ? "es" : "en"));
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within <LanguageProvider>");
  }
  return ctx;
}
