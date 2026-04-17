<script lang="ts">
  interface Props {
    review: string;
    name: string;
    company?: string;
  }
  let { review, name, company }: Props = $props();
</script>

<div class="review">
  <p class="review-text">"{review}"</p>
  <div class="attribution">
    <span>{name}</span>
    {#if company}
      <span>{company}</span>
    {/if}
  </div>
</div>

<style>
  .review {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .review-text {
    font-style: italic;
    margin-bottom: 1rem;
  }

  .attribution {
    border-left: 1px dotted green;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-height: 60px;
    justify-content: center;
  }
</style>
