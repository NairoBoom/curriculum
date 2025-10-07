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
      'hero.role':'Desarrollador Fullstack',
      'hero.summary':'Especialista en <b>e-commerce</b> con foco en <b>PrestaShop 1.6/1.7</b>, back-end en <b>PHP</b>, <b>Node.js/NestJS</b>, <b>Golang</b>, <b>Python</b>, <b>C#</b>/.NET y front-end con <b>Angular</b>, <b>React</b> y <b>TypeScript</b>. Experiencia en <b>MySQL/PostgreSQL</b>, <b>Linux</b> (Nginx/Apache), <b>Ansible</b>, <b>Cloudflare</b> y apps híbridas con <b>Ionic</b>.',
      'cta.viewExp':'Ver experiencia', 'cta.contact':'Contactar',
      'sb.locationLabel':'Ubicación','sb.availabilityLabel':'Disponibilidad','sb.availability':'Remoto / Híbrido','sb.city':'Bogotá D.C., Colombia',
      'sb.bio':'Me enfoco en soluciones mantenibles, rendimiento medible y automatización útil. Documentación mínima pero suficiente para que cualquier dev avance sin fricción.',
      'about.title':'Acerca de mí',
      'about.body':'Soy desarrollador web y móvil con más de 8 años de experiencia. He trabajado en proyectos corporativos, tiendas online completas y apps híbridas. Fuerte en <b>PrestaShop</b>, sólido en back-end <b>PHP/Node.js/Golang</b> y front-end moderno. También administro <b>Linux</b> (Nginx/Apache), manejo bases de datos <b>MySQL/PostgreSQL</b> y orquesto despliegues con <b>Ansible</b>. Me gusta dejar las cosas mejor de como las encontré: refactors iterativos, medición de performance y seguridad sin fricción.',
      'exp.title':'Experiencia',
      'exp.senior.role':'Ingeniero de Desarrollo Web <b>Senior</b>',
      'exp.senior.date':'jun. 2024 – actualidad · Remoto (Bogotá)',
      'exp.senior.summary':'Desarrollo de <b>servicios y APIs</b> con <b>Go</b> y <b>NestJS</b>, refactor de módulos críticos (precios, stock, promociones), integraciones con servicios internos/terceros y mejoras de rendimiento a nivel de app, edge y base de datos.',
      'exp.senior.b1':'Endpoints REST con contratos estables, manejo de errores y observabilidad básica.',
      'exp.senior.b2':'Refactors incrementales que reducen deuda técnica y evitan regresiones.',
      'exp.senior.b3':'Optimización de latencia con caché, SQL tuning y paginaciones correctas.',
      'exp.senior.b4':'Code reviews, patrones consistentes y tests en zonas de riesgo.',
      'exp.senior.b5':'Despliegues reproducibles con métricas post-release.',
      'exp.semi.role':'Desarrollador Web <b>Semi Senior</b>',
      'exp.semi.date':'jun. 2019 – may. 2024 · Bogotá',
      'exp.semi.summary':'Desarrollo y mantenimiento de productos web end-to-end con foco en <b>PrestaShop</b>, performance, seguridad y automatización.',
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
      'exp.cdi.summary':'Desarrollo PHP orientado a objetos bajo patrón <b>MVC</b>, soporte SQL, paso a producción y acompañamiento funcional a usuarios.',
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
      'footer.role':'Desarrollador Fullstack','footer.top':'Volver arriba'
    },
    en: {
      'meta.title':'Portfolio — Nairo Samir Boom Vargas',
      'meta.desc':'Detailed portfolio of Nairo Samir Boom Vargas — Full-stack Developer (PrestaShop, PHP, Node.js, Angular, DevOps)',

      'ui.theme':'Theme','ui.talk':'Let’s talk',
      'nav.about':'About','nav.experience':'Experience','nav.stack':'Stack','nav.services':'Services','nav.education':'Education','nav.contact':'Contact',
      'hero.role':'Full-stack Developer',
      'hero.summary':'E-commerce specialist focused on <b>PrestaShop 1.6/1.7</b>, back end with <b>PHP</b>, <b>Node.js/NestJS</b>, <b>Golang</b>, <b>Python</b>, <b>C#</b>/.NET and front end with <b>Angular</b>, <b>React</b> and <b>TypeScript</b>. Experience with <b>MySQL/PostgreSQL</b>, <b>Linux</b> (Nginx/Apache), <b>Ansible</b>, <b>Cloudflare</b> and hybrid apps with <b>Ionic</b>.',
      'cta.viewExp':'View experience', 'cta.contact':'Contact',
      'sb.locationLabel':'Location','sb.availabilityLabel':'Availability','sb.availability':'Remote / Hybrid','sb.city':'Bogotá D.C., Colombia',
      'sb.bio':'I focus on maintainable solutions, measurable performance and practical automation. Minimal but sufficient docs so any dev can move fast.',
      'about.title':'About me',
      'about.body':'I am a web and mobile developer with 8+ years of experience. I have worked on corporate projects, full online stores and hybrid apps. Strong in <b>PrestaShop</b>, solid back end in <b>PHP/Node.js/Golang</b>, and modern front end. I also administer <b>Linux</b> (Nginx/Apache), handle <b>MySQL/PostgreSQL</b> and orchestrate deployments with <b>Ansible</b>. I like to leave things better than I found them: iterative refactors, measurable performance and low-friction security.',
      'exp.title':'Experience',
      'exp.senior.role':'<b>Senior</b> Web Development Engineer',
      'exp.senior.date':'Jun 2024 – present · Remote (Bogotá)',
      'exp.senior.summary':'Development of <b>services and APIs</b> with <b>Go</b> and <b>NestJS</b>, refactor of critical modules (pricing, stock, promotions), integrations with internal/third-party services, and performance improvements at app/edge/database levels.',
      'exp.senior.b1':'REST endpoints with stable contracts, error handling and basic observability.',
      'exp.senior.b2':'Incremental refactors that reduce tech debt and prevent regressions.',
      'exp.senior.b3':'Latency optimization with caching, SQL tuning and correct pagination.',
      'exp.senior.b4':'Code reviews, consistent patterns and tests in risk areas.',
      'exp.senior.b5':'Reproducible deployments with post-release metrics.',
      'exp.semi.role':'<b>Semi-Senior</b> Web Developer',
      'exp.semi.date':'Jun 2019 – May 2024 · Bogotá',
      'exp.semi.summary':'End-to-end web product development and maintenance focused on <b>PrestaShop</b>, performance, security and automation.',
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
      'exp.cdi.summary':'Object-oriented PHP development under <b>MVC</b>, SQL support, production releases and functional assistance to users.',
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
      'footer.role':'Full-stack Developer','footer.top':'Back to top'
    }
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

  function render(prevState){
    const state = store.getState();

    // Año
    const y = document.getElementById('year');
    if (y) y.textContent = state.nowYear;

    // Tema
    if (!prevState || prevState.theme !== state.theme){
      applyThemeDOM(state.theme, prevState && prevState.theme);
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

  // --- Eventos DOM
  $(function(){
    // Render inicial
    prevState = store.getState();
    render(null);

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

    // (opcional) bloquear menú contextual / atajos
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
      const k = e.key.toLowerCase();
      if (k === 'f12' || (e.ctrlKey && (k === 'u' || (e.shiftKey && ['i','j','c'].includes(k))))) {
        e.preventDefault();
      }
    });
  });
})();
