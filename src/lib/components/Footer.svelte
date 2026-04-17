<script lang="ts">
  const contactGegevens = [
    'Mirjam Kroon-Hoekendijk',
    'Dorpsweg 71',
    '4223 ND',
    'Hoornaar',
    'Zuid-Holland',
    'mirjam@kroontrainingadvies.com',
    '0653507815',
  ];
</script>

<footer>
  <div class="container">
    <div class="footer-top">
      <h1>Contact</h1>
      <a href="/contact" class="btn">Neem contact op</a>
    </div>

    {#each contactGegevens as gegeven}
      <p>{gegeven}</p>
    {/each}

    <hr class="divider" />

    <div class="footer-bottom">
      <div class="footer-links">
        <a href="/assets/docs/Leveringsvoorwaarden.pdf" target="_blank">Algemene voorwaarden</a>
        <a href="/assets/docs/MirjamKroonTrainingEthischecode.pdf" target="_blank">Ethische code</a>
      </div>
      <a href="https://www.kibbelingmedia.nl/" target="_blank">2023 Kibbeling Media. All rights reserved.</a>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--color-blue);
    color: white;
    padding: 1rem 0 2rem;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }

  p {
    margin: 0.15rem 0;
  }

  .divider {
    border: none;
    border-top: 1px solid white;
    margin: 1.5rem 0;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    color: white;
    text-decoration: underline;
  }

  .btn {
    text-decoration: none;
  }
</style>
