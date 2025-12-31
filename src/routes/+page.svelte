<script lang="ts">
    let a = $state(0);
    let b = $state(0);
    let sum = $derived(a + b);
</script>

<svelte:head>
    <title>Adder</title>
</svelte:head>

<main class="container mt-5 text-center text-sm-start">
    <h1>Adder</h1>

    <div class="row g-2 align-items-center justify-content-center justify-content-sm-start my-4">
        <div class="col-12 col-sm-auto">
            <label for="input-a" class="visually-hidden">First number</label>
            <input
                id="input-a"
                type="number"
                inputmode="numeric"
                class="form-control"
                bind:value={a}
            />
        </div>
        <div class="col-12 col-sm-auto" aria-hidden="true">
            <span>+</span>
        </div>
        <div class="col-12 col-sm-auto">
            <label for="input-b" class="visually-hidden">Second number</label>
            <input
                id="input-b"
                type="number"
                inputmode="numeric"
                class="form-control"
                bind:value={b}
            />
        </div>
        <div class="col-12 col-sm-auto" aria-hidden="true">
            <span>=</span>
        </div>
        <div class="col-12 col-sm-auto">
            <strong aria-live="polite" aria-label="Sum: {sum}">{sum}</strong>
        </div>
    </div>

    <p>
        <a
            href="https://github.com/mrpg/svelte-adder"
            target="_blank"
            rel="noopener"
            class="text-muted">GitHub</a
        >
    </p>
</main>

<style>
    @media (max-width: 575.98px) {
        input.form-control {
            text-align: center;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
</style>
