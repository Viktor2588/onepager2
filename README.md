# IMR Industrieverwertung - Onepage Variants

Ein umfassendes Showcase-Projekt mit 5 verschiedenen Implementierungen einer Onepage-Anwendung basierend auf der [IMR Industrieverwertung Website](https://imr-industrieverwertung.de/kontakt-imr/).

## 🚀 Live Demo

**GitHub Pages:** [https://Viktor2588.github.io/imr-onepage-variants/](https://Viktor2588.github.io/imr-onepage-variants/)

## 📁 Projekt-Struktur

```
imr-onepage-variants/
├── index.html                          # Haupt-Navigationsseite
├── variant1-html-css-js/               # Pure HTML/CSS/JS
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── variant2-react/                     # React Implementation
│   ├── package.json
│   ├── public/
│   ├── src/
│   └── build/                          # Build-Ordner für GitHub Pages
├── variant3-vue/                       # Vue.js Implementation
│   ├── package.json
│   ├── src/
│   └── dist/                           # Build-Ordner für GitHub Pages
├── variant4-bootstrap/                 # Bootstrap 5
│   ├── index.html
│   ├── custom.css
│   └── script.js
├── variant5-tailwind/                  # Tailwind CSS
│   ├── index.html
│   └── script.js
└── README.md
```

## 🎯 Varianten-Übersicht

### 1. HTML/CSS/JS Variante
- **Technologien:** HTML5, CSS3, JavaScript
- **Besonderheiten:** Keine Dependencies, SEO-freundlich, schnelle Ladezeiten
- **Einsatzgebiet:** Einfache Websites, statische Inhalte

### 2. React Variante
- **Technologien:** React 18, JSX, Hooks
- **Besonderheiten:** Komponentenbasiert, State Management, moderne Entwicklung
- **Einsatzgebiet:** Interaktive Web-Apps, dynamische Inhalte

### 3. Vue.js Variante
- **Technologien:** Vue 3, Single File Components, Vite
- **Besonderheiten:** Progressive Enhancement, reactive Daten, einfache Integration
- **Einsatzgebiet:** Schrittweise Migration, moderne SPAs

### 4. Bootstrap Variante
- **Technologien:** Bootstrap 5, Bootstrap Icons
- **Besonderheiten:** Vorgefertigte Komponenten, Grid System, Rapid Prototyping
- **Einsatzgebiet:** Schnelle Entwicklung, konsistentes Design

### 5. Tailwind CSS Variante
- **Technologien:** Tailwind CSS, Utility-First
- **Besonderheiten:** Hochgradig anpassbar, kleine Bundle-Größe, moderne Ästhetik
- **Einsatzgebiet:** Custom Design, moderne Web-Apps

## 🛠️ Lokale Entwicklung

### Voraussetzungen
- Node.js (v16+)
- npm oder yarn
- Git

### Installation

1. **Repository klonen:**
```bash
git clone https://github.com/Viktor2588/imr-onepage-variants.git
cd imr-onepage-variants
```

2. **HTML/CSS/JS & Bootstrap & Tailwind Varianten:**
```bash
# Einfach die index.html Dateien in einem Browser öffnen
# Oder mit einem lokalen Server:
npx http-server
```

3. **React Variante:**
```bash
cd variant2-react
npm install
npm start
```

4. **Vue.js Variante:**
```bash
cd variant3-vue
npm install
npm run dev
```

## 📦 Deployment

### GitHub Pages Deployment

1. **Repository erstellen:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Viktor2588/imr-onepage-variants.git
git push -u origin main
```

2. **React und Vue.js Varianten builden:**
```bash
# React Variante
cd variant2-react
npm run build

# Vue.js Variante
cd variant3-vue
npm run build
```

3. **GitHub Pages aktivieren:**
   - Gehen Sie zu Ihrem GitHub Repository
   - Klicken Sie auf "Settings"
   - Scrollen Sie zu "Pages"
   - Wählen Sie "Deploy from a branch"
   - Wählen Sie "main" branch und "/ (root)"
   - Klicken Sie auf "Save"

4. **Deployment-Workflow (Optional):**
   Erstellen Sie `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Build React
      run: |
        cd variant2-react
        npm ci
        npm run build
    
    - name: Build Vue
      run: |
        cd variant3-vue
        npm ci
        npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

### Andere Deployment-Optionen

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

#### AWS S3 + CloudFront
```bash
aws s3 sync . s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 🔧 Build-Prozess

### React Variante builden:
```bash
cd variant2-react
npm run build
# Build-Dateien werden in build/ erstellt
```

### Vue.js Variante builden:
```bash
cd variant3-vue
npm run build
# Build-Dateien werden in dist/ erstellt
```

## 📱 Features

Alle Varianten enthalten:
- ✅ Vollständig responsive Design
- ✅ Kontaktformular mit Validierung
- ✅ Smooth Scrolling Navigation
- ✅ Mobile-First Ansatz
- ✅ Barrierefreiheit (ARIA)
- ✅ SEO-Optimierung
- ✅ Performance-Optimierung

## 🎨 Design-System

### Farbpalette
```css
:root {
  --primary: #1e3a8a;
  --primary-light: #3b82f6;
  --primary-dark: #1e40af;
  --gray-50: #f8fafc;
  --gray-600: #6b7280;
  --gray-900: #111827;
}
```

### Typografie
- **Schriftart:** Arial, sans-serif
- **Headings:** 2rem - 3rem
- **Body:** 1rem
- **Small:** 0.875rem

## 📊 Performance-Vergleich

| Variante | Bundle-Größe | Ladezeit | Lighthouse Score |
|----------|-------------|----------|------------------|
| HTML/CSS/JS | ~50KB | <1s | 95+ |
| React | ~150KB | <2s | 90+ |
| Vue.js | ~120KB | <2s | 92+ |
| Bootstrap | ~200KB | <2s | 88+ |
| Tailwind | ~20KB | <1s | 96+ |

## 🔒 Sicherheit

- Keine externen Abhängigkeiten in kritischen Pfaden
- CSP-Header ready
- XSS-Schutz durch Input-Validierung
- HTTPS-Ready

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Add amazing feature'`)
4. Push den Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

## 📝 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe [LICENSE](LICENSE) für Details.

## 🙏 Danksagungen

- [IMR Industrieverwertung](https://imr-industrieverwertung.de/) für die Inspiration
- [Bootstrap](https://getbootstrap.com/) für das CSS-Framework
- [Tailwind CSS](https://tailwindcss.com/) für die Utility-Classes
- [React](https://reactjs.org/) für die JavaScript-Bibliothek
- [Vue.js](https://vuejs.org/) für das Progressive Framework

## 📞 Support

Bei Fragen oder Problemen:
- Erstelle ein [GitHub Issue](https://github.com/Viktor2588/imr-onepage-variants/issues)
- Kontaktiere uns per E-Mail: your.email@example.com

---

**Hinweis:** Ersetzen Sie `Viktor2588` durch Ihren tatsächlichen GitHub-Benutzernamen und `Viktor2588@web.de` durch Ihre E-Mail-Adresse.