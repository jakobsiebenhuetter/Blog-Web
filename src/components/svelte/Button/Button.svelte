<script>
let { handleClick, text = '' } = $props();


</script>

<button id="btn" onclick={handleClick}><div class="text">{text.toUpperCase()}</div></button>


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
    font-size: 1.2em;
  }
  #btn {
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

  #btn:hover {
    background-color: #7e8081;
  }


</style>
