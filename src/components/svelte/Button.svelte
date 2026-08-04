<script lang="ts">
let {  handleClick = null, text = '', classes } = $props();
</script>

<button onclick={handleClick} class={classes}>{text}</button>

<style>

  button {
    font-family: ui-monospace, "Cascadia Code", Consolas, monospace;;
    display: flex;
    justify-content: center;
    background-color: transparent;
    align-items: center;
    color: goldenrod;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
  }

  button:hover {
    background-color: #7e8081;
  }

  button.circle {
    font-size: 12px;
    border-radius: 50%;
  }

   button.circle:hover {
    background-color: red;
  }

</style>
