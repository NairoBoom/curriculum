# Portafolio Profesional - Nairo Samir Boom Vargas

Portafolio web profesional de Desarrollador Fullstack con características avanzadas de UX/UI, rendimiento y accesibilidad.

## Características Implementadas

### SEO y Meta Tags
- **Open Graph** completo para redes sociales (Facebook, LinkedIn)
- **Twitter Cards** para mejor preview en Twitter
- **Schema.org JSON-LD** para rich snippets en Google
- Sitemap.xml y robots.txt configurados
- Meta tags optimizados (description, keywords, author)
- Canonical URL definida

### Progressive Web App (PWA)
- **Service Worker** con estrategia de caché
- **Manifest.json** configurado
- Soporte offline básico
- Instalable en dispositivos móviles y desktop
- Theme color adaptativo según preferencias del sistema

### Rendimiento
- **Lazy Loading** en todas las imágenes no críticas
- **Preload** de recursos críticos (CSS, JS, fuentes, imagen hero)
- **Preconnect** a Google Fonts
- `fetchpriority="high"` en imagen principal
- `decoding="async"` en imágenes secundarias
- Fuentes optimizadas con `display=swap`

### Accesibilidad (A11y)
- Navegación por teclado completa
- **Skip links** para saltar al contenido principal
- Indicadores de foco visibles (`:focus-visible`)
- ARIA labels en todos los elementos interactivos
- Estructura semántica HTML5 (`<main>`, `<nav>`, `<section>`)
- Contraste WCAG AA compatible

### UX/UI y Animaciones
#### Efectos Visuales
- **Animated Grid Background** con Canvas API (partículas flotantes)
- **Typing Effect** mostrando tecnologías dinámicamente
- **Animated Counters** para estadísticas (años experiencia, proyectos, tecnologías)
- **3D Hover Effects** en tarjetas de proyectos
- **Glassmorphism** en navegación móvil
- **Scroll Progress Bar** indicador de lectura
- **Intersection Observer Animations** (fade-in-up en elementos)
- **Custom Cursor** con efecto trail (solo desktop)

#### Componentes Interactivos
- **Mobile Hamburger Menu** responsive con animaciones
- **Dark/Light Theme Toggle** persistente
- **Language Switcher** (ES/EN) con Redux
- **Project Filters** por categoría (Todos, E-commerce, APIs, DevOps, Mobile)
- **Project Modal System** con:
  - Navegación prev/next
  - Teclado (ESC, flechas)
  - Click fuera para cerrar
  - Backdrop blur
- **Timeline Vertical** para experiencia laboral con scroll-based progress
- **Skills Visualization**:
  - Progress bars animados con shimmer effect
  - Radar chart interactivo (Chart.js)
- **Testimonials Section** con diseño moderno

### Analytics
- **Google Analytics 4** integrado
- Event tracking personalizado:
  - `view_project` - Cuando se abre un proyecto en modal
  - `download_cv` - Cuando se descarga el CV
- IP anonymization habilitada
- Cookie flags seguros (SameSite=None;Secure)

### Funcionalidades
- **CV Download** (window.print() optimizado)
- **Smooth Scroll** a secciones
- **Form Validation** básica en contacto
- **Responsive Design** mobile-first
- **Estado persistente** en localStorage (tema, idioma)

## Stack Tecnológico

### Frontend
- **HTML5** semántico
- **CSS3** con variables custom y animaciones
- **JavaScript ES6+** vanilla
- **Tailwind CSS** (CDN) para utilidades
- **jQuery 3.7.1** para manipulación DOM
- **Redux** para manejo de estado global
- **Chart.js** para visualización de datos

### Librerías y Recursos
- **Font Awesome 6.5.2** para iconos
- **Google Fonts** (Inter)
- **Service Worker API** para PWA
- **Intersection Observer API** para animaciones
- **Canvas API** para background animado

## Estructura del Proyecto

```
/var/www/curriculum/
├── index.html              # Página principal
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker
├── sitemap.xml            # Sitemap para SEO
├── robots.txt             # Directivas para crawlers
├── assets/
│   ├── app.js             # Lógica principal JavaScript
│   └── styles.css         # Estilos personalizados
└── img/
    ├── foto.jpeg          # Foto de perfil
    └── logos/             # Logos de empresas y certificaciones
```

## Métricas de Rendimiento

### Optimizaciones Aplicadas
- ✅ Recursos críticos precargados
- ✅ Lazy loading en imágenes
- ✅ Async decoding de imágenes
- ✅ Service Worker con caché
- ✅ Fuentes con display swap
- ✅ Minificación lista para producción

