<svelte:head>
  <title>Coaching | Mirjam Kroon Training & Advies</title>
  <meta name="description" content="Persoonlijke coaching en teamcoaching door Mirjam Kroon. Samen werken aan herhalende patronen, effectiever communiceren en betere samenwerking." />
  <link rel="canonical" href="https://www.kroontrainingadvies.com/coaching" />
  <meta property="og:title" content="Coaching | Mirjam Kroon Training & Advies" />
  <meta property="og:description" content="Persoonlijke coaching en teamcoaching door Mirjam Kroon. Samen werken aan herhalende patronen, effectiever communiceren en betere samenwerking." />
  <meta property="og:url" content="https://www.kroontrainingadvies.com/coaching" />
</svelte:head>

<script lang="ts">
  import StatementBar from '$lib/components/StatementBar.svelte';
  import ClientReview from '$lib/components/ClientReview.svelte';

  let expanded = $state(false);
</script>

<section class="section-bg blue-text header-section">
  <div class="centered">
    <h1>Coaching</h1>
    <h2>Persoonlijke coaching & teamcoaching</h2>
  </div>
</section>

<img
  src="/assets/images/IMG_48642.webp"
  alt="Coaching"
  class="header-img mobile-only"
/>

<section class="section-white blue-text">
  <div class="container">
    <div class="intro-flex">
      <img
        src="/assets/images/IMG_48642.webp"
        alt="Coaching"
        class="intro-img desktop-only"
      />
      <div class="intro-text">
        <h2 class="desktop-only">
          Obstakels op je weg, herhalende patronen in de interactie met anderen? Gedrag veranderen is niet eenvoudig.
        </h2>
        <h3 class="mobile-only">
          Obstakels op je weg, herhalende patronen in de interactie met anderen? Gedrag veranderen is niet eenvoudig.
        </h3>
        <p>
          Wanneer er maatwerk nodig is, loop ik graag een tijdje mee. In mijn rol als coach zie ik mezelf als klankbord, uitdager, spiegel en kennisbron.
        </p>
      </div>
    </div>
  </div>
  <StatementBar
    text='"Kleine veranderingen kunnen groots effect hebben"'
    subText="Joep Choy"
  />
</section>

