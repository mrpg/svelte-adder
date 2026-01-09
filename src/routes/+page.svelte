<script lang="ts">
    let a: number | null = $state(0);
    let b: number | null = $state(0);
    let sum = $derived((a ?? 0) + (b ?? 0));
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
                onfocus={() => a === 0 && (a = null)}
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
                onfocus={() => b === 0 && (b = null)}
            />
        </div>
        <div class="col-12 col-sm-auto" aria-hidden="true">
            <span>=</span>
        </div>
        <div class="col-12 col-sm-auto">
            <strong aria-live="polite" aria-label="Sum: {sum}">
                {`${sum}`.replace("-", "\u2212")}
            </strong>
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
