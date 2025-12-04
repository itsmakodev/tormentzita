"use client";

import { useState } from "react";
import { useLanguage } from "@/context/I18nContext";

export function ContactForm() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("zenjymc@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Error copying email:", err);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = "mailto:zenjymc@gmail.com";
      }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <h2 className="text-lg font-semibold mb-4">{t("contact_title")}</h2>

      <label>{t("contact_name")}</label>
      <input type="text" required className="w-full mb-3 rounded border px-2 py-1" placeholder={t("tu_nombre")} />

      <label>{t("contact_email")}</label>
      <input type="email" required className="w-full mb-3 rounded border px-2 py-1" placeholder={t("tu_email")} />

      <label>Twitter / X {t("(opcional)")}</label>
      <input type="text" required className="w-full mb-3 rounded border px-2 py-1" placeholder={t("tu_nombredeusuario")} />

      <label>{t("contact_message")}</label>
      <textarea required className="w-full mb-3 rounded border px-2 py-1" placeholder={t("tu_mensaje")} />

      <button
        type="submit"
        className="rounded bg-emerald-500 px-4 py-2 text-white"
      >
        {t("contact_send")}
      </button>

      <button
        type="button"
        onClick={handleCopy}
        className="ml-3 rounded border px-3 py-2"
      >
        {copied ? "Email copied!" : "Copy email"}
      </button>

      <a
        href="https://twitter.com/7tormentz"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 inline-flex items-center gap-2 rounded bg-[#222222] px-4 py-2 font-semibold text-white"
      >
        <img src="/x.png" alt="X" className="h-4 w-4" />
        @7tormentz
      </a> {t("contact_twitter")}
    </form>
  );
}