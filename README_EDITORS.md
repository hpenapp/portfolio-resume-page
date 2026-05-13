# 🛠️ Guía de Edición - Portfolio Data Engineer

Esta guía te ayudará a navegar por el código de tu portafolio para que puedas realizar actualizaciones de contenido, imágenes y estilos de forma rápida y sencilla.

---

## 📂 Estructura del Proyecto

El proyecto está construido con **Angular 18** (Standalone Components) y **Tailwind CSS**.

```text
data-engineer-portfolio/
├── src/
│   ├── app/
│   │   ├── components/       # Componentes de la interfaz (Hero, About, Resume, etc.)
│   │   ├── models/           # Interfaces de datos (TypeScript)
│   │   ├── services/         # 🟢 FUENTE DE VERDAD: data.service.ts
│   ├── assets/               # 🖼️ IMÁGENES, LOGOS Y PDFs
│   ├── index.html
│   └── styles.css            # Estilos globales y variables de color
├── tailwind.config.js        # Configuración de colores y fuentes
└── README.md
```

---

## 🟢 Cómo Editar el Contenido (Textos, Experiencia, Certificaciones)

Casi todo el contenido dinámico del sitio se gestiona en un solo archivo:
`src/app/services/data.service.ts`

### 1. Datos Personales
Busca el objeto `personalInfo` para cambiar:
- `fullName`: Tu nombre.
- `summary`: Tu biografía profesional.
- `specialties`: Los roles que aparecen en el efecto de escritura del Hero.
- `currentRole`: Lo que aparece debajo de "About Me" y en el Resume.

### 2. Experiencia Laboral
Busca el array `experiences`. Cada objeto tiene soporte para inglés (default) y español (`translations`).
- **Para añadir un logo:** Cambia `logoUrl` por la ruta de tu imagen (ej. `assets/logos/mi-empresa.png`).
- **Traducciones:** Asegúrate de actualizar tanto el campo principal (EN) como el objeto `translations.es` (ES).

### 3. Certificaciones
Busca el array `certifications`. Puedes categorizarlas como `Certification`, `Badge` o `Course` para que se filtren correctamente en las pestañas de la web.

---

## 🖼️ Cómo Gestionar Imágenes y PDFs

Todos los archivos estáticos deben ir en la carpeta `src/assets/`.

### 1. Foto de Perfil
Actualmente hay un placeholder en `src/app/components/summary/summary.component.ts`.
- **Cómo cambiarla:**
  1. Guarda tu foto en `src/assets/profile.jpg`.
  2. En `summary.component.ts`, busca la línea que tiene el comentario `<!-- <img src="assets/profile.jpg" ... -->` y descoméntala, quitando el SVG que está arriba.

### 2. Logos de Empresas
- Guarda los logos en `src/assets/logos/`.
- En `data.service.ts`, actualiza el `logoUrl` de cada experiencia:
  ```typescript
  logoUrl: 'assets/logos/heineken.png'
  ```

### 3. Descargar el CV
- Guarda tus archivos PDF en `src/assets/`.
- En `src/app/components/resume/resume.component.ts`, busca el botón de descarga y cambia el `href`:
  ```html
  <a href="assets/CV_Humberto_EN.pdf" download> ... </a>
  ```

---

## 🎨 Personalización Estética

### 1. Colores (Deep Tech)
Los colores principales están definidos en `tailwind.config.js`:
- `primary`: El azul cian (`#22d3ee`).
- `background`: El azul oscuro profundo (`#0f172a`).
- `cardBg`: El color de las tarjetas de cristal.

### 2. Fondo de Red Neuronal
Si quieres cambiar la velocidad o el color de los puntos en el Hero, edita `src/app/components/hero/hero.component.ts`:
- `this.particles.push({ ... vx, vy })`: Cambia los valores de velocidad.
- `this.ctx.fillStyle = '#22d3ee'`: Cambia el color de los puntos.

---

## 🚀 Comandos Útiles

- **Ver cambios en vivo:** `npm start` (se abre en `localhost:4200`).
- **Construir para producción:** `npm run build` (genera la carpeta `dist/` para subir a un servidor).

---

## 🚀 Despliegue
Para saber cómo subir tu página a internet, consulta la **[Guía de Despliegue en Vercel](DEPLOYMENT.md)**.
