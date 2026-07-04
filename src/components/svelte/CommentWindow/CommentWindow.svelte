<script>
  import { onMount } from "svelte";
  import Button from "../Button/Button.svelte";

const {closeCommentWindow} = $props();
const comments = $state([]);
comments.push(
    {username: "User1", comment: "This is a comment.", created_at: "2024-06-01 10:00"},
    {username: "User2", comment: "This is another comment.", created_at: "2024-06-01 10:05"}
);
    
onMount(() => {
    console.log("CommentWindow mounted");
    
    return () => console.log("CommentWindow unmounted");
});


</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-backdrop" onclick={closeCommentWindow}>
    <div class="comment-window" onclick={(e)=> {e.stopPropagation()}}>
    <div class="close-button-wrapper">
        <Button class="close-button" text="X" circle=true handleClick={closeCommentWindow}></Button>
    </div>
        <div class="chat-wrapper">
            <div class="chat">
                {#each comments as comment}
                <div class="comment">
                    <div>{comment.created_at}</div>
                    <div class="comment">{comment.username}</div>
                    <div class="comment">{comment.comment}</div>
                </div>
                {/each}
            </div>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Tippe was ein..." />
            <button class="" onclick={sendComment}>icon</button>
        </div>
    </div>
</div>

<style>

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }

.comment-window {
    width: 700px;
    max-width: 90%;
    height: 550px;
    max-height: 85vh;
    background: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.comment {
    margin-bottom: 10px;
    padding: 5px;
    background-color: #f1f1f1;
    border-radius: 5px;
}

.chat-wrapper {
    flex: 1;
    display: flex;
    padding: 15px;
    overflow-y: auto;
    border-bottom: 1px solid #ccc;
}

.chat-wrapper > .chat {
    width: 100%;
    height: 100%;
    background-color: #bdb1b1;
    border-radius: 8px;
    padding: 10px;
    overflow-y: auto;
}

.input-wrapper {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
}

input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    /* border-radius: 4px; */
    margin-right: 10px;
}

/* button {
    padding: 10px 15px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
} */
.close-button-wrapper {
    width: 20px;
    height: 20px;
    margin: 7px;
    font-size: 12px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}




</style>