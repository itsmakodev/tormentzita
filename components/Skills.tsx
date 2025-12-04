"use client";

import { useLanguage } from "@/context/I18nContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-900">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {t("skills_title")}
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 px-4">
        <li className="bg-white dark:bg-slate-800 shadow rounded px-4 py-2">
          {t("skill_photoshop")}
        </li>
        <li className="bg-white dark:bg-slate-800 shadow rounded px-4 py-2">
          {t("skill_composition")}
        </li>
        <li className="bg-white dark:bg-slate-800 shadow rounded px-4 py-2">
          {t("skill_typography")}
        </li>
      </ul>
    </section>
  );
}
