# 📋 Prueba Técnica Siigo – JavaScript + Playwright + Screenplay

Este proyecto implementa una prueba técnica utilizando **JavaScript**, **Playwright** y el patrón de diseño **Screenplay**, para automatizar flujos críticos de una aplicación tipo ERP como Siigo.

---

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)
- Patrón [Screenplay](https://serenity-js.org/handbook/design/screenplay-pattern/)
- JavaScript (ES6+)
- JSDoc para documentación de código

---

## 🏗️ Estructura del proyecto

```bash
.
├── interactions/           # Acciones reutilizables (llenar inputs, clicks)
├── pages/                  # Mapas de selectores (PageObjects)
├── questions/              # Preguntas (verificaciones/assertions)
├── tasks/                  # Tareas que un actor puede realizar
├── tests/                  # Archivos de prueba (specs)
├── evidencias/             # Capturas de pantalla generadas
├── playwright.config.js    # Configuración general de Playwright
└── README.md               # Documentación del proyecto

git clone https://github.com/tu-usuario/Prueba_tecnica_javaScript_screenPlay.git
cd Prueba_tecnica_javaScript_screenPlay

# Ejecutar prueba de creación de cliente
npx playwright test tests/crearCliente.spec.js

# Ejecutar prueba de login
npx playwright test tests/login.spec.js