### Pendientes para Producción
- ⚠️ Migrar de jQuery a Vanilla JS (~90KB ahorrados)
- ⚠️ Eliminar Redux innecesario (~15KB ahorrados)
- ⚠️ Tailwind local o PurgeCSS (~280KB ahorrados)
- ⚠️ Font Awesome subset (~850KB ahorrados)
- ⚠️ Conversión de imágenes a WebP
- ⚠️ Implementar responsive images (srcset, sizes)
- ⚠️ Code splitting y minificación

## Compatibilidad

### Navegadores Soportados
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

### Características Progressive Enhancement
- Custom cursor: solo desktop (detecta touch)
- Canvas animations: fallback a fondo estático
- Service Worker: mejora progresiva, no bloquea

## Instalación y Uso

### Desarrollo Local
1. Clonar el repositorio
2. Servir con cualquier servidor HTTP:
   ```bash
   # Opción 1: Python
   python3 -m http.server 8000

   # Opción 2: PHP
   php -S localhost:8000

   # Opción 3: Node.js
   npx serve
   ```
3. Abrir `http://localhost:8000`

### Producción
1. **Configurar Google Analytics**: Reemplazar `G-XXXXXXXXXX` con tu ID real en [index.html:47](index.html#L47)
2. **Actualizar URLs**: Cambiar `nairoboom.github.io/curriculum/` por tu dominio
3. **Optimizar assets**: Minificar CSS/JS, comprimir imágenes
4. **HTTPS**: Obligatorio para PWA y Service Worker
5. Desplegar en hosting estático (GitHub Pages, Netlify, Vercel)

## Configuración

### Personalización de Contenido
Editar directamente en [assets/app.js](assets/app.js):
- `PROJECTS`: Array de proyectos (línea ~1100)
- `translations`: Objeto de traducciones ES/EN (línea ~50)
- `skillsData`: Habilidades y niveles (línea ~900)

### Cambiar Colores del Tema
En [index.html](index.html) script de Tailwind config:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          600: '#2563eb',  // Color primario
          // ... otros tonos
        }
      }
    }
  }
}
```

### Service Worker - Actualizar Cache
En [sw.js:2](sw.js#L2):
```javascript
const CACHE_NAME = 'nairo-portfolio-v2'; // Incrementar versión
```

## Accesibilidad

### Cumplimiento WCAG
- ✅ **Nivel A**: Totalmente compatible
- ✅ **Nivel AA**: Compatible en contraste y navegación
- ⚠️ **Nivel AAA**: Parcialmente compatible

### Navegación por Teclado
- `Tab`: Navegar entre elementos
- `Enter/Space`: Activar botones/enlaces
- `Esc`: Cerrar modales
- `←/→`: Navegar proyectos en modal
- `Shift+Tab`: Navegación inversa

### Screen Readers
Todos los elementos interactivos tienen labels adecuados vía:
- `aria-label` en botones de iconos
- `alt` text descriptivo en imágenes
- Estructura semántica HTML5

## Analytics y Tracking

### Eventos Personalizados
```javascript
// Rastrear apertura de proyecto
gtag('event', 'view_project', {
  project_name: 'Nombre del Proyecto',
  category: 'Projects'
});

// Rastrear descarga CV
gtag('event', 'download_cv', {
  method: 'print_dialog'
});
```

## Seguridad

### Buenas Prácticas Implementadas
- ✅ Código de bloqueo de DevTools **REMOVIDO** (era mala práctica)
- ✅ `referrerpolicy="no-referrer"` en Font Awesome
- ✅ `SameSite=None;Secure` en cookies de Analytics
- ✅ HTTPS requerido para PWA
- ✅ No hay inline scripts inseguros

## Próximas Mejoras Sugeridas

### Fase 1 - Performance Critical
1. Remover jQuery, migrar a Vanilla JS
2. Eliminar Redux (usar localStorage directo)
3. Implementar Tailwind local con PurgeCSS
4. Font Awesome subset (solo iconos usados)

### Fase 2 - Imágenes
1. Convertir imágenes a WebP con fallback
2. Responsive images (srcset, sizes)
3. Implementar image CDN (Cloudinary/ImageKit)

### Fase 3 - Funcionalidades
1. Blog/Case Studies section
2. Cookie Consent (GDPR compliance)
3. Contact form con backend (Formspree/Netlify Forms)
4. Animaciones avanzadas (parallax, morphing)

### Fase 4 - DevOps
1. CI/CD pipeline (GitHub Actions)
2. Lighthouse CI en PRs
3. Visual regression testing
4. Automated minification

## Licencia

© 2024 Nairo Samir Boom Vargas. Todos los derechos reservados.

## Contacto

- **Email**: nairoboom@example.com
- **LinkedIn**: [linkedin.com/in/nairoboom](https://linkedin.com/in/nairoboom)
- **GitHub**: [github.com/nairoboom](https://github.com/nairoboom)
- **Website**: [nairoboom.dev](https://nairoboom.dev)

---

**Versión**: 1.0.0
**Última actualización**: Octubre 2024
**Build**: Producción Ready ⚡
