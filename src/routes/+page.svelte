<script lang="ts">
    let a = $state(0);
    let b = $state(0);
    let sum = $derived(a + b);
</script>

<svelte:head>
    <title>Adder</title>
</svelte:head>

<div class="container mt-5">
    <h1>Adder</h1>

    <div class="d-flex align-items-center gap-2 my-4">
        <input type="number" class="form-control w-auto" bind:value={a} />
        <span>+</span>
        <input type="number" class="form-control w-auto" bind:value={b} />
        <span>=</span>
        <strong>{sum}</strong>
    </div>

    <p>
        <a href="https://github.com/mrpg/svelte-adder" target="_blank" class="text-muted">GitHub</a>
    </p>
</div>
