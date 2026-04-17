<script lang="ts">
  interface Props {
    text: string;
    subText: string;
  }
  let { text, subText }: Props = $props();
</script>

<div class="statement-bar">
  <h1>{text}</h1>
  <p>{subText}</p>
</div>

<style>
  .statement-bar {
    background-color: var(--color-blue);
    color: white;
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  p {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    .statement-bar {
      padding: 2rem;
    }
  }
</style>
