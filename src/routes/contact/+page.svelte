<section class="section-bg teal-text">
  <div class="container">
    <h1 class="page-title">Contact</h1>

    <div class="intro-flex">
      <img
        src="/assets/images/mirjam6.webp"
        alt="Mirjam Kroon"
        class="mirjam-img desktop-only"
      />
      <div class="contact-info">
        <p>
          Benieuwd naar wat ik voor jou of jouw organisatie kan betekenen? Neem
          gerust contact op om te kijken wat mogelijk is.
        </p>
        <p>
          Mirjam Kroon-Hoekendijk<br />
          Dorpsweg 71<br />
          4223 ND<br />
          Hoornaar Zuid-Holland<br />
          mirjam@kroontrainingadvies.com<br />
          0653507815
        </p>
      </div>
    </div>

    <hr class="divider" />

    <div class="route-flex">
      <div class="route-text">
        <h2>Route</h2>
        <p>
          Route Vanaf A27 afslag 25: neem de N214 richting Noordeloos, na 1,4 km
          linksaf bij de afslag Hoornaar. Op de T-splitsing rechtsaf, na 400 m
          vind je links de Lutjeswaardse Middenweg. Het kantoor is het eerste
          pand aan de rechterzijde. Parkeren voor de deur.
        </p>
        <p>
          Moeite met het vinden van het adres?<br />
          <a
            href="https://maps.app.goo.gl/5f3rxYd3TV7DKHmbA"
            target="_blank"
            class="map-link"
          >
            Zoek hier de route op via Google Maps!
          </a>
        </p>
      </div>
      <img
        src="/assets/images/googlemapsdorpsweg71.webp"
        alt="Google Maps Dorpsweg 71"
        class="map-img"
      />
    </div>
  </div>
</section>

<style>
  .teal-text {
    color: var(--color-teal);
  }

  .page-title {
    text-align: center;
    padding: 1.5rem 0;
  }

  .intro-flex {
    display: flex;
    gap: 1.5rem;
    align-items: stretch;
    margin-bottom: 1.5rem;
  }

  .mirjam-img {
    width: 50%;
    object-fit: cover;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: 768px) {
    .desktop-only {
      display: block;
    }
  }

  .divider {
    border: none;
    border-top: 1px solid var(--color-teal);
    margin: 2rem 0;
  }

  .route-flex {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: space-between;
    padding-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .route-flex {
      flex-direction: row;
      align-items: stretch;
    }
    .route-text {
      flex: 1;
      min-width: 0;
    }
    .map-img {
      flex: 1;
      min-width: 0;
      width: auto;
      object-fit: cover;
    }
  }

  .map-img {
    width: 100%;
  }

  .route-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .map-link {
    color: var(--color-teal);
    text-decoration: underline;
  }
</style>
