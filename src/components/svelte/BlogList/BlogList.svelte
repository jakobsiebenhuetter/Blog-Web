<script>
  import ContextMenu from "../ContextMenu/ContextMenu.svelte";
  import BlogCard from "../BlogCard/BlogCard.svelte";
  // import { topics } from "../../../assets/data/blog/blog.json";

  const {topics} = $props();
  let showMenu = $state(false);
  let posX = $state(0);
  let posY = $state(0);

  function openContextMenu(e) {
    console.log("Context menu opened");
    e.preventDefault();
    e.stopPropagation();
    showMenu = true;
    posX = e.clientX;
    posY = e.clientY;
  }
</script>

<div>
  {#each topics as topic}
    <BlogCard topic={topic} oncontextmenu={openContextMenu}></BlogCard>
  {/each}

  {#if showMenu}
    <ContextMenu {posX} {posY} />
  {/if}
</div>

<svelte:window
  oncontextmenu={() => {
    showMenu = false;
  }}
  onclick={() => {
    showMenu = false;
  }}
/>
