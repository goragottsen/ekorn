<script lang="ts">
  let { toolbar, title, children } = $props();
</script>

<div class="container">
    {#if title}
        <h1 class="title">{title}</h1>
    {/if}
    {@render toolbar()}
    <div class="grid">
        {@render children()}
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        width: 1024px;
        margin: 0 auto;
        color: var(--color-primary);
        flex: 1;
        height: 100%;
        padding-bottom: var(--spacing-medium);
    }

    h1{
        font-size: 32px;
        font-weight: 700;
        font-family: var(--tahoma-font);
        margin-top: var(--spacing-xlarge);
        margin-bottom: var(--spacing-large);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-large);
    }

    /* Tablets and mobile */
    @media (max-width: 1024px) {
        .container {
            width: 90%;
        }
    }
</style>
