  "use client";

  import Image from "next/image";
  import Link from "next/link";
  import Reveal from "@/components/Reveal";
  import ProjectCard from "@/components/ProjectCard";
  import SectionHeader from "@/components/SectionHeader";
  import { ContactForm } from "@/components/ContactForm";
  import Skills from "@/components/Skills";
  import { projects } from "@/lib/projects";
  import ThemeToggle from "@/components/ThemeToggle"
  import LanguageToggleButton from "@/components/LanguageToggle";
  import { useLanguage } from "@/context/I18nContext";
  import { posters } from "@/lib/posters";
export default function Page() {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <main className="p-8 bg-white text-gray-900 dark:bg-slate-950 dark:text-gray-100">
        {/* HERO */}
        <section className="border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto grid grid-cols-1 gap-6 px-6 py-14 md:grid-cols-[1.1fr_.9fr]">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  {t("hero.role")}
                </p>

                <h1 className="mt-1 text-4xl font-extrabold leading-[1.08] md:text-5xl">
                  {t("hero.hello")}{" "}
                  <span className="bg-gradient-to-br from-emerald-500 to-emerald-300 bg-clip-text text-transparent">
                    Tormentzita
                  </span>
                </h1>

                <h2 className="mt-3 text-2xl font-bold">{t("hero.subtitle")}</h2>

                <p className="mt-3 max-w-prose text-slate-600 dark:text-slate-400">
                  {t("hero.desc")}
                </p>

                <div className="mt-5 flex flex-wrap gap-3 items-center">
                  <Link
                    href="#miniaturas"
                    className="rounded-lg border border-transparent bg-gradient-to-br from-emerald-500 to-emerald-400 px-4 py-2 font-semibold text-emerald-950 shadow-sm"
                  >
                    {t("buttons.thumbnails")}
                  </Link>
                  <Link
                    href="#contacto"
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  >
                    {t("buttons.hire")}
                  </Link>
                  <ThemeToggle />
                  <LanguageToggleButton>
                  </LanguageToggleButton>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <aside className="flex justify-center">
                <Image
                  src="/tormentz.jpg"
                  alt="Foto de Tormentzita"
                  width={260}
                  height={260}
                  className="rounded-full border-4 border-emerald-500 object-cover shadow-lg"
                  priority
                />
              </aside>
            </Reveal>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="miniaturas" className="py-16">
          <div className="container mx-auto px-6">
            <SectionHeader
              title={t("projects.title")}
              subtitle={t("projects.subtitle")}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Reveal key={p.title}>
                  <ProjectCard {...p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      
        {/* POSTERS */}
<section id="posters" className="py-16 border-t border-slate-200 dark:border-slate-800">
  <div className="container mx-auto px-6">
    <SectionHeader
      title="Posters"
      subtitle="Algunos de mis diseños de posters."
    />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posters.map((p) => (
        <Reveal key={p.title}>
          <ProjectCard {...p} />
        </Reveal>
      ))}
    </div>
  </div>
</section>

        {/* SKILLS */}
        <Skills />

        {/* CONTACTO */}
        <section
          id="contacto"
          className="py-16 border-t border-slate-200 dark:border-slate-800"
        >
  <div className="container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-[1.1fr_.9fr]">
    <ContactForm />
    <aside className="rounded-xl border border-dashed border-slate-300 p-5 dark:border-slate-700/70">
      <h3 className="text-base font-semibold">
        {t("contact_aviability")}
              </h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        {t("contact_desc")}
      </p>

      <div className="mt-4">
        <h4 className="font-semibold">{t("price_title")}</h4>
        <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-400">
          <li>{t("price_single")}</li>
          <li>{t("price_bundle")}</li>
          <li>{t("price_monthly")}</li>
        </ul>
      </div>
    </aside>
  </div>
</section>

        {/* FOOTER */}
        <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 itsmako. All rights reserved.
        </footer>
      </main>
    );
  }