

<script>
    import {fly} from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import {getToastText, setToastText} from './shared.state.svelte.js';
    
    const {text} = $props();

    function setText(val) {
        setToastText(val);
    }

</script>

{#if getToastText()}
<div class={{"toast": true, "show": getToastText() !== '',
 "hide": getToastText() === ''}}
 transition:fly={{ y: -20, duration: 300, easing: cubicOut }}>
    <p>{getToastText()}</p>
</div>
{/if}

<style>

    .toast {
        opacity: 0;
        position: fixed;
        top: 100px;
        right: 100px;
        display: flex;
        border-radius: 10px;
        padding: 4px;
        width: 200px;
        height: 50px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: rgb(143, 143, 247);
    }

    .toast.hide {
        display: none;
        opacity: 0;
    }

    .toast.show {
        display: flex;
        opacity: 1;
    }
</style>