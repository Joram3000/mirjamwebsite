<script lang="ts">
  import ClientReview from '$lib/components/ClientReview.svelte';
</script>

<section class="section-bg blue-text">
  <h1 class="page-title">Trainingen</h1>
  <img src="/assets/images/IMG_45522.webp" alt="Training" class="header-img" />

  <div class="container padded">
    <h2>
      Wegen ontstaan,<br />
      waar mensen samen gaan
    </h2>
    <p class="para">
      Het gaat bij trainingen steeds weer om het vergroten van impact door middel van communicatie.<br />
      De kracht van de stilte leren gebruiken, want we kletsen zo vaak door het waardevolle denkproces van de ander heen.<br /><br />
      Vaardigheden als de bal bij de ander leggen, zorgen dat mensen in beweging komen, zijn mooie trainingsonderwerpen. Ik zie een trainingscontext als een klein laboratorium, waarbij je inzoomt op een vaardigheid die je wilt vergroten, aanleren of verbeteren.<br /><br />
      Wanneer de koppeling aan de praktijk meegenomen wordt in het programma, kan een training een zinvolle manier van leren zijn. Het werkt resultaatverhogend wanneer een trainingsdag onderdeel is van een grotere beweging die ingezet wordt of bijvoorbeeld opgevolgd wordt door intervisie.<br /><br />
      Trainingen zijn altijd maatwerk, afhankelijk van de vraag van de opdrachtgever.
    </p>

    <div class="content-flex">
      <div class="list-col">
        <p>De meest recente trainingen:</p>
        <ul>
          <li>Leidinggeven met Lef (het moedige gesprek voeren).</li>
          <li>De Leider als teamcoach of individuele coach.</li>
          <li>
            Als een van de vaste trainers ben ik betrokken bij het programma 'De Informele Leider' van de Baak. Een programma waarbij je leert hoe je mensen mee kunt krijgen zonder formele macht.
          </li>
          <li>
            Insights-teamtrainingen. Insights Discovery® biedt een instrument om jezelf en anderen beter te begrijpen.
          </li>
          <li>Feedback-trainingen.</li>
        </ul>
      </div>
      <div class="icon-col desktop-only">
        <img src="/assets/images/training.png" alt="Training icon" />
      </div>
    </div>
  </div>
</section>

<section class="section-white blue-text">
  <div class="container padded">
    <h2>Review</h2>
    <ClientReview
      review="Niets dan lof! Wat een kundige en fijne vrouw! Rustige en niet oordelende persoon, komt prettig over. Mirjam heeft mij eerst vakkundig uit mijn comfortzone gehaald en mij, voor mijn gevoel iig, daarna onder zorgvuldige begeleiding gebracht waar ik nu sta."
      name="Deelnemer van een training"
    />
  </div>
</section>

<style>
  .blue-text { color: var(--color-blue); }
  .padded { padding: 1rem; }
  .para { margin-bottom: 1rem; }

  .page-title {
    text-align: center;
    padding: 1.5rem 0;
  }

  .header-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .header-img {
      height: 500px;
    }
  }

  .content-flex {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .content-flex {
      flex-direction: row;
    }
    .list-col {
      flex: 2;
    }
    .icon-col {
      flex: 1;
    }
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: 768px) {
    .desktop-only {
      display: block;
    }
  }
</style>
