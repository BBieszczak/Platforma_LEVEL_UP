/* ==========================================================================
   TUTAJ OPERUJESZ! (app.js)
   👉 To jedyny plik, który musisz edytować.
   Zmień dane w obiekcie SITE, a cała strona zaktualizuje się automatycznie.
   ========================================================================== */

const SITE = {
  // 1. GÓRNA BELKA (NAVBAR)
  brand: "ISI",
  brandDotColor: "var(--lime)", // Kolor pulsującej diody: var(--lime), var(--cyan), var(--vio), var(--pink)
  brandSub: "// DEV 2026",
  githubUrl: "https://github.com/",

  // 2. GŁÓWNY NAGŁÓWEK (HERO)
  hero: {
    tag: "INŻYNIERIA OPROGRAMOWANIA & AI",
    titleMain: "Inteligentne Systemy",
    titleOutline: "w Praktyce.", // Efekt obrysowanego, przezroczystego tekstu
    lead: "Zestaw projektów łączących <b>Machine Learning</b>, <b>Python</b> i nowoczesną architekturę webową. Każdy moduł to działający produkt.",
    primaryBtn: { text: "Zobacz projekty", link: "#projekty" },
    secondaryBtn: { text: "Profil GitHub ↗", link: "https://github.com/" }
  },

  // 3. LICZNIKI STATYSTYK POD HERO
  // colorClass: 'c1' (fiolet), 'c2' (błękit), 'c3' (róż), 'c4' (limonka)
  stats: [
    { num: "04", label: "Główne Moduły", colorClass: "c1" },
    { num: "100%", label: "Czysty Kod", colorClass: "c2" },
    { num: "Python", label: "Core Stack", colorClass: "c3" },
    { num: "2026", label: "Aktualność", colorClass: "c4" }
  ],

  // 4. TWOJE KARTY PROJEKTÓW
  // Możesz dodawać, usuwać lub edytować poniższe pozycje.
  // accentColor do wyboru: 'var(--vio)', 'var(--cyan)', 'var(--pink)', 'var(--lime)'
  projects: [
    {
      num: "01",
      category: "ML / REC",
      accentColor: "var(--vio)",
      title: "Silnik Rekomendacji Treści",
      desc: "Algorytmy Collaborative Filtering i Content-Based analizujące macierz preferencji użytkowników i podobieństwo cosinusowe.",
      tags: ["Python", "Pandas", "Scikit-Learn", "FastAPI"],
      link: "https://github.com/"
    },
    {
      num: "02",
      category: "SEARCH",
      accentColor: "var(--cyan)",
      title: "Semantyczna Wyszukiwarka Dokumentów",
      desc: "Hybrydowy silnik wyszukiwania łączący klasyczny algorytm BM25 z wektorową bazą danych ChromaDB.",
      tags: ["BM25", "ChromaDB", "NLP", "Docker"],
      link: "https://github.com/"
    },
    {
      num: "03",
      category: "DATA / NLP",
      accentColor: "var(--pink)",
      title: "Klasyfikator Tekstów i Opinii",
      desc: "System rozpoznawania wydźwięku opinii (Sentiment Analysis) z automatycznym czyszczeniem danych i ewaluacją F1-score.",
      tags: ["NLP", "Spacy", "NLTK", "Flask"],
      link: "https://github.com/"
    },
    {
      num: "04",
      category: "DEV-OPS",
      accentColor: "var(--lime)",
      title: "Infrastruktura Mikroserwisów & CI/CD",
      desc: "Zautomatyzowane środowisko Docker Compose zintegrowane z testami jednostkowymi i automatycznym wdrożeniem GitHub Actions.",
      tags: ["Docker", "GitHub Actions", "FastAPI", "Redis"],
      link: "https://github.com/"
    }
  ]
};

/* ==========================================================================
   SILNIK RENDERUJĄCY (Nie musisz tu nic zmieniać)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar
  const brandTitle = document.getElementById("brand-title");
  const brandSub = document.getElementById("brand-sub");
  const brandDot = document.getElementById("brand-dot");
  const navGithub = document.getElementById("nav-github");

  if (brandTitle) brandTitle.textContent = SITE.brand;
  if (brandSub) brandSub.textContent = SITE.brandSub;
  if (brandDot && SITE.brandDotColor) brandDot.style.background = SITE.brandDotColor;
  if (navGithub && SITE.githubUrl) navGithub.href = SITE.githubUrl;

  // 2. Hero
  const heroTag = document.getElementById("hero-tag");
  const heroMain = document.getElementById("hero-main");
  const heroOutline = document.getElementById("hero-outline");
  const heroLead = document.getElementById("hero-lead");
  const heroPrimary = document.getElementById("hero-primary-btn");
  const heroSecondary = document.getElementById("hero-secondary-btn");

  if (heroTag) heroTag.textContent = SITE.hero.tag;
  if (heroMain) heroMain.textContent = SITE.hero.titleMain;
  if (heroOutline) heroOutline.textContent = SITE.hero.titleOutline;
  if (heroLead) heroLead.innerHTML = SITE.hero.lead;
  if (heroPrimary) {
    heroPrimary.href = SITE.hero.primaryBtn.link;
    heroPrimary.innerHTML = `${SITE.hero.primaryBtn.text} <span>↓</span>`;
  }
  if (heroSecondary) {
    heroSecondary.href = SITE.hero.secondaryBtn.link;
    heroSecondary.textContent = SITE.hero.secondaryBtn.text;
  }

  // 3. Statystyki
  const statsContainer = document.getElementById("stats-container");
  if (statsContainer && SITE.stats) {
    statsContainer.innerHTML = SITE.stats.map(s => `
      <div class="${s.colorClass || 'c1'}">
        <b>${s.num}</b>
        <span>${s.label}</span>
      </div>
    `).join("");
  }

  // 4. Renderowanie kart projektów
  const cardsContainer = document.getElementById("cards-container");
  if (cardsContainer && SITE.projects) {
    cardsContainer.innerHTML = SITE.projects.map(p => {
      const tags = (p.tags || []).map(t => `<span>${t}</span>`).join("");
      const color = p.accentColor || "var(--vio)";

      return `
        <a href="${p.link || '#'}" class="lab-card reveal" style="--ac: ${color}" target="_blank" rel="noopener noreferrer">
          <div class="lab-num">
            ${p.num}
            <small>${p.category || 'PROJEKT'}</small>
          </div>
          <div class="lab-body">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="lab-tags">
              ${tags}
            </div>
          </div>
          <div class="lab-go">OTWÓRZ →</div>
        </a>
      `;
    }).join("");
  }
});
