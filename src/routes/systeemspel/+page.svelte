<script lang="ts">
  import ClientReview from '$lib/components/ClientReview.svelte';
</script>

<section class="section-bg blue-text">
  <h1 class="page-title">Systeemspel</h1>

  <div class="hero-wrap">
    <div class="hero-overlay">
      <h2 class="overlay-text">
        It's not personal,<br />it's the system
      </h2>
    </div>
    <img
      src="/assets/images/systeemspel2.webp"
      alt="Systeemspel"
      class="hero-img"
    />
  </div>

  <div class="container padded">
    <p class="para">
      Bij het spelen van het systeemspel ga je aan de hand van een verhaal, in de vorm van een film, leren om met een systeembril te kijken naar samenwerkingsvraagstukken. En krijg je manieren aangereikt om de vastgelopen situatie weer vlot te trekken.
    </p>
    <p class="para">
      Om je eigen deskundigheid te bevorderen vanuit bijvoorbeeld een rol als HR-manager of trainer, kun je mij inhuren om het spel samen te spelen.
    </p>
    <p class="para">
      Het spel waarbinnen je je eigen kennis ontwikkelt over systemisch kijken duurt een dag. Met eigen casussen de geleerde kennis toepassen geeft een meerwaarde.
    </p>
    <p class="para">
      Omdat ik vanuit meerdere systemische achtergronden opgeleid ben (Hellingerwerk, Marijke Spansjersbergen), breng ik een rijk gevulde gereedschapskist mee. De wereld wordt er niet eenvoudiger maar wel veel rijker van als we doorkrijgen hoeveel samenhang er is tussen goede doelen stellen en goede relaties ontwikkelen. Hoe patronen zich vaak herhalen en ook te veranderen zijn.
    </p>
    <h2 class="teal-text">Anders leren kijken</h2>
  </div>
</section>

<section class="section-teal">
  <div class="container">
    <div class="content-flex">
      <div class="text-col">
        <p class="para">
          We zijn zo gewend om lineair te kijken. "Wie" of "wat" is het probleem, en hoe lossen we het op. De realiteit is complexer. De systeembenadering helpt ons om die complexiteit recht te doen en om op onderzoek uit te gaan aan de hand van een aantal kapstokken. We kennen allemaal de "hoe meer de een..... des te meer de ander", elkaar versterkende patronen. Hoe meer de grote lijnen geschetst worden, hoe meer details er toe doen. Hoe harder er een bepaalde mening verkondigd wordt, hoe meer de neiging tot dempen ingezet wordt. Zo'n vaart zal het toch ook wel niet lopen... en zo kunnen patronen zich blijven herhalen.
        </p>
        <img src="/assets/images/IMG_35432.webp" alt="Antony Gormley" class="art-mobile" />
        <p class="attribution mobile-only">Voorlinden Antony Gormley, Clearing VIII, 2022</p>
        <p class="para">
          Volgens de systeembenadering is het antwoord op de vraag: 'Wat gaat helpen in het systeem zelf' te vinden. Elk gedrag is logisch, hoe stoppen we met het blijven herhalen van patronen en kunnen we leren kijken naar de behoefte en bedoeling die erachter schuilgaat? Weg van oorzaak gevolg denken, op zoek naar het ontschuldigen van die patronen omdat ze zo logisch zijn.
        </p>
        <p>
          "It's not personal, it's the system" Taal ontwikkelen, woorden vinden voor wat zich afspeelt tussen (individuele) mensen, dat is het gereedschap voor een systeemdenker. Het systeemspel is een leuke manier om basiskennis op te doen om anders te leren kijken. Heb je interesse om hier meer over te leren en ontdekken? Ik vertel je er graag meer over.
        </p>
      </div>
      <div class="art-desktop">
        <img src="/assets/images/IMG_35432.webp" alt="Antony Gormley" />
        <p class="attribution">Voorlinden Antony Gormley, Clearing VIII, 2022</p>
      </div>
    </div>
  </div>
</section>

<section class="section-bg blue-text">
  <div class="container padded">
    <h2>Review</h2>
    <ClientReview
      review="Mirjam is een fijne trainer. Ze heeft veel kennis en weet het op een ontspannen manier over te brengen. Mirjam wil waarde toevoegen. Pas als ze denkt dat ze dat kan, besluit ze in te stappen. Ze denkt mee, adviseert. Ze zet zichzelf daarbij niet op de voorgrond, ze is dienend aan het proces. Mirjam varieert in haar werkvormen, prikkelt al in de check-in, zet een systemisch spel in en dompel je in verschillende oefeningen. Spelenderwijs kom je tot belangrijke gesprekken en essentiële inzichten. Hiermee raakt ze hoofd en hart. Want ze leert je anders kijken, ze laat je ervaren wat er in de interactie gebeurt en wat jouw aandeel daarin is. Ontschuldigend, zoals het systemisch betaamt. Waardevol."
      name="Paul Hilhorst"
      company="De Boer & Ritsema van Eck"
    />
  </div>
</section>

<style>
  .blue-text { color: var(--color-blue); }
  .teal-text { color: var(--color-teal); }
  .padded { padding: 1rem; }
  .para { margin-bottom: 1rem; }

  .page-title {
    text-align: center;
    padding: 1.5rem 0;
  }

  .hero-wrap {
    position: relative;
    overflow: hidden;
  }

  .hero-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 576px) {
    .hero-img { height: 300px; }
  }

  @media (min-width: 768px) {
    .hero-img { height: 400px; }
  }

  .hero-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem 2rem;
    z-index: 1;
  }

  .overlay-text {
    color: white;
    font-weight: 500;
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  }

  .content-flex {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }

  @media (min-width: 992px) {
    .content-flex {
      flex-direction: row;
    }
    .text-col {
      flex: 1;
    }
    .art-desktop {
      flex: 1;
    }
  }

  .art-desktop {
    display: none;
  }

  @media (min-width: 992px) {
    .art-desktop {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .art-mobile {
      display: none;
    }
    .mobile-only {
      display: none;
    }
  }

  .art-mobile {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .attribution {
    text-align: right;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
</style>
