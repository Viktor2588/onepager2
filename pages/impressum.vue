<template>
  <div>
    <AppHeader />
    <main class="impressum-page">
      <div class="container">
        <div class="content-wrapper">
          <h1>Impressum</h1>
          
          <section>
            <h2>Angaben gemäß § 5 TMG</h2>
            <div class="company-info">
              <p><strong>Björn Kratz</strong></p>
              <p>Industrieverwertung und Recycling<br>
              [Straße und Hausnummer]<br>
              89073 Ulm<br>
              Deutschland</p>
            </div>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p><strong>Telefon:</strong> +49 (040) 525 60 50<br>
            <strong>E-Mail:</strong> info@ht-kg.de</p>
          </section>

          <section>
            <h2>Vertretungsberechtigte Personen</h2>
            <p>Inhaber: Björn Kratz</p>
          </section>

          <section>
            <h2>Registereintrag</h2>
            <p><strong>Gewerbeanmeldung:</strong><br>
            Gewerbeamt: Ulm<br>
            [Gewerbeschein-Nummer falls vorhanden]</p>
          </section>

          <section>
            <h2>Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br>
            DE [Umsatzsteuer-ID]</p>
          </section>

          <section>
            <h2>Aufsichtsbehörde</h2>
            <p>Gewerbeaufsichtsamt Ulm<br>
            89073 Ulm</p>
          </section>

          <section>
            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p><strong>Berufsbezeichnung:</strong> Industrieverwertung und Recycling<br>
            <strong>Zuständige Stelle:</strong> Gewerbeamt Ulm<br>
            <strong>Verliehen durch:</strong> Deutschland</p>
          </section>

          <section>
            <h2>Redaktionell verantwortlich</h2>
            <p>Björn Kratz<br>
            [Straße und Hausnummer]<br>
            89073 Ulm</p>
          </section>

          <section>
            <h2>EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a><br>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>

          <section>
            <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <section>
            <h2>Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </section>

          <section>
            <h2>Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
            zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
            
            <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
            Links umgehend entfernen.</p>
          </section>

          <section>
            <h2>Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            
            <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
            auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          </section>
          <p class="last-updated"><em>Stand: Juli 2025</em></p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Impressum - INDUVA GmbH',
  meta: [
    { name: 'description', content: 'Impressum der INDUVA GmbH. Rechtliche Angaben gemäß TMG.' }
  ]
})
</script>

<style scoped>
.impressum-page {
  padding-top: 100px;
  min-height: 100vh;
  background: var(--primary-green-light);
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: rgba(26, 61, 46, 0.8);
  border-radius: 20px;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

h1 {
  color: var(--accent-mustard);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 2px solid var(--accent-mustard);
  padding-bottom: 1rem;
}

h2 {
  color: var(--accent-mustard);
  font-size: 1.8rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--accent-mustard);
  padding-left: 1rem;
}

p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 1.2rem;
  text-align: justify;
}

.company-info {
  background: rgba(212, 165, 116, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--accent-mustard);
  margin: 1.5rem 0;
}

.company-info p {
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

.company-info strong {
  color: var(--accent-mustard);
}

a {
  color: var(--accent-mustard);
  text-decoration: underline;
}

a:hover {
  color: var(--accent-mustard-light);
}

.last-updated {
  text-align: center;
  color: var(--accent-mustard);
  font-style: italic;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(212, 165, 116, 0.3);
}

section {
  margin-bottom: 2rem;
}

strong {
  color: var(--accent-mustard);
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 2rem 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  p {
    text-align: left;
  }
}
</style>