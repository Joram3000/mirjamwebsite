<script lang="ts">
  interface Card {
    icon: string;
    title: string;
    text: string;
    buttonText: string;
    link: string;
  }
  interface Props {
    card: Card;
  }
  let { card }: Props = $props();
</script>

<div class="card">
  <img src={card.icon} alt={card.title} class="icon" />
  <h2>{card.title}</h2>
  <div class="card-body">
    <p>{card.text}</p>
    <a href={card.link} class="btn full-width">{card.buttonText}</a>
  </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 1rem;
    gap: 0.75rem;
  }

  .icon {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  h2 {
    font-size: 1.25rem;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    gap: 1rem;
  }

  p {
    text-align: center;
  }

  .full-width {
    width: 100%;
    text-align: center;
  }
</style>
