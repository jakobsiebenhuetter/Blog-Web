

<script>
    import {getToastText, setToastText} from './shared.state.svelte.js';
    const {text} = $props();

    function setText(val) {
        setToastText(val);
    }

</script>

{#if getToastText()}
<div class={{"toast": true, "show": getToastText() !== '', "hide": getToastText() === ''}}>
    <p>{getToastText()}</p>
</div>
{/if}

<style>
    .toast {
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
    }

    .toast.show {
        display: flex;
    }
</style>