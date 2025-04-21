<script lang="ts">
    let { sortStudents, filterStudents, sorted, filtered, disabled } = $props();
</script>

<div class="container">
    <button onclick={sortStudents} disabled={disabled}>
        {sorted ? 'Show Default' : 'Sort by Name'}
    </button>
    <button onclick={filterStudents} disabled={disabled}>
        {filtered ? 'Show All' : 'Show Active'}
    </button>
</div>

<style>
    .container {
        margin-bottom: var(--spacing-medium);
        gap: var(--spacing-medium);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    }

    button {
        min-width: 150px;
        background-color: var(--color-primary);
        color: var(--color-white);
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--color-secondary);
    }

    button:disabled {
        background-color: var(--color-disabled);
        cursor: not-allowed;
    }
</style>