# Technologie
Nuxt 3

# Firma - Onepage Variants

Firmenname: INDUVA GmbH
Slogan: Ihr Partner für individuelle Verwertungslösungen

## 🚀 Live Demo

**GitHub Pages:** [https://Viktor2588.github.io](https://Viktor2588.github.io)

## 📁 Projekt-Struktur

```
onepager2/
├── index.html                          # Haupt-Navigationsseite
├── variant1/               
│   ├── package.json
│   ├── src/
│   └── dist/   
├── variant2/                    
│   ├── package.json
│   ├── src/
│   └── dist/                           
├── variant3/                      
│   ├── package.json
│   ├── src/
│   └── dist/                          
├── variant4/                
│   ├── package.json
│   ├── src/
│   └── dist/   
├── variant5/                  
│   ├── package.json
│   ├── src/
│   └── dist/   
└── README.md
```

## 🎯 Varianten-Übersicht

## 🛠️ Lokale Entwicklung

### Voraussetzungen
- Node.js (v20+)
- pnpm oder bun
- Git

### Installation

1. **Repository klonen:**
```bash
git clone https://github.com/Viktor2588/onepager2.git
cd onepager2
```

## 📦 Deployment

### GitHub Pages Deployment

1. **Repository erstellen:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Viktor2588/onepager2.git
git push -u origin main
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

## 🎨 Design-System
Logo: Das Logo besteht aus einem Zahnrad, in dessen Mitte sich ein geschwungener Pfeil befindet, der nach oben rechts zeigt.

### Farbpalette
Hintergrund: Ein dunkles Grün.
Akzentfarbe: Ein bräunlicher Senfgelb-Ton, der für das Logo, den Hintergrund des QR-Codes und einen Teil des Designs verwendet wird.
Schriftfarbe: Weiß & Akzentfarbe

### Typografie

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

## 📞 Support

Bei Fragen oder Problemen:
- Erstelle ein [GitHub Issue](https://github.com/Viktor2588/imr-onepage-variants/issues)
- Kontaktiere uns per E-Mail: Viktor2588@web.de

---