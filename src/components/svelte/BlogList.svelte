<script lang="ts">
  import {onMount} from 'svelte';
  import BlogCard from "./BlogCard.svelte";
  import CommentWindow from "./CommentWindow.svelte";
  import {setToastText} from "./shared.state.svelte.js";
  import supabase from "../../supabase/supabaseClient.js";

  type WindowState = {
    blogId: string | null;
    username: string | null;
  };

  const {topics} = $props();
  let windowState: WindowState = $state(
    {
      blogId: null,
      username: null
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
  
  async function openCommentWindow(e: Event, topicId: string) {
    e.preventDefault();
    e.stopPropagation();

    if(! await checkIfUserExists()) {
      windowState.blogId = null;
      setToastText("Bitte melde dich an");
      return;
    }
    console.log("Opening comment window for topicId:", topicId);
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

      const {data: userData, error: userError} = await supabase.from('users').select('*').eq('user_id', data.session.user.id);
      if(userError) {
        throw new Error(userError.message);
      }

      windowState.username = userData[0].username;
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
    <BlogCard topic={topic} handleClick={(event: Event) => openCommentWindow(event, topic.id)}></BlogCard>
    {/if}
  {/each}

</div>

{#if windowState.blogId}
  <CommentWindow blogid={windowState.blogId} username={windowState.username} closeCommentWindow={closeCommentWindow}/>
{/if}

<svelte:window
  onclick={() => {
    closeCommentWindow();
  }}
/>

<style>

</style>
