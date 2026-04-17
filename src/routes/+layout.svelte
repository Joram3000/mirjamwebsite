<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.ico" />
  <title>Mirjam Kroon Training & Advies</title>
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
