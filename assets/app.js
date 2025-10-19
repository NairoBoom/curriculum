// assets/app.js

(function(){
  tailwind.config = {
    darkMode: 'class',
    theme: {
    extend: {
        fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
        colors: {
        brand: {
            50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
            400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
            800: '#1e40af', 900: '#1e3a8a'
        }
        },
        boxShadow: { soft: '0 10px 30px rgba(2,6,23,0.12)' }
    }
    }
  }
  const { createStore } = window.Redux;

  // --- Claves de storage
  const STORAGE = { THEME: 'theme', LANG: 'site_lang' };

  // --- i18n (incluye meta para <title> y <meta description>)
  const i18n = {
    es: {
      'meta.title':'Portafolio — Nairo Samir Boom Vargas',
      'meta.desc':'Portafolio detallado de Nairo Samir Boom Vargas — Desarrollador Fullstack (PrestaShop, PHP, Node.js, Angular, DevOps)',

      'ui.theme':'Tema','ui.talk':'Hablemos',
      'nav.about':'Acerca de','nav.experience':'Experiencia','nav.stack':'Stack','nav.services':'Servicios','nav.education':'Educación','nav.contact':'Contacto',
      'nav.ops':'Entrega & Operaciones','nav.projects':'Proyectos','nav.testimonials':'Testimonios',
      'testimonials.title':'Testimonios','testimonials.subtitle':'Lo que dicen quienes han trabajado conmigo',
      'filters.all':'Todos', 'filters.ecommerce':'E-commerce', 'filters.api':'APIs', 'filters.devops':'DevOps', 'filters.mobile':'Mobile',
      'modal.stack':'Stack Técnico', 'modal.highlights':'Highlights',
      'skills.proficiency':'Nivel de Dominio', 'skills.overview':'Vista General',
      'hero.role':'Desarrollador Fullstack',
      'hero.summary':'Especialista en <b>e-commerce</b> con foco en <b>PrestaShop 1.6/1.7</b>, back-end en <b>PHP</b>, <b>Node.js/NestJS</b>, <b>Golang</b>, <b>Python</b>, <b>C#</b>/.NET y front-end con <b>Angular</b>, <b>React</b> y <b>TypeScript</b>. Experiencia en <b>MySQL/PostgreSQL</b>, <b>Linux</b> (Nginx/Apache), <b>Ansible</b>, <b>Cloudflare</b> y apps híbridas con <b>Ionic</b>. Fuerte enfoque en colaboración interdisciplinaria, comunicación efectiva y liderazgo técnico dentro de equipos de desarrollo ágiles.',
      'cta.viewExp':'Ver experiencia', 'cta.contact':'Contactar', 'cta.downloadCV':'Descargar CV',
      'stats.years':'Años Exp.', 'stats.projects':'+ Proyectos', 'stats.tech':'+ Tecnologías',
      'sb.locationLabel':'Ubicación','sb.availabilityLabel':'Disponibilidad','sb.availability':'Remoto / Híbrido','sb.city':'Bogotá D.C., Colombia',
      'sb.bio':'Me enfoco en soluciones mantenibles, rendimiento medible y automatización útil. Disfruto trabajar en equipo, compartir conocimiento y apoyar la toma de decisiones técnicas. Documentación mínima pero suficiente para que cualquier dev avance sin fricción.',
      'about.title':'Acerca de mí',
      'about.body':'Soy desarrollador web y móvil con más de 8 años de experiencia. He trabajado en proyectos corporativos, tiendas online completas y apps híbridas. Fuerte en <b>PrestaShop</b>, sólido en back-end <b>PHP/Node.js/Golang</b> y front-end moderno. También administro <b>Linux</b> (Nginx/Apache), manejo bases de datos <b>MySQL/PostgreSQL</b> y orquesto despliegues con <b>Ansible</b>. Me gusta dejar las cosas mejor de como las encontré: refactors iterativos, medición de performance y seguridad sin fricción. Me motiva construir soluciones en colaboración con equipos diversos y orientados a objetivos comunes.',
      'exp.title':'Experiencia',
      'exp.senior.role':'Ingeniero de Desarrollo Web <b>Senior</b>',
      'exp.senior.date':'jun. 2024 – actualidad · Remoto (Bogotá)',
      'exp.senior.summary':'Desarrollo de <b>servicios y APIs</b> con <b>Go</b> y <b>NestJS</b>, refactor de módulos críticos (precios, stock, promociones), integraciones con servicios internos/terceros y mejoras de rendimiento a nivel de app, edge y base de datos. Trabajo en conjunto con equipos de producto, QA y diseño para mantener una comunicación fluida y una entrega continua sin fricciones.',
      'exp.senior.b1':'Endpoints REST con contratos estables, manejo de errores y observabilidad básica.',
      'exp.senior.b2':'Refactors incrementales que reducen deuda técnica y evitan regresiones.',
      'exp.senior.b3':'Optimización de latencia con caché, SQL tuning y paginaciones correctas.',
      'exp.senior.b4':'Code reviews, patrones consistentes y tests en zonas de riesgo.',
      'exp.senior.b5':'Despliegues reproducibles con métricas post-release.',
      'exp.semi.role':'Desarrollador Web <b>Semi Senior</b>',
      'exp.semi.date':'jun. 2019 – may. 2024 · Bogotá',
      'exp.semi.summary':'Desarrollo y mantenimiento de productos web end-to-end con foco en <b>PrestaShop</b>, performance, seguridad y automatización. Colaboración constante con equipos multidisciplinarios para lograr releases estables y escalables.',
      'exp.semi.b1':'Modelado/normalización de MySQL, índices, migraciones y backups.',
      'exp.semi.b2':'Validaciones y prevención <b>SQLi/XSS/CSRF</b>; roles y políticas.',
      'exp.semi.b3':'Integraciones con APIs (REST/SOAP) y documentación para terceros.',
      'exp.semi.b4':'Deploys repetibles con Ansible y tareas crónicas.',
      'exp.semi.b5':'Apps híbridas con Ionic, firma y entrega iOS con Xcode.',
      'exp.junior.role':'Desarrollador Web <b>Junior</b>',
      'exp.junior.date':'may. 2017 – jun. 2019 · Bogotá',
      'exp.junior.b1':'Soporte correctivo/evolutivo en módulos y sitios existentes.',
      'exp.junior.b2':'Maquetación, componentes UI y compatibilidad cross-browser.',
      'exp.junior.b3':'Integraciones puntuales de APIs con guía para equipos internos.',
      'exp.junior.b4':'Adopción de <b>PHP OOP</b>, Git-flow y buenas prácticas.',
      'exp.cdi.role':'Analista de Base de Datos / Dev Web',
      'exp.cdi.date':'mar. 2016 – may. 2017 · Bogotá',
      'exp.cdi.summary':'Desarrollo PHP orientado a objetos bajo patrón <b>MVC</b>, soporte SQL, paso a producción y acompañamiento funcional a usuarios. Participación activa en equipos colaborativos de desarrollo y soporte técnico.',
      'exp.cdi.b1':'Consultas SQL para diagnóstico, reportes y soporte a negocio.',
      'exp.cdi.b2':'Patrones (p.ej. <b>Singleton</b>) cuando aplicaba.',
      'exp.cdi.b3':'Checklists de release y validaciones previas a producción.',
      'exp.cdi.b4':'Documentación técnica breve de módulos e integraciones.',
      'stack.title':'Tech Stack',
      'stack.backend.title':'Back-end',
      'stack.frontend.title':'Front-end',
      'stack.ecom.title':'E-commerce',
      'stack.db.title':'Bases de datos',
      'stack.devops.title':'Infra & DevOps',
      'stack.sec.title':'Seguridad & Edge',
      'stack.mobile.title':'Mobile',
      'stack.api.title':'APIs',
      'services.title':'Servicios',
      'services.s1.title':'Tiendas PrestaShop','services.s1.desc':'Módulos a medida, performance, SEO técnico, integraciones de pago/envío, PUM y promociones.',
      'services.s2.title':'APIs & Servicios','services.s2.desc':'REST/SOAP en Node.js/NestJS o Go, documentación clara y manejo de errores.',
      'services.s3.title':'Bases de Datos','services.s3.desc':'Modelado, índices, afinamiento de consultas y planes de backup.',
      'services.s4.title':'Infra y Automatización','services.s4.desc':'VPS Linux, Nginx/Apache, Ansible, Cloudflare, pipelines de despliegue.',
      'edu.title':'Educación & Certificaciones',
      'edu.l1':'<b>UNIMINUTO</b> — Ingeniería de Sistemas (2017–2023)',
      'edu.l2':'<b>UNIMINUTO</b> — Diplomado SecDevOps (2023)',
      'edu.l3':'<b>AWS Academy</b> — Cloud Foundations (2023)',
      'edu.l4':'<b>DevNet Associate</b> (2023)',
      'edu.l5':'<b>UNIMINUTO</b> — Tecnología en Informática (2011–2014)',
      'edu.l6':'<b>UNIMINUTO</b> — Diplomado Telecomunicaciones Móviles (2014)',
      'contact.title':'Contacto','contact.desc':'Envíame un correo, llámame o escríbeme al WhatsApp.',
      'contact.copy':'Copiar e-mail','contact.copied':'¡Copiado!','contact.write':'Escribir correo','contact.whatsapp':'WhatsApp',
      'form.name':'Nombre','form.email':'Correo','form.message':'Mensaje','form.send':'Enviar',
      'form.name_ph':'Tu nombre','form.email_ph':'tucorreo@dominio.com','form.message_ph':'Cuéntame brevemente sobre tu proyecto',
      'form.sending':'Enviando…','form.ok':'¡Gracias! Me pondré en contacto pronto.','form.fail':'No se pudo enviar. Intenta de nuevo.','form.net':'Error de red. Intenta nuevamente.',
      'form.subject':'Nuevo mensaje desde el portafolio',
      'footer.role':'Desarrollador Fullstack','footer.top':'Volver arriba',
      // OPS
      'ops.title':'Entrega & Operaciones',
      'ops.intro':'Flujo completo desde ramas locales hasta producción, con QA formal, CI/CD automatizado, aprovisionamiento reproducible y medidas de seguridad/observabilidad.',
      'ops.flow.title':'Flujo de trabajo con Git',
      'ops.flow.i1':'Ramas locales por feature/bugfix con convenciones de nombres y commits semánticos.',
      'ops.flow.i2':'Pull Requests con checklist (linter, unit tests, revisión de seguridad y performance).',
      'ops.flow.i3':'Merge hacia test para validación integral y pruebas exploratorias.',
      'ops.flow.i4':'Release branches con versionado semántico y changelog generado.',
      'ops.flow.i5':'Merge protegido a main/prod con revisores requeridos.',
      'ops.qa.title':'QA & Lanzamientos',
      'ops.qa.i1':'Plan de pruebas: unitarias, integración, e2e y smoke en staging.',
      'ops.qa.i2':'Validación funcional/UX y pruebas de regresión sobre módulos críticos.',
      'ops.qa.i3':'Aprobación QA con criterios de aceptación claros y tickets enlazados.',
      'ops.qa.i4':'Canary/blue-green cuando aplica para minimizar riesgo.',
      'ops.qa.i5':'Ventana de despliegue + monitoreo post-release y plan de rollback.',
      'ops.cicd.title':'CI/CD',
      'ops.cicd.i1':'Pipelines con lint, tests, build, auditoría de dependencias y artefactos versionados.',
      'ops.cicd.i2':'Despliegues a test/staging automáticos; producción bajo aprobaciones.',
      'ops.cicd.i3':'Env vars/secretos por entorno (vault/secret manager) y plantillas de config.',
      'ops.cicd.i4':'Migraciones de DB orquestadas y verificación de salud (healthchecks).',
      'ops.cicd.i5':'Notificaciones a Slack/Email con resumen de release y métricas.',
      'ops.prov.title':'Aprovisionamiento (Debian/CentOS)',
      'ops.prov.i1':'Roles Ansible para Nginx/Apache, PHP-FPM, Node.js/NestJS, Python, Go.',
      'ops.prov.i2':'Módulos PrestaShop y PHP con extensiones (pdo_mysql, intl, gd, curl, opcache).',
      'ops.prov.i3':'Systemd services, logrotate, límites de recursos y tuning (worker_processes, FPM pm).',
      'ops.prov.i4':'MySQL/PostgreSQL: usuarios, backups, índices y parámetros (InnoDB, work_mem).',
      'ops.prov.i5':'TLS con ACME/Let’s Encrypt, HTTP/2, compresión y caché en edge.',
      'ops.net.title':'Red y accesos',
      'ops.net.i1':'VPN WireGuard/OpenVPN para entornos y proveedores.',
      'ops.net.i2':'Bastion/jump host; acceso SSH con llaves y MFA.',
      'ops.net.i3':'Enjaulados/chroot para integraciones de terceros con mínimos privilegios.',
      'ops.net.i4':'Firewall (UFW/Firewalld), Fail2ban y listas de acceso por IP/CIDR.',
      'ops.net.i5':'Cloudflare (DNS, WAF, Rate Limiting, reglas de caché).',
      'ops.obs.title':'Observabilidad & Resiliencia',
      'ops.obs.i1':'Métricas y alertas (Prometheus/Grafana) + logs centralizados (ELK/Opensearch).',
      'ops.obs.i2':'Trazas y APM en endpoints críticos (latencia, errores, throughput).',
      'ops.obs.i3':'Backups programados (Borg/Restic), verificación y restauraciones de prueba.',
      'ops.obs.i4':'SLO/SLI básicos y prácticas de postmortem sin culpa.',
      'ops.obs.i5':'Endurecimiento: SSH, mínimos privilegios, rotación de secretos.',
      'projects.title':'Proyectos Destacados',
      'projects.subtitle':'Selección de trabajos con impacto medible: rendimiento, fiabilidad, automatización y experiencia de usuario.'
    },
    en: {
      'meta.title':'Portfolio — Nairo Samir Boom Vargas',
      'meta.desc':'Detailed portfolio of Nairo Samir Boom Vargas — Full-stack Developer (PrestaShop, PHP, Node.js, Angular, DevOps)',

      'ui.theme':'Theme','ui.talk':'Let\'s talk',
      'nav.about':'About','nav.experience':'Experience','nav.stack':'Stack','nav.services':'Services','nav.education':'Education','nav.contact':'Contact',
      'nav.ops':'Delivery & Operations','nav.projects':'Projects','nav.testimonials':'Testimonials',
      'testimonials.title':'Testimonials','testimonials.subtitle':'What people I have worked with say',
      'filters.all':'All', 'filters.ecommerce':'E-commerce', 'filters.api':'APIs', 'filters.devops':'DevOps', 'filters.mobile':'Mobile',
      'modal.stack':'Tech Stack', 'modal.highlights':'Highlights',
      'skills.proficiency':'Proficiency Level', 'skills.overview':'Overview',
      'hero.role':'Full-stack Developer',
      'hero.summary':'E-commerce specialist focused on <b>PrestaShop 1.6/1.7</b>, back end with <b>PHP</b>, <b>Node.js/NestJS</b>, <b>Golang</b>, <b>Python</b>, <b>C#</b>/.NET and front end with <b>Angular</b>, <b>React</b> and <b>TypeScript</b>. Experience with <b>MySQL/PostgreSQL</b>, <b>Linux</b> (Nginx/Apache), <b>Ansible</b>, <b>Cloudflare</b> and hybrid apps with <b>Ionic</b>. Strong believer in teamwork, cross-functional collaboration and technical leadership within agile teams.',
      'cta.viewExp':'View experience', 'cta.contact':'Contact', 'cta.downloadCV':'Download CV',
      'stats.years':'Years Exp.', 'stats.projects':'+ Projects', 'stats.tech':'+ Technologies',
      'sb.locationLabel':'Location','sb.availabilityLabel':'Availability','sb.availability':'Remote / Hybrid','sb.city':'Bogotá D.C., Colombia',
      'sb.bio':'I focus on maintainable solutions, measurable performance and practical automation. I value teamwork, shared learning and clear communication. Minimal but sufficient docs so any dev can move fast.',
      'about.title':'About me',
      'about.body':'I am a web and mobile developer with 8+ years of experience. I have worked on corporate projects, full online stores and hybrid apps. Strong in <b>PrestaShop</b>, solid back end in <b>PHP/Node.js/Golang</b>, and modern front end. I also administer <b>Linux</b> (Nginx/Apache), handle <b>MySQL/PostgreSQL</b> and orchestrate deployments with <b>Ansible</b>. I enjoy collaborating with diverse teams to build reliable, scalable and meaningful solutions.',
      'exp.title':'Experience',
      'exp.senior.role':'<b>Senior</b> Web Development Engineer',
      'exp.senior.date':'Jun 2024 – present · Remote (Bogotá)',
      'exp.senior.summary':'Development of <b>services and APIs</b> with <b>Go</b> and <b>NestJS</b>, refactor of critical modules (pricing, stock, promotions), integrations with internal/third-party services, and performance improvements at app/edge/database levels. Active coordination with product, QA and design teams to ensure seamless delivery.',
      'exp.senior.b1':'REST endpoints with stable contracts, error handling and basic observability.',
      'exp.senior.b2':'Incremental refactors that reduce tech debt and prevent regressions.',
      'exp.senior.b3':'Latency optimization with caching, SQL tuning and correct pagination.',
      'exp.senior.b4':'Code reviews, consistent patterns and tests in risk areas.',
      'exp.senior.b5':'Reproducible deployments with post-release metrics.',
      'exp.semi.role':'<b>Semi-Senior</b> Web Developer',
      'exp.semi.date':'Jun 2019 – May 2024 · Bogotá',
      'exp.semi.summary':'End-to-end web product development and maintenance focused on <b>PrestaShop</b>, performance, security and automation. Constant collaboration with multidisciplinary teams to achieve stable and scalable releases.',
      'exp.semi.b1':'MySQL modeling/normalization, indexes, migrations and backups.',
      'exp.semi.b2':'Validations and <b>SQLi/XSS/CSRF</b> prevention; roles and policies.',
      'exp.semi.b3':'API integrations (REST/SOAP) and documentation for third parties.',
      'exp.semi.b4':'Repeatable deployments with Ansible and scheduled tasks.',
      'exp.semi.b5':'Hybrid apps with Ionic, iOS signing and delivery with Xcode.',
      'exp.junior.role':'<b>Junior</b> Web Developer',
      'exp.junior.date':'May 2017 – Jun 2019 · Bogotá',
      'exp.junior.b1':'Bugfixing/evolutionary support in existing modules and sites.',
      'exp.junior.b2':'Markup, UI components and cross-browser compatibility.',
      'exp.junior.b3':'Targeted API integrations with guidance for internal teams.',
      'exp.junior.b4':'Adoption of <b>PHP OOP</b>, Git-flow and best practices.',
      'exp.cdi.role':'Database Analyst / Web Dev',
      'exp.cdi.date':'Mar 2016 – May 2017 · Bogotá',
      'exp.cdi.summary':'Object-oriented PHP development under <b>MVC</b>, SQL support, production releases and functional assistance to users. Active participation in collaborative development and technical support teams.',
      'exp.cdi.b1':'SQL queries for diagnostics, reporting and business support.',
      'exp.cdi.b2':'Patterns (e.g., <b>Singleton</b>) where applicable.',
      'exp.cdi.b3':'Release checklists and pre-production validations.',
      'exp.cdi.b4':'Concise technical docs for modules and integrations.',
      'stack.title':'Tech Stack',
      'stack.backend.title':'Back-end',
      'stack.frontend.title':'Front-end',
      'stack.ecom.title':'E-commerce',
      'stack.db.title':'Databases',
      'stack.devops.title':'Infra & DevOps',
      'stack.sec.title':'Security & Edge',
      'stack.mobile.title':'Mobile',
      'stack.api.title':'APIs',
      'services.title':'Services',
      'services.s1.title':'PrestaShop Stores','services.s1.desc':'Custom modules, performance, technical SEO, payments/shipping integrations, PUM and promotions.',
      'services.s2.title':'APIs & Services','services.s2.desc':'REST/SOAP in Node.js/NestJS or Go, clear documentation and error handling.',
      'services.s3.title':'Databases','services.s3.desc':'Modeling, indexes, query tuning and backup plans.',
      'services.s4.title':'Infra & Automation','services.s4.desc':'Linux VPS, Nginx/Apache, Ansible, Cloudflare, deployment pipelines.',
      'edu.title':'Education & Certifications',
      'edu.l1':'<b>UNIMINUTO</b> — Systems Engineering (2017–2023)',
      'edu.l2':'<b>UNIMINUTO</b> — SecDevOps Diploma (2023)',
      'edu.l3':'<b>AWS Academy</b> — Cloud Foundations (2023)',
      'edu.l4':'<b>DevNet Associate</b> (2023)',
      'edu.l5':'<b>UNIMINUTO</b> — IT Technology (2011–2014)',
      'edu.l6':'<b>UNIMINUTO</b> — Mobile Telecommunications Diploma (2014)',
      'contact.title':'Contact','contact.desc':'Email me, call me, or message me on WhatsApp.',
      'contact.copy':'Copy e-mail','contact.copied':'Copied!','contact.write':'Send e-mail','contact.whatsapp':'WhatsApp',
      'form.name':'Name','form.email':'E-mail','form.message':'Message','form.send':'Send',
      'form.name_ph':'Your name','form.email_ph':'you@example.com','form.message_ph':'Tell me briefly about your project',
      'form.sending':'Sending…','form.ok':'Thanks! I will contact you soon.','form.fail':'Could not send. Please try again.','form.net':'Network error. Please try again.',
      'form.subject':'New message from portfolio',
      'footer.role':'Full-stack Developer','footer.top':'Back to top',
      'ops.title':'Delivery & Operations',
      'ops.intro':'End-to-end flow from local branches to production, with formal QA, automated CI/CD, reproducible provisioning and solid security/observability.',
      'ops.flow.title':'Git workflow',
      'ops.flow.i1':'Feature/bugfix local branches with naming conventions and semantic commits.',
      'ops.flow.i2':'Pull Requests with checklist (linter, unit tests, security and performance review).',
      'ops.flow.i3':'Merge to test for integrated validation and exploratory tests.',
      'ops.flow.i4':'Release branches using semantic versioning and generated changelog.',
      'ops.flow.i5':'Protected merge to main/prod with required reviewers.',
      'ops.qa.title':'QA & Releases',
      'ops.qa.i1':'Test plan: unit, integration, e2e and smoke in staging.',
      'ops.qa.i2':'Functional/UX validation and regression tests on critical modules.',
      'ops.qa.i3':'QA approval with clear acceptance criteria and linked tickets.',
      'ops.qa.i4':'Canary/blue-green when applicable to minimize risk.',
      'ops.qa.i5':'Deployment window + post-release monitoring and rollback plan.',
      'ops.cicd.title':'CI/CD',
      'ops.cicd.i1':'Pipelines with lint, tests, build, dependency audit and versioned artifacts.',
      'ops.cicd.i2':'Automatic deployments to test/staging; production requires approvals.',
      'ops.cicd.i3':'Per-environment env vars/secrets (vault/secret manager) and config templates.',
      'ops.cicd.i4':'Orchestrated DB migrations and health checks.',
      'ops.cicd.i5':'Slack/Email notifications with release summary and metrics.',
      'ops.prov.title':'Provisioning (Debian/CentOS)',
      'ops.prov.i1':'Ansible roles for Nginx/Apache, PHP-FPM, Node.js/NestJS, Python, Go.',
      'ops.prov.i2':'PrestaShop/PHP modules and extensions (pdo_mysql, intl, gd, curl, opcache).',
      'ops.prov.i3':'Systemd services, logrotate, resource limits and tuning (worker_processes, FPM pm).',
      'ops.prov.i4':'MySQL/PostgreSQL: users, backups, indexes and params (InnoDB, work_mem).',
      'ops.prov.i5':'TLS via ACME/Let’s Encrypt, HTTP/2, compression and edge caching.',
      'ops.net.title':'Network & Access',
      'ops.net.i1':'WireGuard/OpenVPN for environments and vendors.',
      'ops.net.i2':'Bastion/jump host; SSH key-based access with MFA.',
      'ops.net.i3':'Chroot/jails for third-party integrations with least privilege.',
      'ops.net.i4':'Firewall (UFW/Firewalld), Fail2ban and IP/CIDR allowlists.',
      'ops.net.i5':'Cloudflare (DNS, WAF, Rate Limiting, cache rules).',
      'ops.obs.title':'Observability & Resilience',
      'ops.obs.i1':'Metrics & alerts (Prometheus/Grafana) + central logs (ELK/Opensearch).',
      'ops.obs.i2':'Tracing and APM on critical endpoints (latency, errors, throughput).',
      'ops.obs.i3':'Scheduled backups (Borg/Restic), verification and test restores.',
      'ops.obs.i4':'Basic SLO/SLI and blameless postmortems.',
      'ops.obs.i5':'Hardening: SSH, least privilege, secret rotation.',
      'projects.title':'Featured Projects',
      'projects.subtitle':'A selection of work with measurable impact: performance, reliability, automation and UX.'
    }
  };

    // Dataset de proyectos (contenido bilingüe dentro del dataset)
  const PROJECTS = {
    es: [
      {
        id:'promos',
        company:'Farmalisto',
        role:'Backend / E-commerce',
        period:'2022–2024',
        title:'Motor de promociones y cupones escalable',
        img:'img/proyectos/promos.jpg',
        icon: 'fa-solid fa-percent',
        categories: ['ecommerce', 'api'],
        stack:[
          { icon:'fa-brands fa-php',     name:'PHP/Symfony' },
          { icon:'fa-solid fa-database', name:'MySQL' },
          { icon:'fa-solid fa-store',    name:'PrestaShop' },
          { icon:'fa-solid fa-gauge',    name:'Redis' }
        ],
        kpis:[
          { val:'-42%', lbl:'Tiempo cálculo carrito' },
          { val:'+18%', lbl:'Conversión promo' },
          { val:'<50ms', lbl:'p95 endpoint reglas' }
        ],
        bullets:[
          'Reglas combinables (mix & match), excepciones, multimoneda y multi-país.',
          'AB testing en promociones y reporte de uplift.',
          'Observabilidad: métricas, trazas y alertas de caídas o anomalías.'
        ]
      },
      {
        id:'price-stock-api',
        company:'Farmalisto',
        role:'Go/NestJS',
        period:'2021–2024',
        title:'API de precios y disponibilidad de baja latencia',
        img:'img/proyectos/priceapi.webp',
        icon: 'fa-solid fa-tag',
        categories: ['api', 'ecommerce'],
        stack:[
          { icon:'fa-solid fa-code',     name:'Go' },
          { icon:'fa-brands fa-node',    name:'NestJS' },
          { icon:'fa-solid fa-database', name:'MySQL' },
          { icon:'fa-solid fa-cloud',    name:'Cloudflare' }
        ],
        kpis:[
          { val:'-54%', lbl:'p95 latencia (120→55ms)' },
          { val:'83%',  lbl:'Tasa de aciertos caché' },
          { val:'0',    lbl:'Errores post-release críticos' }
        ],
        bullets:[
          'Contratos estables, versionado y manejo de errores consistente.',
          'Cacheo en edge y políticas de invalidación por evento.',
          'Pruebas de carga y canary para releases de riesgo.'
        ]
      },
      {
        id:'prestashop-mig',
        company:'Farmalisto',
        role:'PHP/PrestaShop',
        period:'2021–2022',
        title:'Migración PrestaShop 1.6 → 1.7 sin downtime',
        img:'img/proyectos/migracion.png',
        icon: 'fa-solid fa-cart-shopping',
        categories: ['ecommerce', 'devops'],
        stack:[
          { icon:'fa-brands fa-php',  name:'PHP' },
          { icon:'fa-solid fa-store', name:'PrestaShop 1.7' },
          { icon:'fa-solid fa-server',name:'Nginx' },
          { icon:'fa-solid fa-cloud', name:'Cloudflare' },
        ],
        kpis:[
          { val:'+12%', lbl:'Tráfico orgánico' },
          { val:'-35%', lbl:'TTFB promedio' },
          { val:'0',    lbl:'Pérdida de SEO crítico' }
        ],
        bullets:[
          'Plan de redirecciones 301 y auditoría de SEO técnico.',
          'Tests funcionales de checkout, promociones y catálogos.',
          'Rollback plan validado y ventanas de despliegue cuidadas.'
        ]
      },
      {
        id:'ansible-multi',
        company:'Multi-entorno',
        role:'DevOps',
        period:'2017–2024',
        title:'Aprovisionamiento reproducible (Debian/CentOS) con Ansible',
        img:'img/proyectos/ansible.png',
        icon: 'fa-brands fa-linux',
        categories: ['devops'],
        stack:[
          { icon:'fa-brands fa-linux', name:'Ansible' },
          { icon:'fa-solid fa-server',   name:'Nginx/Apache' },
          { icon:'fa-brands fa-php',     name:'PHP-FPM' },
          { icon:'fa-brands fa-node',    name:'Node.js' },
          { icon:'fa-brands fa-database',    name:'MariaDb' },
        ],
        kpis:[
          { val:'-70%', lbl:'Tiempo de provisioning' },
          { val:'100%', lbl:'Entornos consistentes' },
          { val:'<15m', lbl:'MTTR por reprovisionar' }
        ],
        bullets:[
          'Roles para web/app/db, TLS, logrotate y healthchecks.',
          'Backups automatizados y restores de prueba programados.',
          'WAF/Firewall, SSH hardening y mínimos privilegios.'
        ]
      },
      {
        id:'ionic-ios',
        company:'Interno',
        role:'Mobile',
        period:'2017–2021',
        title:'App híbrida (Ionic + Capacitor) y entrega iOS, App Nativa - React ',
        img:'img/proyectos/ionic.png',
        icon: 'fa-solid fa-mobile-screen-button',
        categories: ['mobile'],
        stack:[
          { icon:'fa-solid fa-mobile-screen-button', name:'Ionic/Capacitor' },
          { icon:'fa-brands fa-apple',               name:'Xcode/iOS' },
          { icon:'fa-brands fa-angular',             name:'Angular' },
          { icon:'fa-brands fa-react',               name:'React' },
        ],
        kpis:[
          { val:'<2s',  lbl:'Time-to-interactive' },
          { val:'>99%', lbl:'Crash-free sessions' },
          { val:'+9%',  lbl:'Retención mensual' }
        ],
        bullets:[
          'Autenticación, carrito y notificaciones push.',
          'Flujos offline y sincronización en background.',
          'Firma, provisioning profile y publicación en App Store.'
        ]
      }
    ],
    en: [
      {
        id:'promos',
        company:'Farmalisto',
        role:'Backend / E-commerce',
        period:'2022–2024',
        title:'Scalable promotions & coupons engine',
        img:'img/proyectos/promos.jpg',
        icon: 'fa-solid fa-percent',
        categories: ['ecommerce', 'api'],
        stack:[
          { icon:'fa-brands fa-php',     name:'PHP/Symfony' },
          { icon:'fa-solid fa-database', name:'MySQL' },
          { icon:'fa-solid fa-store',    name:'PrestaShop' },
          { icon:'fa-solid fa-gauge',    name:'Redis' }
        ],
        kpis:[
          { val:'-42%', lbl:'Cart calc time' },
          { val:'+18%', lbl:'Promo conversion' },
          { val:'<50ms', lbl:'p95 rules endpoint' }
        ],
        bullets:[
          'Composable rules, exceptions, multi-currency and multi-country.',
          'Promo A/B testing and uplift reporting.',
          'Observability with metrics, tracing and alerts.'
        ]
      },
      {
        id:'price-stock-api',
        company:'Farmalisto',
        role:'Go/NestJS',
        period:'2021–2024',
        title:'Low-latency price & availability API',
        img:'img/proyectos/priceapi.webp',
        icon: 'fa-solid fa-tag',
        stack:[
          { icon:'fa-solid fa-code',     name:'Go' },
          { icon:'fa-brands fa-node',    name:'NestJS' },
          { icon:'fa-solid fa-database', name:'MySQL' },
          { icon:'fa-solid fa-cloud',    name:'Cloudflare' }
        ],
        kpis:[
          { val:'-54%', lbl:'p95 latency (120→55ms)' },
          { val:'83%',  lbl:'Cache hit rate' },
          { val:'0',    lbl:'Critical post-release errors' }
        ],
        bullets:[
          'Stable contracts, versioning and consistent error handling.',
          'Edge caching and event-driven invalidation.',
          'Load testing and canary for risky releases.'
        ]
      },
      {
        id:'prestashop-mig',
        company:'Farmalisto',
        role:'PHP/PrestaShop',
        period:'2021–2022',
        title:'PrestaShop 1.6 → 1.7 migration (zero downtime)',
        img:'img/proyectos/migracion.png',
        icon: 'fa-solid fa-cart-shopping',
        stack:[
          { icon:'fa-brands fa-php',  name:'PHP' },
          { icon:'fa-solid fa-store', name:'PrestaShop 1.7' },
          { icon:'fa-solid fa-server',name:'Nginx' },
          { icon:'fa-solid fa-cloud', name:'Cloudflare' }
        ],
        kpis:[
          { val:'+12%', lbl:'Organic traffic' },
          { val:'-35%', lbl:'Avg TTFB' },
          { val:'0',    lbl:'Critical SEO loss' }
        ],
        bullets:[
          '301 plan and technical SEO audit.',
          'Functional tests on checkout, promos and catalogs.',
          'Validated rollback and careful deployment windows.'
        ]
      },
      {
        id:'ansible-multi',
        company:'Multi-env',
        role:'DevOps',
        period:'2017–2024',
        title:'Reproducible provisioning (Debian/CentOS) with Ansible',
        img:'img/proyectos/ansible.png',
        icon: 'fa-brands fa-linux',
        stack:[
          { icon:'fa-brands fa-linux', name:'Ansible' },
          { icon:'fa-solid fa-server',   name:'Nginx/Apache' },
          { icon:'fa-brands fa-php',     name:'PHP-FPM' },
          { icon:'fa-brands fa-node',    name:'Node.js' },
          { icon:'fa-brands fa-database',    name:'MariaDb' },
        ],
        kpis:[
          { val:'-70%', lbl:'Provisioning time' },
          { val:'100%', lbl:'Consistent envs' },
          { val:'<15m', lbl:'MTTR by reprovision' }
        ],
        bullets:[
          'Roles for web/app/db, TLS, logrotate and healthchecks.',
          'Automated backups and scheduled test restores.',
          'WAF/Firewall, SSH hardening and least privilege.'
        ]
      },
      {
        id:'ionic-ios',
        company:'Internal',
        role:'Mobile',
        period:'2017–2025',
        title:'Hybrid app (Ionic + Capacitor) and iOS delivery, Native App - React ',
        img:'img/proyectos/ionic.png',
        icon: 'fa-solid fa-mobile-screen-button',
        stack:[
          { icon:'fa-solid fa-mobile-screen-button', name:'Ionic/Capacitor' },
          { icon:'fa-brands fa-apple',               name:'Xcode/iOS' },
          { icon:'fa-brands fa-angular',             name:'Angular' },
          { icon:'fa-brands fa-react',               name:'React' },
        ],
        kpis:[
          { val:'<2s',  lbl:'Time-to-interactive' },
          { val:'>99%', lbl:'Crash-free sessions' },
          { val:'+9%',  lbl:'Monthly retention' }
        ],
        bullets:[
          'Auth, cart and push notifications.',
          'Offline flows and background sync.',
          'Signing, provisioning and App Store delivery.'
        ]
      }
    ]
  };

  // Helpers i18n
  const t = (key, lang) => (i18n[lang] && i18n[lang][key]) || i18n.es[key] || key;

  // --- Estado inicial
  const initialState = {
    theme: (localStorage.getItem(STORAGE.THEME) === 'dark') ? 'dark' : 'light',
    lang : localStorage.getItem(STORAGE.LANG) || 'es',
    form : { status: 'idle', message: '' },
    nowYear: new Date().getFullYear()
  };

  // --- Actions
  const SET_THEME = 'SET_THEME';
  const SET_LANG  = 'SET_LANG';
  const FORM_STATUS = 'FORM_STATUS';

  // --- Reducer
  function reducer(state = initialState, action){
    switch(action.type){
      case SET_THEME:
        return { ...state, theme: action.payload };
      case SET_LANG:
        return { ...state, lang: action.payload };
      case FORM_STATUS:
        return { ...state, form: { status: action.payload.status, message: action.payload.message || '' } };
      default:
        return state;
    }
  }

  // --- Store
  const store = createStore(reducer);

  // --- Renderers
  function applyThemeDOM(theme, prevTheme){
    const root = document.documentElement;
    const body = document.body;
    const animate = !!prevTheme && prevTheme !== theme;

    if (theme === 'dark') {
      root.classList.add('dark');
      if (animate){ body.classList.add('theming-dark'); setTimeout(()=> body.classList.remove('theming-dark'), 900); }
    } else {
      root.classList.remove('dark');
      if (animate){ body.classList.add('theming-light'); setTimeout(()=> body.classList.remove('theming-light'), 900); }
    }
    try { localStorage.setItem(STORAGE.THEME, theme); } catch(e){}
  }

  function translateDOM(lang){
    // Botón idioma
    const btnLang = document.getElementById('lang-toggle');
    if (btnLang) btnLang.textContent = lang.toUpperCase();

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key, lang);
      if (val) el.innerHTML = val;
    });

    // Attributes (placeholder, title, value, aria-label, etc.)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const map = el.getAttribute('data-i18n-attr').split('|');
      map.forEach(pair => {
        const [attr, key] = pair.split(':');
        if (!attr || !key) return;
        const val = t(key.trim(), lang);
        if (val) el.setAttribute(attr.trim(), val);
      });
    });

    // <title> y <meta description> + lang del <html>
    document.title = t('meta.title', lang);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.desc', lang));
    document.documentElement.setAttribute('lang', lang);

    try { localStorage.setItem(STORAGE.LANG, lang); } catch(e){}
  }

  function renderProjects(lang){
      const list = PROJECTS[lang] || PROJECTS.es;
      const grid = document.getElementById('projects-grid');
      if (!grid) return;

      const card = (p) => {
        const chips = p.stack.map(s => `
          <span class="chip"><i class="${s.icon}"></i>${s.name}</span>
        `).join('');

        const kpis = p.kpis.map(k => `
          <div class="kpi bg-white/70 dark:bg-slate-900/60">
            <div class="val">${k.val}</div>
            <div class="lbl">${k.lbl}</div>
          </div>
        `).join('');

        const bullets = p.bullets.map(b => `<li>${b}</li>`).join('');

        const categories = (p.categories || []).join(' ');
        return `
          <article class="project-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden card-hover flex flex-col" data-categories="${categories}" data-project-id="${p.id}">
            <div class="relative h-40 bg-gradient-to-tr from-brand-100 to-cyan-100 dark:from-slate-800 dark:to-slate-700 grid place-items-center">
              <i class="${p.icon || 'fa-solid fa-briefcase'} text-6xl md:text-7xl text-brand-700 dark:text-brand-300 project-icon" aria-hidden="true"></i>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <div class="flex items-center justify-between gap-2">
                <h3 class="font-bold text-slate-900 dark:text-white">${p.title}</h3>
                <span class="text-xs px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">${p.period}</span>
              </div>
              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">${p.company} · ${p.role}</p>

              <div class="mt-3 chips">${chips}</div>

              <div class="mt-4 grid grid-cols-3 gap-2">${kpis}</div>

              <ul class="mt-4 list-disc pl-5 text-sm text-slate-700 dark:text-slate-200">${bullets}</ul>
            </div>
          </article>
        `;
      };

      grid.innerHTML = list.map(card).join('');

      // Fallback si la imagen no existe: ocultamos <img> y dejamos el gradiente
      grid.querySelectorAll('img.project-img').forEach(img => {
        img.onerror = () => { img.remove(); };
      });
    }

  function render(prevState){
    const state = store.getState();

    // Año
    const y = document.getElementById('year');
    if (y) y.textContent = state.nowYear;

    // Tema
    if (!prevState || prevState.theme !== state.theme){
      applyThemeDOM(state.theme, prevState && prevState.theme);
      renderProjects(state.lang);
    }

    // Idioma
    if (!prevState || prevState.lang !== state.lang){
      translateDOM(state.lang);
    }

    // Form status (solo ajustamos botón si está en envío)
    if (state.form.status === 'sending'){
      const btn = document.querySelector('#form-contacto button[type="submit"]');
      if (btn) btn.textContent = t('form.sending', state.lang);
    }
  }

  // --- Suscripción de render
  let prevState = null;
  store.subscribe(() => {
    const ps = prevState;
    prevState = store.getState();
    render(ps);
  });

  // --- Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('ServiceWorker registered:', registration.scope);
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed:', error);
        });
    });
  }

  // --- Eventos DOM
  $(function(){
    // Render inicial
    prevState = store.getState();
    render(null);

    // Mobile menu toggle
    $('#mobile-menu-toggle').on('click', function(){
      const $menu = $('#mobile-menu');
      const $icon = $(this).find('i');
      const isExpanded = $(this).attr('aria-expanded') === 'true';

      $menu.toggleClass('hidden');
      $(this).attr('aria-expanded', !isExpanded);

      if ($icon.hasClass('fa-bars')) {
        $icon.removeClass('fa-bars').addClass('fa-times');
      } else {
        $icon.removeClass('fa-times').addClass('fa-bars');
      }
    });

    // Close mobile menu when clicking a link
    $('#mobile-menu a').on('click', function(){
      $('#mobile-menu').addClass('hidden');
      $('#mobile-menu-toggle').attr('aria-expanded', 'false');
      $('#mobile-menu-toggle i').removeClass('fa-times').addClass('fa-bars');
    });

    // Scroll progress indicator
    $(window).on('scroll', function(){
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      $('#scroll-progress').css('width', scrolled + '%');
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // Custom Cursor (Desktop only)
    if (window.innerWidth > 768) {
      const cursorDot = document.getElementById('cursor-dot');
      const cursorOutline = document.getElementById('cursor-outline');

      let mouseX = 0, mouseY = 0;
      let outlineX = 0, outlineY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
        cursorDot.classList.add('active');
        cursorOutline.classList.add('active');
      });

      // Smooth follow for outline
      function animateCursor() {
        const distX = mouseX - outlineX;
        const distY = mouseY - outlineY;

        outlineX += distX * 0.1;
        outlineY += distY * 0.1;

        cursorOutline.style.left = (outlineX - 16) + 'px';
        cursorOutline.style.top = (outlineY - 16) + 'px';

        requestAnimationFrame(animateCursor);
      }
      animateCursor();

      // Hover effects
      const hoverElements = document.querySelectorAll('a, button, .card-hover, .project-card, .filter-btn');
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorOutline.classList.add('hover');
          cursorDot.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
          cursorOutline.classList.remove('hover');
          cursorDot.style.transform = 'scale(1)';
        });
      });
    }

    // Animated Grid Background - Enhanced Particle System
    function initParticleCanvas(canvasId, options = {}) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;

      const {
        particleDensity = 15000,
        maxParticles = 80,
        connectionDistance = 120,
        mouseRadius = 150,
        particleOpacity = 0.9
      } = options;

      const ctx = canvas.getContext('2d');
      let width = canvas.width = canvas.offsetWidth;
      let height = canvas.height = canvas.offsetHeight;

      // Mouse position tracking for interaction
      let mouse = {
        x: null,
        y: null,
        radius: mouseRadius
      };

      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
      });

      const resizeHandler = () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        initParticles();
      };

      window.addEventListener('resize', resizeHandler);

      // Particle class
      class Particle {
        constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.radius = Math.random() * 2 + 1;
          this.originalVx = this.vx;
          this.originalVy = this.vy;
        }

        update() {
          // Mouse interaction
          if (mouse.x != null && mouse.y != null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
              const force = (mouse.radius - distance) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              this.vx += Math.cos(angle) * force * 0.2;
              this.vy += Math.sin(angle) * force * 0.2;
            }
          }

          // Apply friction to gradually return to original velocity
          this.vx += (this.originalVx - this.vx) * 0.05;
          this.vy += (this.originalVy - this.vy) * 0.05;

          // Update position
          this.x += this.vx;
          this.y += this.vy;

          // Bounce off edges
          if (this.x < 0 || this.x > width) {
            this.vx *= -1;
            this.originalVx *= -1;
            this.x = Math.max(0, Math.min(width, this.x));
          }
          if (this.y < 0 || this.y > height) {
            this.vy *= -1;
            this.originalVy *= -1;
            this.y = Math.max(0, Math.min(height, this.y));
          }
        }

        draw() {
          const isDark = document.documentElement.classList.contains('dark');

          // Glow effect
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
          if (isDark) {
            gradient.addColorStop(0, `rgba(96, 165, 250, ${particleOpacity * 0.8})`);
            gradient.addColorStop(0.5, `rgba(96, 165, 250, ${particleOpacity * 0.4})`);
            gradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
          } else {
            gradient.addColorStop(0, `rgba(37, 99, 235, ${particleOpacity * 0.6})`);
            gradient.addColorStop(0.5, `rgba(37, 99, 235, ${particleOpacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
          }

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
          ctx.fill();

          // Core particle
          ctx.fillStyle = isDark ? `rgba(96, 165, 250, ${particleOpacity})` : `rgba(37, 99, 235, ${particleOpacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const particles = [];

      function initParticles() {
        particles.length = 0;
        const count = Math.min(Math.floor((width * height) / particleDensity), maxParticles);
        for (let i = 0; i < count; i++) {
          particles.push(new Particle());
        }
      }

      initParticles();

      // Pause animation when page is not visible (performance optimization)
      let animationId;
      const visibilityHandler = () => {
        if (document.hidden) {
          if (animationId) cancelAnimationFrame(animationId);
        } else {
          animate();
        }
      };
      document.addEventListener('visibilitychange', visibilityHandler);

      function connectParticles() {
        const isDark = document.documentElement.classList.contains('dark');

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              const opacity = (1 - distance / connectionDistance) * 0.5 * particleOpacity;

              // Gradient line for more visual appeal
              const gradient = ctx.createLinearGradient(
                particles[i].x, particles[i].y,
                particles[j].x, particles[j].y
              );

              if (isDark) {
                gradient.addColorStop(0, `rgba(96, 165, 250, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(147, 197, 253, ${opacity * 0.8})`);
                gradient.addColorStop(1, `rgba(96, 165, 250, ${opacity})`);
              } else {
                gradient.addColorStop(0, `rgba(37, 99, 235, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.8})`);
                gradient.addColorStop(1, `rgba(37, 99, 235, ${opacity})`);
              }

              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      function animate() {
        ctx.clearRect(0, 0, width, height);

        // Update and draw particles
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        // Draw connections
        connectParticles();

        animationId = requestAnimationFrame(animate);
      }

      animate();

      // Cleanup function
      return () => {
        if (animationId) cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resizeHandler);
        document.removeEventListener('visibilitychange', visibilityHandler);
      };
    }

    // Initialize both canvas instances
    // Global canvas with lower particle density
    initParticleCanvas('grid-canvas-global', {
      particleDensity: 20000,
      maxParticles: 60,
      connectionDistance: 100,
      mouseRadius: 150,
      particleOpacity: 0.6
    });

    // Hero canvas with higher particle density
    initParticleCanvas('grid-canvas', {
      particleDensity: 12000,
      maxParticles: 80,
      connectionDistance: 120,
      mouseRadius: 150,
      particleOpacity: 0.9
    });

    // Typing Effect
    const typingTexts = {
      es: ['PHP', 'Node.js', 'Golang', 'React', 'Angular', 'DevOps'],
      en: ['PHP', 'Node.js', 'Golang', 'React', 'Angular', 'DevOps']
    };
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const pauseTime = 2000;

    function typeText() {
      const state = store.getState();
      const currentTexts = typingTexts[state.lang];
      const currentText = currentTexts[textIndex];
      const typingElement = document.getElementById('typing-text');

      if (!typingElement) return;

      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let timeout = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentText.length) {
        timeout = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % currentTexts.length;
      }

      setTimeout(typeText, timeout);
    }
    typeText();

    // Animated Counter
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          let current = 0;
          const increment = target / 100;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              entry.target.textContent = target + '+';
              clearInterval(timer);
            } else {
              entry.target.textContent = Math.ceil(current);
            }
          }, 20);
          counterObserver.unobserve(entry.target);
        }
      });
    });
    counters.forEach(counter => counterObserver.observe(counter));

    // Skills Progress Bars
    const skillsData = [
      { name: 'PHP/Symfony', level: 95, icon: 'fa-brands fa-php' },
      { name: 'Node.js/NestJS', level: 90, icon: 'fa-brands fa-node' },
      { name: 'Golang', level: 85, icon: 'fa-solid fa-code' },
      { name: 'React/Angular', level: 88, icon: 'fa-brands fa-react' },
      { name: 'MySQL/PostgreSQL', level: 92, icon: 'fa-solid fa-database' },
      { name: 'DevOps/Ansible', level: 87, icon: 'fa-brands fa-linux' },
      { name: 'PrestaShop', level: 95, icon: 'fa-solid fa-store' },
      { name: 'TypeScript', level: 90, icon: 'fa-brands fa-js' }
    ];

    const skillsBarsContainer = document.getElementById('skills-bars');
    if (skillsBarsContainer) {
      skillsData.forEach(skill => {
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        skillBar.innerHTML = `
          <div class="skill-bar-header">
            <span class="text-slate-700 dark:text-slate-200">
              <i class="${skill.icon} mr-2"></i>${skill.name}
            </span>
            <span class="text-brand-600 dark:text-brand-400 font-bold">${skill.level}%</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" data-level="${skill.level}"></div>
          </div>
        `;
        skillsBarsContainer.appendChild(skillBar);
      });

      // Animate bars on scroll
      const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill-bar-fill');
            fills.forEach(fill => {
              setTimeout(() => {
                fill.style.width = fill.getAttribute('data-level') + '%';
              }, 100);
            });
            skillsObserver.unobserve(entry.target);
          }
        });
      });
      skillsObserver.observe(skillsBarsContainer);
    }

    // Skills Radar Chart
    const radarCanvas = document.getElementById('skills-radar');
    if (radarCanvas && typeof Chart !== 'undefined') {
      const ctx = radarCanvas.getContext('2d');
      const isDark = document.documentElement.classList.contains('dark');

      const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: skillsData.map(s => s.name),
          datasets: [{
            label: 'Nivel de Dominio',
            data: skillsData.map(s => s.level),
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            borderColor: '#2563eb',
            borderWidth: 2,
            pointBackgroundColor: '#2563eb',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#2563eb',
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 20,
                color: isDark ? '#94a3b8' : '#64748b',
                backdropColor: 'transparent'
              },
              grid: {
                color: isDark ? '#334155' : '#e2e8f0'
              },
              pointLabels: {
                color: isDark ? '#f1f5f9' : '#0f172a',
                font: {
                  size: 11,
                  weight: '600'
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });

      // Update chart on theme change
      const originalApplyTheme = applyThemeDOM;
      applyThemeDOM = function(theme, prevTheme) {
        originalApplyTheme(theme, prevTheme);
        if (radarChart) {
          const isDark = theme === 'dark';
          radarChart.options.scales.r.ticks.color = isDark ? '#94a3b8' : '#64748b';
          radarChart.options.scales.r.grid.color = isDark ? '#334155' : '#e2e8f0';
          radarChart.options.scales.r.pointLabels.color = isDark ? '#f1f5f9' : '#0f172a';
          radarChart.update();
        }
      };
    }

    // Project Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Filter projects
        const projects = document.querySelectorAll('.project-card');
        projects.forEach(project => {
          const categories = project.getAttribute('data-categories');

          if (filter === 'all' || categories.includes(filter)) {
            project.classList.remove('hide');
          } else {
            project.classList.add('hide');
          }
        });
      });
    });

    // Project Modal
    let currentProjectIndex = 0;
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');

    function getVisibleProjects() {
      return Array.from(document.querySelectorAll('.project-card:not(.hide)'));
    }

    function openModal(projectId) {
      const state = store.getState();
      const projects = PROJECTS[state.lang] || PROJECTS.es;
      const project = projects.find(p => p.id === projectId);

      if (!project) return;

      const visibleProjects = getVisibleProjects();
      currentProjectIndex = visibleProjects.findIndex(p => p.getAttribute('data-project-id') === projectId);

      // Populate modal
      document.getElementById('modal-icon').className = project.icon || 'fa-solid fa-briefcase';
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-company').textContent = `${project.company} · ${project.role} · ${project.period}`;

      // KPIs
      const kpisHTML = project.kpis.map(k => `
        <div class="kpi">
          <div class="val">${k.val}</div>
          <div class="lbl">${k.lbl}</div>
        </div>
      `).join('');
      document.getElementById('modal-kpis').innerHTML = kpisHTML;

      // Stack
      const stackHTML = project.stack.map(s => `
        <span class="chip"><i class="${s.icon}"></i>${s.name}</span>
      `).join('');
      document.getElementById('modal-stack').innerHTML = stackHTML;

      // Bullets
      const bulletsHTML = project.bullets.map(b => `<li>${b}</li>`).join('');
      document.getElementById('modal-bullets').innerHTML = bulletsHTML;

      // Show modal
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      // Update nav buttons
      modalPrev.style.display = currentProjectIndex > 0 ? 'flex' : 'none';
      modalNext.style.display = currentProjectIndex < visibleProjects.length - 1 ? 'flex' : 'none';
    }

    function closeModal() {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    function navigateModal(direction) {
      const visibleProjects = getVisibleProjects();
      currentProjectIndex += direction;

      if (currentProjectIndex >= 0 && currentProjectIndex < visibleProjects.length) {
        const projectId = visibleProjects[currentProjectIndex].getAttribute('data-project-id');
        openModal(projectId);
      }
    }

    // Event listeners
    document.addEventListener('click', (e) => {
      const projectCard = e.target.closest('.project-card');
      if (projectCard) {
        const projectId = projectCard.getAttribute('data-project-id');
        openModal(projectId);
      }
    });

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', () => navigateModal(-1));
    modalNext.addEventListener('click', () => navigateModal(1));

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
      if (!modal.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') navigateModal(-1);
        if (e.key === 'ArrowRight') navigateModal(1);
      }
    });

    // Timeline Progress Animation
    const timelineProgress = document.getElementById('timeline-progress');
    const timeline = document.querySelector('.timeline');

    if (timelineProgress && timeline) {
      const updateTimelineProgress = () => {
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const timelineTop = timelineRect.top;
        const timelineHeight = timelineRect.height;

        let progress = 0;
        if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
          progress = ((windowHeight - timelineTop) / (timelineHeight + windowHeight)) * 100;
          progress = Math.min(100, Math.max(0, progress));
        }

        timelineProgress.style.height = progress + '%';
      };

      window.addEventListener('scroll', updateTimelineProgress);
      updateTimelineProgress();
    }

    // Smooth scroll
    $('a[href^="#"]').on('click', function(e){
      const id = this.getAttribute('href');
      if (!id || id === '#') return;
      const $target = $(id);
      if ($target.length){
        e.preventDefault();
        $('html, body').animate({ scrollTop: $target.offset().top - 72 }, 450);
      }
    });

    // Toggle tema
    $('#theme-toggle').on('click', function(){
      const current = store.getState().theme;
      store.dispatch({ type: SET_THEME, payload: current === 'dark' ? 'light' : 'dark' });
    });

    // Toggle idioma
    $('#lang-toggle').on('click', function(){
      const current = store.getState().lang;
      store.dispatch({ type: SET_LANG, payload: current === 'es' ? 'en' : 'es' });
    });

    // Download CV
    $('#download-cv').on('click', function(){
      // Analytics event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'download_cv', {
          event_category: 'engagement',
          event_label: 'CV Download'
        });
      }
      // Trigger print dialog with optimized print styles
      window.print();
    });

    // Copiar email
    $('#btn-copy-mail').on('click', function(){
      const state = store.getState();
      const mail = $(this).data('mail');
      if (!mail) return;
      navigator.clipboard.writeText(mail).then(() => {
        $(this)
          .html('<i class="fa-regular fa-circle-check mr-2"></i>' + t('contact.copied', state.lang))
          .addClass('bg-brand-600 text-white border-brand-600');
        setTimeout(() => {
          $(this)
            .html('<i class="fa-regular fa-copy mr-2"></i>' + t('contact.copy', state.lang))
            .removeClass('bg-brand-600 text-white border-brand-600');
        }, 1800);
      });
    });

    // Formspree submit
    $('#form-contacto').on('submit', function(e){
      e.preventDefault();
      const state = store.getState();
      const $form = $(this);
      const $btn  = $form.find('button[type="submit"]');
      const $msg  = $('#form-contacto-msg');

      store.dispatch({ type: FORM_STATUS, payload: { status: 'sending' } });
      $btn.prop('disabled', true).text(t('form.sending', state.lang));
      $msg.addClass('hidden').text('');

      const fd = new FormData(this);

      fetch(this.action, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } })
        .then(async (res) => {
          if (res.ok) {
            store.dispatch({ type: FORM_STATUS, payload: { status: 'success', message: t('form.ok', state.lang) } });
            $msg.removeClass('hidden').text(t('form.ok', state.lang));
            (this).reset();
          } else {
            const data = await res.json().catch(()=> ({}));
            const errMsg = data?.error || t('form.fail', state.lang);
            throw new Error(errMsg);
          }
        })
        .catch(err => {
          store.dispatch({ type: FORM_STATUS, payload: { status: 'error', message: err.message || t('form.net', state.lang) } });
          $msg.removeClass('hidden').text(err.message || t('form.net', state.lang));
        })
        .finally(() => {
          const st = store.getState();
          $btn.prop('disabled', false).text(t('form.send', st.lang));
        });
    });

  });

   
})();
