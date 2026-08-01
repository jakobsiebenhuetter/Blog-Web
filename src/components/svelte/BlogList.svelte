<script>
import {onMount} from 'svelte';
  import BlogCard from "./BlogCard.svelte";
  import CommentWindow from "./CommentWindow.svelte";
  import {setToastText} from "./shared.state.svelte.js";
  import supabase from "../../supabase/supabaseClient.js";

  const {topics} = $props();
  let windowState = $state(
    {
      blogId: null,
      userId: null
    }
  );

  onMount(() => {
    async function checkUserSession() {
      if(await checkIfUserExists()) {
        if(localStorage.getItem('logedin_init') === 'true') {  
          setToastText("Du bist eingeloggt und kannst kommentieren.");
          localStorage.removeItem('logedin_init');
        }
      }
    }

    checkUserSession();

    return () => {
      console.dir("BlogList unmounted");
    };
  });
  
  async function openCommentWindow(e, topicId) {
    e.preventDefault();
    e.stopPropagation();

    if(! await checkIfUserExists()) {
      windowState.blogId = null;
      setToastText("Bitte melde dich an");
      return;
    }
    windowState.blogId = topicId;
  }


  async function checkIfUserExists() {
    try {
      const {data, error} = await supabase.auth.getSession();
      console.log("User session data:", data);
      if(error) {
        throw new Error(error.message);
      }

      if(!data.session) {
        // redirectToLogin();
        return false;
      }
      windowState.userId = data.session.user.id;
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
    windowState.blogId = null;
  }
</script>

<div>
  {#each topics as topic}
  {#if topic.id}
    <BlogCard topic={topic} handleClick={(event) => openCommentWindow(event, topic.id)}></BlogCard>
    {/if}
  {/each}

</div>

{#if windowState.blogId}
  <CommentWindow blogid={windowState.blogId} userid={windowState.userId} closeCommentWindow={closeCommentWindow}/>
{/if}

<svelte:window
  onclick={() => {
    closeCommentWindow();
  }}
/>

<style>

</style>
