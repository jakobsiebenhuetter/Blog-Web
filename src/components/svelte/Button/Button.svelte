<script>
  import { text } from "./dummyData.json";
  import Text from "../Text/Text.svelte";

  // let name = 'Hello World :-)';
  // if (text) name = text;

  let counter = $state(0);

  function handleClick() {
    // alert('Svelte Button clicked!');
    counter++;
  }
</script>

<button class="btn" onclick={handleClick}>{text.toUpperCase()}<Text></Text><span>{counter}</span><span>{counter === 0 || counter === 1 ? "Time" : "Times"} </span></button>

<style>
  .btn {
    display: flex;
    gap: 15px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  span {
    color: goldenrod;
    font-family:
      Comic Sans MS,
      cursive;
    font-size: 1.2em;
  }
</style>
