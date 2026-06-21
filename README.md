# Daniel Vega Coaching

Landing page premium de coaching fitness creada con React, Vite y TypeScript.

## Instalación

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la URL local, normalmente `http://localhost:5173`.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # build optimizado de producción
npm run preview  # previsualizar el build
npm run lint     # revisar el código
```

El resultado de producción queda en la carpeta `dist/`.

## Cambiar el número de WhatsApp

Edita:

`src/data/siteConfig.ts`

La constante central es:

```ts
export const WHATSAPP_NUMBER = '51997943587'
```

Todos los botones y mensajes usan esta configuración.

## Cambiar planes y precios

Edita:

`src/data/plans.ts`

Cada plan contiene nombre, precio, precio anterior, beneficios, biblioteca, color y estado destacado.

## Cambiar imágenes

Las imágenes se organizan en:

```text
src/assets/images/
  hero/
  transformations/
  testimonials/
  about/
  logo/
```

- Hero desktop: reemplaza `src/assets/images/hero/daniel-pool-wide.jpeg`.
- Hero móvil: reemplaza `src/assets/images/hero/daniel-pool-close.jpeg`.
- Sobre mí: reemplaza `daniel-real-before.jpeg` y `daniel-real-after.jpeg`.
- Transformación de Marcus: reemplaza `marcus-before.jpeg` y `marcus-after.jpeg`.

Conserva los nombres actuales si quieres reemplazarlas sin modificar imports.

## Cambiar textos

- Navegación y datos generales: `src/data/siteConfig.ts`
- Planes: `src/data/plans.ts`
- Transformaciones: `src/data/transformations.ts`
- Testimonios: `src/data/testimonials.ts`
- Preguntas frecuentes: `src/data/faq.ts`
- Textos de secciones: `src/components/sections/`

## Ruleta

La ruleta se abre automáticamente después de 4 segundos o cuando el usuario supera el 40% de scroll. Solo aparece automáticamente una vez por sesión.

El premio queda guardado en `sessionStorage` y se añade al mensaje de WhatsApp cuando el usuario elige un plan.

Para cambiar premios, edita:

`src/components/modals/WheelModal.tsx`

## Personalización visual

Los colores, sombras y tipografías están centralizados en:

`src/styles/variables.css`

Los estilos principales y responsive están en:

`src/styles/global.css`

Las animaciones de entrada están en:

`src/styles/animations.css`

## Build para producción

```bash
npm run build
```

Sube el contenido de `dist/` a tu hosting. Para Netlify, Vercel o Cloudflare Pages usa:

- Build command: `npm run build`
- Output directory: `dist`
