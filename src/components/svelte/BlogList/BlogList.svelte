<script>
  import BlogCard from "../BlogCard/BlogCard.svelte";

  import supabase from "../../../supabase/supabaseClient.js";

  const {topics} = $props();
  let showCommentWindow = $state(false);

  
  function openCommentWindow(e) {
    e.preventDefault();
    e.stopPropagation();
    checkIfUserExists();
    showCommentWindow = true;
  }

  async function checkIfUserExists() {
    try {
      const {data, error} = await supabase.auth.getSession();

      if(error) {
        throw new Error(error.message);
      }

       if(!data.session) {
        redirectToLogin();
      } else {
        // console.log("User exists:", data.session.user);
        redirecktCommentPage();
      }

      

    } catch(error) {
      console.error("Error checking user existence:", error);
    }
  }

  function redirectToLogin() {
    window.location.href = 'http://localhost:4321/Blog-Web/login';
  }

  function redirecktCommentPage() {
    window.location.href = 'http://localhost:4321/Blog-Web/comments-page';
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
