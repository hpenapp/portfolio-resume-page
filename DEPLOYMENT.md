# 🚀 Guía de Despliegue en Vercel - Portfolio

Vercel es una de las mejores plataformas para hostear aplicaciones de Angular por su facilidad de uso y velocidad. Aquí tienes los pasos para subir tu portafolio:

---

## 1. Preparación del Código
Asegúrate de que tu proyecto esté subido a un repositorio de **GitHub**, **GitLab** o **Bitbucket**.

1. Crea un nuevo repositorio en tu plataforma favorita.
2. Sube los archivos (excepto la carpeta `node_modules` y `.angular`).
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

---

## 2. Importar en Vercel
1. Entra en [vercel.com](https://vercel.com/) e inicia sesión con tu cuenta de Git.
2. Haz clic en el botón **"Add New"** y selecciona **"Project"**.
3. Busca tu repositorio `data-engineer-portfolio` y haz clic en **"Import"**.

---

## 3. Configuración del Proyecto
Vercel detectará automáticamente que es un proyecto de Angular, pero asegúrate de que los ajustes sean los siguientes:

- **Framework Preset:** Angular
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist/data-engineer-portfolio/browser`

> [!IMPORTANT]
> **Nota sobre el Output Directory:** En Angular 18, la carpeta de salida suele ser `dist/data-engineer-portfolio/browser`. Si por alguna razón el despliegue falla diciendo que no encuentra los archivos, intenta cambiarlo simplemente a `dist/data-engineer-portfolio`.

---

## 4. Desplegar
1. Haz clic en **"Deploy"**.
2. Espera unos minutos a que se complete el proceso.
3. ¡Listo! Vercel te dará una URL (ej. `data-engineer-portfolio.vercel.app`) para que compartas tu portafolio con el mundo.

---

## 🔄 Actualizaciones Futuras
Lo mejor de Vercel es que **se sincroniza con tu GitHub**. 
Cada vez que hagas un `git push` a tu rama principal, Vercel detectará el cambio y actualizará tu página automáticamente en cuestión de segundos.

---

### Solución de Problemas Comunes
- **Error 404 en rutas internas:** Si al recargar la página en una ruta específica te da error 404, crea un archivo llamado `vercel.json` en la raíz de tu proyecto con este contenido:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
