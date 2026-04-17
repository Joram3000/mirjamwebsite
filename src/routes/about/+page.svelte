<script lang="ts">
  import StatementBar from '$lib/components/StatementBar.svelte';
  import PeopleCard from '$lib/components/PeopleCard.svelte';

  const samenwerkingsPartners = [
    {
      img: '/assets/images/Samenwerkingspartners2.webp',
      name: 'Eline Trapman',
      text: 'Met Eline heb ik mooie trajecten begeleid als: Het moedige gesprek, leiding geven met lef, doorgroeien werkt. Eline is zeer gecommitteerd en zorgvuldig als het gaat om afstemming met de klant. Ze is een inspirerend voorbeeld in steeds een extra mijl lopen. Ze zoekt vernieuwing en verrassing. We maken elkaar beter omdat we complementair aan elkaar zijn.',
    },
    {
      img: '/assets/images/Samenwerkingspartners.webp',
      name: 'Jonnet Galle',
      text: 'Met Jonnet werk ik graag samen op teamcoachtrajecten en met het Systeem Spel. We hebben eenzelfde fascinatie voor het systemisch gedachtegoed. Jonnet is heel goed in een "holding space" creëren en in staat door te pakken en een zeer ervaren teamcoach.',
    },
    {
      img: '/assets/images/Samenwerkingspartners1.webp',
      name: 'Anke Tusveld',
      text: 'Met Anke heb ik een intensief traject voor een Waterschap begeleid. Groepen die ons samen zien werken beschrijven spontaan de synergie tussen ons. Ze werkt graag met de drijfveren "Power en Love", die vaak op gespannen voet met elkaar staan. Anke is stevig en warm tegelijk! Creatief en zorgvuldig.',
    },
    {
      img: '/assets/images/Samenwerkingspartners5.webp',
      name: 'De Baak',
      text: "Ik ben al jarenlang betrokken bij de Baak in verschillende rollen. De Baak staat voor mij voor vernieuwing, net een beetje anders. Op zoek naar wat deze huidige tijd van ons vraagt. Ik werd in het verleden ingezet als: teamcoach, trainer in corporate programma's en momenteel ben ik met veel plezier lid van het trainersteam van de Informele Leider.",
    },
    {
      img: '/assets/images/Samenwerkingspartners3.webp',
      name: 'Leiderschip',
      text: "Voor Leiderschip verzorg ik trainingen 'Leider als teamcoach' en 'Leider als individuele coach' en begeleid ik teams. Leiderschip ontwerpt inhoudelijk sterke programma's waarin deelnemers methodes leren die werken.",
    },
  ];
</script>

<section class="section-bg teal-text">
  <div class="container">
    <div class="hero-flex">
      <div class="hero-text">
        <h1>Trainer en coach van groei-<br />en verandertrajecten</h1>
        <p>
          Ik ben Mirjam Kroon-Hoekendijk. Binnen organisaties ben ik actief als coach en trainer op het gebied van training, ontwikkeling en samenwerkingsvraagstukken.
        </p>
      </div>
      <img src="/assets/images/mirjam6.webp" alt="Mirjam Kroon" class="hero-img" />
    </div>
  </div>
</section>

<StatementBar text='"Ik word ik door jij"' subText="Martin Büber" />

