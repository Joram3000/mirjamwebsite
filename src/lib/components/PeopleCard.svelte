<script lang="ts">
  interface Partner {
    img?: string;
    name: string;
    text: string;
    link?: string;
  }
  interface Props {
    partner: Partner;
    size?: number;
  }
  let { partner, size = 200 }: Props = $props();
</script>

<div class="people-card">
  {#if partner.img}
    <img src={partner.img} alt={partner.name} style="width: {size}px;" class="partner-img" />
  {/if}
  <div class="partner-info">
    <h1>{partner.name}</h1>
    <p>{partner.text}</p>
  </div>
</div>

<style>
  .people-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding-bottom: 1.5rem;
  }

  .partner-img {
    height: auto;
    object-fit: cover;
    max-width: 100%;
  }

  .partner-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
  }

  h1 {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    .people-card {
      flex-direction: row;
      gap: 2rem;
    }

    .partner-img {
      flex-shrink: 0;
    }
  }

  @media (max-width: 767px) {
    .partner-img {
      width: 100% !important;
    }
  }
</style>
