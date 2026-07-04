<script>
  import ContextMenu from "../ContextMenu/ContextMenu.svelte";
  import BlogCard from "../BlogCard/BlogCard.svelte";
  // import CommentWindow from "../CommentWindow/CommentWindow.svelte";

  const {topics} = $props();
  let showMenu = $state(false);
  // let showCommentWindow = $state(false);
  let posX = $state(0);
  let posY = $state(0);

  function openContextMenu(e) {
    console.log("Context menu opened");
    e.preventDefault();
    e.stopPropagation();
    showMenu = true;
    posX = e.pageX;
    posY = e.pageY;
  }

  // function openCommentWindow(e) {
  //   e.stopPropagation();
  //   showCommentWindow = true;
  //   showMenu = false;
  // }

  // function closeCommentWindow() {
  //   showCommentWindow = false;
  // }
</script>

<div>
  {#each topics as topic}
    <BlogCard topic={topic} oncontextmenu={openContextMenu}></BlogCard>
  {/each}

  {#if showMenu}
    <ContextMenu posX={posX} posY={posY} openCommentWindow={openCommentWindow} />
  {/if}
</div>

<!-- {#if showCommentWindow}
  <CommentWindow closeCommentWindow={closeCommentWindow}/>
{/if} -->

<svelte:window
  onclick={() => {
    showMenu = false;
  }}
/>

<style>

</style>
