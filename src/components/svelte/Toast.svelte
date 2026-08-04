

<script lang="ts">
    import {fly} from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import {getToastText, setToastText} from './shared.state.svelte.js';
    
    const {text} = $props();

    function setText(val: string) {
        setToastText(val);
    }

</script>

{#if getToastText()}
<div class={{"toast": true}}
 transition:fly={{ y: -20, duration: 300, easing: cubicOut }}>
    <p>{getToastText()}</p>
</div>
{/if}

<style>

    .toast {
        position: fixed;
        z-index: 3000;
        text-align: center;
        top: 100px;
        right: calc(50% - 100px);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding: 4px;
        width: 200px;
        min-height: 50px;
        flex-direction: row;
        background-color: rgb(143, 143, 247);
    }

</style>