<section class="section-bg teal-text">
  <div class="container padded">
    <h1>Waar kun je me voor vragen?</h1>
    <p class="para">
      Waar mensen samenwerken, valt veel te winnen wanneer er goed gecommuniceerd wordt. Of dat nu in de financiële branche is, overheid of de zware maakindustrie. Afstemmen, programma's op maat maken in taal die aansluit, is kenmerkend voor mijn werkwijze. Daarbij vind ik het belangrijk zowel in-als uit te zoomen. Soms gaat het om competenties die verder ontwikkeld mogen worden, zoals de kunst van het vragen stellen, goed samenvatten, het echte gesprek durven voeren.
    </p>
    <p class="para">
      En er is altijd een groter geheel waarbinnen we ons begeven. We zijn als mensen onderdeel van systemen, ons huidige gezinssysteem, ons gezin van herkomst, de grotere context van ons werk of team. Dat team wordt beïnvloed door de organisatiedynamiek. Zeker wanneer er bij herhaling dezelfde niet helpende dynamieken spelen is het zinvol om naar dat grotere geheel te kijken (het systeem).
    </p>
    <p class="para">
      Voorbeeld uit de praktijk: ik werkte samen met een team dat verantwoordelijk was voor de culturele instellingen van een stad. Er heerste een beetje een hakketak-cultuur. Medewerkers konden elkaar niet automatisch vinden. In een ruimte lag aan de ene kant een flipover met "gemeente" en aan de andere kant "de burgers" toen ik hen vroeg in de ruimte te gaan staan op een plek die klopt bij wie ze ver weg en dichtbij staan verdeelde het team zich door de hele ruimte. Het werd duidelijk dat de ene medewerker zich in de eerste plaats met het gemeentelijke apparaat verbond en de ander met de burgers. Opeens werd duidelijk dat veel communicatieproblemen hiermee te maken hadden.
    </p>
  </div>
</section>

<section class="section-teal">
  <div class="container">
    <div class="teal-flex">
      <div class="scroll-col">
        <h1>Geen sprookje,<br />maar een soap</h1>
        <p class="para">
          De realiteit van het leven, heeft meer van een soap dan van een sprookje. In een sprookje zouden we het liefst geloven. Er was eens…… en …. ze leefden nog lang en gelukkig. Een sprookje heeft een begin en een eind, je denkt daarbinnen in oorzaak-gevolg.
        </p>
        <p class="para">
          Het leven is geen sprookje maar meer een voortdurend inhaken van de ene gebeurtenis op de andere. Iemand reageert, een ander pakt hem op en voor dat je het weet is de hele groep aan het inhaken op wat er in het team of in de organisatie gebeurt. Van nature denken we lineair maar de realiteit is meer circulair.
        </p>
        <img src="/assets/images/Tree.webp" alt="Kunstwerk" class="tree-mobile" />
        <p class="attribution mobile-only">Kunstwerk door Giuseppe Penone (2012), Museum Voorlinden</p>
        <p class="para">
          Samenwerken gaat vanuit systeemdenken niet alleen om mensen, maar vooral om de talloze relaties en verbindingen waar mensen deel van uitmaken. Om naar samenwerkingsvraagstukken te kijken helpt het om uit te zoomen in plaats van in te zoomen. Systeemdenken is leren kijken naar samenhang en patronen. We kijken met de systeembril niet ín mensen, maar tussen mensen. Gedrag wordt veel meer bepaald door relaties en context dan door persoonlijkheid: terwijl we vaak denken dat het andersom is. Wij hebben de neiging om karakter en persoonlijkheid over te waarderen, en het belang van relaties en context als verklaring voor gedrag te onderschatten.
        </p>
        <p class="para">
          Systeemdenken daagt je uit om op een andere manier naar samenwerkingsvraagstukken te kijken. 'Anders kijken' veronderstelt 'anders denken'. Dit kan in de praktijk best lastig zijn.
        </p>
        <a href="https://www.youtube.com/watch?v=OLQ2S_t29sE&ab_channel=TheAgeeth" target="_blank" class="btn" style="margin-bottom: 1rem;">
          Bekijk video op Youtube
        </a>
      </div>
      <div class="tree-desktop">
        <img src="/assets/images/Tree.webp" alt="Kunstwerk Giuseppe Penone" />
        <p class="attribution">Kunstwerk door Giuseppe Penone (2012), Museum Voorlinden</p>
      </div>
    </div>
  </div>
</section>

