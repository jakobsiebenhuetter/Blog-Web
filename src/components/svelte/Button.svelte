<script>
let {  handleClick = null, text = '', circle = false } = $props();


</script>

<button onclick={handleClick} class={circle ? 'circle': ''}><div class="text">{text.toUpperCase()}</div></button>

<style>

  div.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: goldenrod;
    font-family:
      Comic Sans MS,
      cursive;
    /* font-size: 1.2em; */
  }
  button {
    display: flex;

    justify-content: center;
    background-color: transparent;
    align-items: center;
    color: white;
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
