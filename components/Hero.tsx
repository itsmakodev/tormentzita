// components/hero.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/context/I18nContext';
import dynamic from 'next/dynamic';

// Opcional: muestra selector de idioma en el Hero
const LangToggle = dynamic(() => import('@/components/LanguageToggle'), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-center text-center py-16 bg-gray-100">
      <div className="w-full flex justify-end px-4">
        {/* Quita esto si NO quieres el selector aquí */}
        <LangToggle />
      </div>

      <Image
        src="/tormentz.jpg"
        alt="Tormentzita Logo"
        width={150}
        height={150}
        className="rounded-full"
        priority
      />

      <h1 className="text-4xl font-bold mt-4">{t('hero_title')}</h1>
      <p className="text-xl mt-2">{t('hero_role')}</p>
      <p className="mt-4 max-w-md text-gray-700">
        {t('hero_desc')}
      </p>
    </section>
  );
}

