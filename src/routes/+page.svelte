<script lang="ts">
  import SmallCard from '$lib/components/SmallCard.svelte';
  import StatementBar from '$lib/components/StatementBar.svelte';
  import ClientReview from '$lib/components/ClientReview.svelte';

  const cardContent = [
    {
      icon: '/assets/svg/teamcoaching.png',
      title: '(Team)coaching',
      text: "'The system in the room' onderzoeken. Niet praten over 'hoe het zou moeten zijn', maar samen exploreren en het moedige gesprek leren voeren. Samen ontdekken hoe je effectiever wordt.",
      buttonText: 'Bekijk coaching',
      link: '/coaching',
    },
    {
      icon: '/assets/svg/training.png',
      title: 'Training',
      text: 'Diverse trainingen die jou of het team helpen impact te vergroten door middel van betere communicatie.',
      buttonText: 'Bekijk trainingen',
      link: '/training',
    },
    {
      icon: '/assets/svg/systeemspel.png',
      title: 'Systeemspel',
      text: 'Hoe stoppen we met het herhalen van patronen en kunnen we leren kijken naar de behoefte en bedoeling die erachter schuilgaat? Het systeemspel is een leuke manier om anders te leren kijken.',
      buttonText: 'Bekijk systeemspel',
      link: '/systeemspel',
    },
  ];
</script>

<section class="hero section-bg">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title desktop-only">
        Anders kijken naar<br />samenwerkingsvraagstukken
      </h1>
      <h2 class="hero-title mobile-only">
        Anders kijken naar samenwerkingsvraagstukken
      </h2>
      <p class="hero-text">
        Training, coaching en systemische oefeningen voor teams en personen, om succesvolle werkrelaties te herstellen of te bouwen.
      </p>
    </div>
    <img src="/assets/images/cirkels.webp" alt="Cirkels" class="hero-image" />
  </div>
</section>

<StatementBar
  text="To observe the system is to change it"
  subText="Niels Bohr"
/>

<section class="section-bg teal-text">
  <div class="container padded">
    <h1 class="section-title">Werken met de spanning tussen verbinding en authenticiteit</h1>
    <div class="two-col">
      <div class="text-col">
        <p class="para">
          Is in jouw team van professionals ieder vooral gefocust op zijn eigen werk, zonder dat ze elkaar sterker maken? Vormt de directie geen eenheid? Blijven leidinggevenden moeilijke gesprekken uitstellen? Lukt het samenwerken met een nieuwe collega niet, omdat deze alles zelf probeert op te lossen? Of vind je het zelf moeilijk om hulp te vragen aan collega's?
        </p>
        <p class="para">
          Als mens leren we onszelf kennen door in verbinding te zijn met anderen. We hebben een spiegel nodig. Om onze eigen krachten te ontdekken, én om die in te zetten in samenwerking. Maar hoe zorg je ervoor dat deze beide kanten voldoende zichtbaar zijn?
        </p>
        <p class="para">
          Door gesprekken en oefeningen ontdekken we wat er tussen elkaar gebeurt. Ik houd van het begrip "moedige gesprekken" moedig is in het Frans 'Courage' en heeft zijn oorsprong in 'coeur', hart of moed. We hebben niet alleen ons hoofd maar ook ons hart nodig, moed om de echte gesprekken te voeren, die gevoeld moeten worden.
        </p>
        <a href="/about" class="btn">Meer over Mirjam</a>
      </div>
      <img src="/assets/images/mirjam6.webp" alt="Mirjam Kroon" class="side-image" />
    </div>
  </div>
</section>

<section class="section-white">
  <div class="container padded">
    <div class="centered">
      <h1>Waarvoor kun je bij mij terecht?</h1>
      <p class="intro-text">
        Waar mensen samenwerken, valt veel te winnen wanneer er goed gecommuniceerd wordt. Of dat nu in de financiële branche is, de overheid of de zware maakindustrie. Afstemmen, programma's op maat maken in taal die aansluit, is kenmerkend voor mijn werkwijze.
      </p>
    </div>
    <div class="cards-grid">
      {#each cardContent as card}
        <SmallCard {card} />
      {/each}
    </div>
  </div>
</section>

<section class="section-bg">
  <div class="container padded">
    <h2 class="reviews-title">Reviews</h2>
    <div class="reviews-grid">
      <ClientReview
        review="Mooie kennismaking met het team en met het leren kijken vanuit systemisch perspectief. Met een inzichtgevende opstelling als mooi eindresultaat. Mirjam kan een mooie introductie geven met simpele oefeningen zodat iedereen, met kennis of niet, kan deelnemen."
        name="Deelnemer teamcoaching"
      />
      <ClientReview
        review="Met haar 1 op 1 training heeft Mirjam mij de enorme potentiële waarde laten inzien van o.a. anders (geweldloos) communiceren en hoe ik dit in mijn persoonlijke én professionele omgeving op de juiste manier kan inzetten. Er ging een (nieuwe) wereld van mogelijkheden voor mij open. Dit was een van de beste investeringen in mijn persoonlijke en professionele ontwikkeling van de afgelopen periode."
        name="John Lankester"
        company="RWS"
      />
    </div>
  </div>
</section>

<style>
  .hero {
    color: var(--color-blue);
    padding-top: 1rem;
  }

  .hero-content {
    padding-bottom: 1rem;
  }

  .hero-title {
    margin-bottom: 1rem;
  }

  .hero-text {
    max-width: 70%;
  }

  .hero-image {
    width: 100%;
    padding-bottom: 1rem;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  @media (min-width: 768px) {
    .desktop-only { display: block; }
    .mobile-only { display: none; }
    .hero-text { max-width: 70%; }
  }

  .teal-text {
    color: var(--color-teal);
  }

  .section-title {
    padding-bottom: 1rem;
  }

  .padded {
    padding: 1rem;
  }

  .two-col {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
  }

  @media (min-width: 576px) {
    .two-col {
      flex-direction: row;
    }
    .text-col {
      flex: 1;
    }
    .side-image {
      flex: 1;
      max-width: 50%;
      object-fit: cover;
    }
  }

  .text-col {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
  }

  .para {
    margin-bottom: 0.5rem;
  }

  .side-image {
    width: 100%;
    object-fit: cover;
  }

  .centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
  }

  .intro-text {
    max-width: 800px;
    text-align: center;
    margin: 0.5rem 0;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 576px) {
    .cards-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .reviews-title {
    padding-bottom: 1rem;
  }

  .reviews-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: 576px) {
    .reviews-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
