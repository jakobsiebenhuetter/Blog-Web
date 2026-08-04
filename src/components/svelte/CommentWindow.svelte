<script lang="ts">
import supabase from "../../supabase/supabaseClient";

import { onMount } from "svelte";
import Button from "./Button.svelte";

type Comment = {
    username: string;
    comment: string;
    created_at: string;
}

const {closeCommentWindow, blogid, username} = $props();
let comments: Comment[] = $state([]);
let message = $state("");
let loading = $state("");

const dummyComments = [
    {username: "User1", comment: "This is a comment.", created_at: "2024-06-01 10:00"},
    {username: "User2", comment: "This is another comment.", created_at: "2024-06-01 10:05"}
];
    
onMount(() => {
    // fetchComments();
    const fetchData = async () => {
        loading = "Loading ...";
        await getDatabaseDataOrDummy();
        loading = "";
    };

    fetchData();

    return () => {
        console.dir("CommentWindow unmounted");
    }
});

async function getDatabaseDataOrDummy(dummy = false) {
    if(dummy) // C++ Style :-)
    {
        console.log("Using dummy data for comments: ");
        comments.push(...dummyComments);
        return;
    }
    
    try {
        // Hier einen Join mit der Usertabelle erstellen, um den Benutzernamen zu bekommen.
        const response = await supabase.from('comments').select().eq('blog_id', blogid);

        const {data, error} = await supabase.from('users').select('*');

        if(response.error) {
            throw new Error('Das ist ein Error aus FetchComments :' + response.error.message);
        }
        console.log("Fetched comments:", data);
        for(const comment of response.data) {
            const user = data?.find(user => user.user_id === comment.user_id);
            if(user) {
                comment.username = user.username;
            } else {
                comment.username = "Unknown User";
            }
        }

        console.log("Fetched comments:", response.data);
        comments.push(...response.data);

    } catch (error) {
        console.error("(Aus catch) Error fetching comments:", error);
    }
}
const fetchComments = async () => {
    try {
        const response = await supabase.from('comments').select();

        if(response.error) {
            throw new Error('Das ist ein Error aus FetchComments :' + response.error.message);
        }

        console.log("Fetched comments:", response.data);

    } catch (error) {
        console.error("(Aus catch) Error fetching comments:", error);
    }
}

const sendComment = async () => {
    console.log(username);
    
    if(!message.trim()) {
        return;
    }
    
    try {
        const {data: userData, error: fetchError} = await supabase.from('users').select('*').eq('username', username);
        if(fetchError) {
            throw new Error('Das ist ein Error aus sendMessage :' + fetchError.message);
        }
        console.log("User data for sending comment:", userData);
        const {data, error} = await supabase.from('comments').insert({
            comment: message,
            username: username,
            user_id: userData[0].user_id,
            blog_id: blogid,
        }).eq('blog_id', blogid);

        if(error) {
            throw new Error('Das ist ein Error aus sendMessage :' + error.message);
        }
        console.log("Message sent:", data);
       
    } catch (error) {
        console.error("Error sending message:", error);
    }
     message = "";
    //  comments.length = 0;
    comments = [];
    await getDatabaseDataOrDummy();
}

function onEnter(event: KeyboardEvent) {
    if(event.key === "Enter") {
        sendComment();
    }
};

 function transformDate(date: string) {
    const dateObj = new Date(date);
     return dateObj.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
 }

</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-backdrop" onclick={closeCommentWindow}>
    <div class="comment-window" onclick={(e)=> {e.stopPropagation()}}>
        <div class="close-button-wrapper">
            <Button classes="close-button" text="X" handleClick={closeCommentWindow}></Button> 
        </div>
        <div class="chat-wrapper">
            <div class={{'chat': true, 'loading': loading}}>
                {#if loading}
                <div>{loading}</div>
                
                {:else if comments.length > 0}
                
                {#each comments as comment}
                
                <div class="comment">
                    <div>{transformDate(comment.created_at)}</div>
                    <div class="comment">Von {comment.username}</div>
                    <div class="comment">{comment.comment}</div>
                </div>
                
                {/each}
                
                {:else}
                
                <p>Keine Kommentare vorhanden</p>
                
                {/if}
            </div>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Tippe was ein..." bind:value={message} onkeydown={onEnter}/>
            <button onclick={sendComment}>Los</button> 
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

.chat.loading {
    display: flex;
    justify-content: center;
    align-items: center;
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