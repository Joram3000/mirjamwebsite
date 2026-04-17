<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="error-page">
  <h1>Oeps!</h1>
  <p>Er is iets misgegaan. Pagina niet gevonden.</p>
  <p class="status">{$page.status}</p>
  <a href="/" class="btn">Terug naar home</a>
</div>

<style>
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    gap: 1rem;
    text-align: center;
    padding: 2rem;
    color: var(--color-blue);
  }

  .status {
    font-size: 0.875rem;
    opacity: 0.6;
  }
</style>
