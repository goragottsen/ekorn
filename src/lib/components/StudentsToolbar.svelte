<script lang="ts">
    let { sortStudents, filterStudents, sorted, filtered } = $props();
</script>

<div class="container">
<button onclick={sortStudents}>
    {sorted ? 'Show Default' : 'Sort by Name'}
</button>
<button onclick={filterStudents}>
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
        background-color: #4B3D47;
        color: #F7F3ED;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #6C5B7B;
    }
</style>