<section class="section-bg blue-text">
  <div class="container padded">
    <h2>Teamcoaching</h2>
    <h3>"The system in the room"</h3>
    <p class="para">
      Het lijkt wel alsof we na de coronatijd met nieuwe teamvragen en leiderschap-issues te maken hebben gekregen. Leidinggeven op afstand, hoe houden we cohesie? Wat verwachten we wel en niet van elkaar? Vragen die er altijd al waren, maar nu nog meer om duidelijke communicatie vragen. Hoe houd je verbinding, wat zijn de verschillende behoeften binnen het team. Hoe ga je om met teamleden die graag op de voor- en anderen die makkelijk op de achtergrond blijven? Hoe zorg je ervoor dat je als teamleider niet steeds zèlf hard blijft werken, maar dat het team gaat groeien in verantwoordelijkheid nemen.
    </p>
    <p class="para">
      Bij teamcoaching gaat het echt om "the system in the room". Niet praten over "hoe het zou moeten zijn", maar samen exploreren en het moedige gesprek leren voeren. Samen ontdekken hoe je effectiever wordt. Hoe je onuitgesproken zaken die onder de tafel verdwijnen maar wel invloed hebben, boven de tafel leert bespreken.
    </p>

    {#if expanded}
      <p class="para">
        Teamcoaching wordt vaak ingezet als er gedoe is, maar het kan ook zinvol zijn om eens te kijken hoe jullie als team de dingen doen en wat daar beter in kan.
      </p>
      <p class="para">
        Mijn aanpak is een systemische, dat wil zeggen dat ik jullie help kijken naar wat er tussen mensen gebeurt. Onze eerste manier van kijken is vaak lineair met als vraag: wie is waar de oorzaak van? Maar de realiteit is meestal complexer, in groepen en tussen mensen verloopt de interactie circulair. We haken voortdurend op elkaar in. Dat ontwarren wanneer er spanning is, helpt om de spanning te verlagen. Deze werkwijze heeft als doel op individueel niveau te ontschuldigen en meer te kijken naar het effect van gedrag en hoe we elkaar soms vast kunnen zetten.
      </p>
    {/if}

    <button class="read-more" onclick={() => (expanded = !expanded)}>
      {expanded ? 'Lees minder...' : 'Lees meer...'}
    </button>
  </div>
</section>

<section class="section-teal">
  <div class="container padded">
    <h2>
      Voor <strong>persoonlijke coaching</strong> begeleid ik je graag op thema's als:
    </h2>
    <ul>
      <li>Met meer ontspanning en zelfvertrouwen je plek innemen</li>
      <li>Effectiever communiceren</li>
      <li>Helder krijgen waar je eigen hart sneller van gaat kloppen</li>
      <li>Verlies verwerken</li>
    </ul>
    <p>
      Voorwaarde om een coachtraject te laten werken is een eigen leervraag.<br />
      <strong>Waar zit de spanning tussen waar je nu bent en waar je heen wilt?</strong><br />
      En daar kunnen veel soorten vragen onder vallen.
    </p>
  </div>
</section>

<section class="section-bg teal-text">
  <div class="container padded">
    <h2>
      Hoe zou een <strong>persoonlijk coachtraject</strong> eruit kunnen zien?
    </h2>
    <ul>
      <li>
        Een eerste gesprek is een gesprek waarbij we wederzijds kijken of er voldoende klik is en onderzoeken we samen de coachingsvraag.
      </li>
      <li>Een traject beslaat meestal 5 tot 7 sessies, soms meer.</li>
      <li>
        Tussen de sessies ga je verder met je eigen leerproces aan de hand van experimenten die je gaat uittesten in de praktijk.
      </li>
    </ul>
    <h2 style="text-align: center; padding: 1rem 0;">Tools die kunnen worden ingezet:</h2>
  </div>
</section>

<section class="section-teal">
  <div class="container">
    <div class="tools-grid">
      <div class="tool-card">
        <h2>Insights Discovery®</h2>
        <p>
          Een van de instrumenten die kunnen helpen bij het elkaar beter begrijpen, is Insights Discovery®. Insights bestaat uit een vragenlijst waar een persoonlijkheidsprofiel uit komt rollen, die gekoppeld wordt aan kleuren. De kleurentaal is gebaseerd op het gedachtegoed van Carl Gustav Jung. De Zwitserse psycholoog en psychiater introduceerde het concept van psychologische voorkeuren. Insights koppelt die voorkeuren aan 4 kleuren. Ze geven je op een aansprekende manier inzicht in je eigen reacties en gedrag en helpen je om te begrijpen waarom andere mensen heel ander gedrag laten zien Hoe veelzeggend iemands eerste kleur ook is, ook iemands tweede, derde en laagste kleur kunnen enorm bepalend zijn voor zijn gedrag. Iedereen gebruikt alle 4 de Insights Kleuren, maar de specifieke volgorde en intensiteit van de kleuren verschilt per persoon: we hebben allemaal onze eigen unieke kleurenmix. Naast een individueel profiel kan er ook een teamprofiel worden gegenereerd waardoor er een overzicht bestaat van welke kleuren veel en welke minder aanwezig zijn in het team. Op grond daarvan kan er inzicht ontstaan in sterkten en zwaktes van het team.
        </p>
      </div>
      <div class="tool-card tool-card-dark">
        <h2>Myers-Briggs Type-indicator</h2>
        <p>
          Ook de Myers-Briggs Type-indicator (step 2) is net zoals de Insights Discovery® gebaseerd op het gedachtegoed van Gustav Jung, waarbij verschillen tussen mensen in kaart worden gebracht. Zoals Intra-en extravert, taak-versus mensgericht, gestructureerd of meer go-with-the-flow. De profielteksten zijn toegankelijk en helpen met name om je eigen gebruiksaanwijzing en die van je teamgenoten beter te begrijpen. Wanneer meer begrip voor elkaar en leren omgaan met verschillen een vraag is, kan dit instrument een leuke en speelse start zijn van een teamtraject. De keerzijde kan zijn dat mensen gereduceerd worden tot een kleur en elkaar in een hokje gaan stoppen, maar de wijze waarop dit geïntroduceerd wordt, maakt in dit opzicht hét verschil.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section-bg teal-text">
  <div class="container padded">
    <h2>Review</h2>
    <ClientReview
      review="Mirjam is een bevlogen coach. Ik heb haar leren kennen in de training onboarding voor nieuwe leidinggevenden en heb haar daarna terug gevraagd om voor mijn team een Insight training te verzorgen. Waarom ik Mirjam heb gevraagd voor de training binnen mijn team? Ze heeft oog voor zowel de groepsdynamiek als voor de verschillende individuen. Dat maakt dat je als cursist je gezien voelt, en dat er mede door haar begeleiding in de groep een warme -en open sfeer ontstaat. Wat Mirjam typeert is dat ze je uit je comfort zone probeert te halen, waardoor je naar jezelf kijkt waarom je de dingen doet zoals je ze doet maar ook hoe je zaken kunt doorbreken."
      name="Manager Risk en Compliance bij een grote verzekeraar"
    />
  </div>
</section>

<style>
  .blue-text { color: var(--color-blue); }
  .teal-text { color: var(--color-teal); }

  .header-section {
    text-align: center;
    padding: 1.5rem 0;
  }

  .centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
  }

  .padded { padding: 1rem; }
  .para { margin-bottom: 1rem; }

  .header-img {
    width: 100%;
  }

  .intro-flex {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
    padding: 1rem 0;
  }

  @media (min-width: 768px) {
    .intro-flex {
      flex-direction: row;
    }
    .intro-img {
      width: 50%;
      object-fit: cover;
    }
    .intro-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }

  .intro-img {
    width: 100%;
    object-fit: cover;
  }

  .desktop-only { display: none; }
  .mobile-only { display: block; }

  @media (min-width: 576px) {
    .desktop-only { display: block; }
    .mobile-only { display: none; }
  }

  .read-more {
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-family);
    font-size: 1rem;
    color: var(--color-blue);
    padding: 0;
    text-decoration: underline;
  }

  .tools-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 576px) {
    .tools-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .tool-card {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .tool-card-dark {
    background-color: var(--color-blue);
  }
</style>
