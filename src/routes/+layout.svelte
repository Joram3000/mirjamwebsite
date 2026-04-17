<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.ico" />
  <title>Mirjam Kroon Training & Advies</title>
  <meta name="description" content="Mirjam Kroon-Hoekendijk — coach en trainer voor teams en individuen op het gebied van samenwerking, communicatie en persoonlijke ontwikkeling." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.kroontrainingadvies.com" />
  <meta property="og:site_name" content="Mirjam Kroon Training & Advies" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.kroontrainingadvies.com/assets/images/mirjam6.webp" />
  <meta property="og:locale" content="nl_NL" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://www.kroontrainingadvies.com/assets/images/mirjam6.webp" />
</svelte:head>

<Navbar />
<main>
  {@render children()}
</main>
<Footer />

<style>
  main {
    min-height: calc(100vh - var(--navbar-height));
    padding-top: var(--navbar-height);
  }
</style>
