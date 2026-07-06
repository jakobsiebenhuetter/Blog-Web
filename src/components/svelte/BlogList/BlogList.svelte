<script>
  import BlogCard from "../BlogCard/BlogCard.svelte";
  import CommentWindow from "../CommentWindow/CommentWindow.svelte";

  const {topics} = $props();
  let showCommentWindow = $state(false);

  
  function openCommentWindow(e) {
    e.preventDefault();
    e.stopPropagation();
    showCommentWindow = true;
  }

  function closeCommentWindow() {
    showCommentWindow = false;
  }
</script>

<div>
  {#each topics as topic}
    <BlogCard topic={topic} handleClick={openCommentWindow}></BlogCard>
  {/each}

</div>

<!-- {#if showCommentWindow}
  <CommentWindow closeCommentWindow={closeCommentWindow}/>
{/if} -->

<svelte:window
  onclick={() => {
    closeCommentWindow();
  }}
/>

<style>

</style>
