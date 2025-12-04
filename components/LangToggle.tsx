'use client';

import { useLanguage } from '@/context/I18nContext';

export default function LangToggle() {
  const { toggleLang, t } = useLanguage();

  return (
    <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
      <span aria-hidden>🌐</span>
      <label style={{ fontSize: 14 }}>{t('toggle_label')}</label>
      <select
        aria-label={t('toggle_label')}
        value={t('current_lang')}
        onChange={(e) => toggleLang(e.target.value as 'es' | 'en')}
        style={{ padding: '4px 8px', borderRadius: 6 }}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}
