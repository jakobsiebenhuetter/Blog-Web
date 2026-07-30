

<script>
    import {getToastText, setToastText} from './shared.state.svelte.js';
    const {text} = $props();

    function a(texte) {
        setToastText(texte);
    }

</script>

<div class="toast">
    {#if getToastText()}
        <p>{getToastText()}</p>
    {/if}
    <button onclick={() => a('1')}>1</button>
    <button onclick={() => a('2')}>2</button>
    <button onclick={() => a(text)}>2</button>
</div>

<style>
    .toast {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: rgb(143, 143, 247);
    }
</style>