<section class="section-bg teal-text">
  <div class="container padded">
    <h1>Over Mirjam</h1>
    <p class="para">
      Wat je van mij kunt verwachten: vasthoudendheid als het gaat om een programma maken wat verschil gaat maken. Ik houd van en geloof in co-creëren. Een relatie die verder gaat dan opdrachtgever-leverancier, de opdrachtgever kent de organisatie altijd beter dan ik. Maar als buitenstaander kan ik zaken soms scherper zien. Die samenwerking is noodzakelijk om programma's te ontwerpen die het verschil kunnen maken.
    </p>
    <p class="para">
      Ik breng een rijk gevulde gereedschapskist mee vanuit mijn scholing en jarenlange ervaring: o.a. Sociologie, Systemisch werken (Hellinger en Marijke Spanjersbergen), Deep democracy (level 1-4), internationaal gecertificeerd NLP trainer, De Maskermaker, Oplossingsgericht coachen en nog veel meer.
    </p>
    <a
      href="https://www.linkedin.com/in/mirjam-kroon-hoekendijk-0a99104/"
      target="_blank"
      class="btn"
      style="margin-top: 1rem;"
    >
      Bekijk LinkedIn-profiel
    </a>
  </div>

  <div class="container padded">
    <div class="besides-work">
      <div class="besides-text">
        <h2>En naast werk?</h2>
        <p class="para">
          Oudste dochter uit een ondernemend gezin, waar buiten de lijntjes kleuren meer gewaardeerd werd dan erbinnen. De minder ontwikkelde kant in mijn familie was je verbinden met de omgeving. Ik vermoed dat dat mede reden is geweest dat "hoe" je te verbinden een belangrijk onderwerp in mijn werk is geworden. Je leert mensen vaak dat wat je zelf moet leren.
        </p>
        <img src="/assets/images/besidesWork.webp" alt="Naast werk" class="besides-img-mobile" />
        <p class="para">
          Getrouwd met mijn jeugdliefde (Dick), moeder van 3 volwassen kinderen. Enthousiast over wonen op het platteland (Hoornaar vlakbij Gorinchem). Dol op tuinieren, mijn katten en kippen en buiten zwemmen (ja, ook s' winters). Stilte-retraites en lange wandeltochten (van Florence naar Assisi en in 2024 hopelijk van Rome naar Assisi).
        </p>
      </div>
      <img src="/assets/images/besidesWork.webp" alt="Naast werk" class="besides-img-desktop" />
    </div>
  </div>
</section>

<section class="section-teal">
  <div class="container" style="text-align: center;">
    <h2 style="padding: 2rem 0;">Samenwerkingspartners</h2>
    {#each samenwerkingsPartners as partner}
      <PeopleCard {partner} />
    {/each}
  </div>
</section>

<style>
  .teal-text {
    color: var(--color-teal);
  }

  .padded {
    padding: 1rem;
  }

  .para {
    margin-bottom: 1rem;
  }

  .hero-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .hero-img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .hero-flex {
      flex-direction: row;
    }
    .hero-img {
      width: 50%;
    }
  }

  .teal-flex {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }

  @media (min-width: 992px) {
    .teal-flex {
      flex-direction: row;
    }
    .scroll-col {
      flex: 1;
    }
    .tree-desktop {
      flex: 1;
    }
  }

  .scroll-col {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .tree-desktop {
    display: none;
  }

  @media (min-width: 992px) {
    .tree-desktop {
      display: block;
    }
    .tree-mobile {
      display: none;
    }
    .mobile-only {
      display: none;
    }
  }

  .tree-mobile {
    width: 100%;
  }

  .attribution {
    text-align: right;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  .besides-work {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .besides-work {
      flex-direction: row;
      align-items: stretch;
    }
    .besides-text {
      flex: 1;
    }
    .besides-img-desktop {
      width: 40%;
      object-fit: cover;
    }
    .besides-img-mobile {
      display: none;
    }
  }

  .besides-img-desktop {
    display: none;
  }

  @media (min-width: 768px) {
    .besides-img-desktop {
      display: block;
    }
  }
</style>
