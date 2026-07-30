<script>
import {onMount} from 'svelte';
  import BlogCard from "./BlogCard.svelte";
  import CommentWindow from "./CommentWindow.svelte";
  import {setToastText} from "./shared.state.svelte.js";
  import supabase from "../../supabase/supabaseClient.js";

  const {topics} = $props();
  let showCommentWindow = $state(false);

  onMount(() => {
    async function checkUserSession() {
      if(await checkIfUserExists()) {
        setToastText("Willkommen zurück!");
      } else {
        setToastText("Bitte logge dich ein, um Kommentare zu sehen.");
      }
    }

    checkUserSession();

    return () => {
      console.dir("BlogList unmounted");
    };
  });
  
  async function openCommentWindow(e) {
    e.preventDefault();
    e.stopPropagation();

    if(! await checkIfUserExists()) {
      showCommentWindow = false;
      return;
    }
      showCommentWindow = true;
  }


  async function checkIfUserExists() {
    try {
      const {data, error} = await supabase.auth.getSession();

      if(error) {
        throw new Error(error.message);
      }

      if(!data.session) {
        // redirectToLogin();
        return false;
      }
      return true;

    } catch(error) {
      console.error("Error checking user existence:", error);
    }
  }

  function redirectToLogin() {
    window.location.href = 'http://localhost:4321/Blog-Web/login';
  }

  function redirectToBlog() {
    window.location.href = 'http://localhost:4321/Blog-Web/blog';
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

{#if showCommentWindow}
  <CommentWindow closeCommentWindow={closeCommentWindow}/>
{/if}

<svelte:window
  onclick={() => {
    closeCommentWindow();
  }}
/>

<style>

</style>
