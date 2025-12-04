# Portafolio de **itsmako** — Next.js + TailwindCSS

Inspirado en un estilo limpio y minimalista (hero sobrio, grid de proyectos y apartado claro para contratar).

## 🚀 Stack
- Next.js (App Router)
- React 18
- Tailwind CSS (dark mode por clase)
- Animaciones sutiles (IntersectionObserver)
- Barra de progreso de scroll
- Formulario con Formspree (o fallback `mailto:`)

## 🧰 Puesta en marcha
```bash
# 1) Instala dependencias
npm install

# 2) Copia variables de entorno
cp .env.example .env.local
# (opcional) Rellena NEXT_PUBLIC_FORMSPREE_ENDPOINT con tu endpoint
# y ajusta NEXT_PUBLIC_CONTACT_EMAIL

# 3) Arranca el entorno de desarrollo
npm run dev
```

Abre http://localhost:3000

## 🛠 Personalización rápida
- Edita texto y perfiles en `app/page.tsx`.
- Cambia proyectos en `lib/projects.ts`.
- Cambia acento (verde) modificando utilidades `from-emerald-500 to-emerald-400` o añade tu paleta.
- Añade logos/favicons en `public/`.

## 📬 Formulario
- Opción recomendada: crea un formulario en [Formspree](https://formspree.io/), pega tu endpoint en `NEXT_PUBLIC_FORMSPREE_ENDPOINT` y listo.
- Sin endpoint, el formulario abrirá el cliente de correo con un borrador pre‑relleno (`mailto:`).

## 📦 Build
```bash
npm run build && npm start
```

---

© {Año actual} itsmako
