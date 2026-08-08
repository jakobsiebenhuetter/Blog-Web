<script lang="ts">
import supabase from "../../supabase/supabaseClient";

import { onMount } from "svelte";
import Button from "./Button.svelte";

type Comment = {
    username: string;
    comment: string;
    created_at: string;
    me: boolean;
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
        const data = await getData();
        comments.push(...data);
        loading = "";
    };

    fetchData();

    return () => {
        console.dir("CommentWindow unmounted");
    }
});

function deleteComment() {
    //TODO - Implement delete comment functionality
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
    comments.push(...await getData());
}

async function getComments() {
    let comments: any = null;
    const response = await supabase.from('comments').select().eq('blog_id', blogid);
    comments = response.data;
    return comments;
}

async function getUsers() {
    let users: any = null;
    const {data, error} = await supabase.from('users').select('*');
    users = data;
    return users;
}

async function getData() {
    const transformedData = [];
    try {
        const comments = await getComments();
        const users = await getUsers();
        const {data} = await supabase.auth.getSession();
        console.log(data)
        let i = 0;
        while(i < comments.length)
        {
            let j = 0;
            while(j < users.length)
            {
                if(comments[i].user_id === users[j].user_id)
                {
                    transformedData.push({
                        username: users[j].username,
                        comment: comments[i].comment,
                        created_at: comments[i].created_at,
                        me: users[j].user_id === data?.session?.user.id
                    });
                }
                j++;
            }
            i++;
        }

    }catch (error) {
        console.error("Error fetching data:", error);
    }

    console.log("Transformed data:", transformedData);
    return transformedData;
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

        <div class="header">
            <div class="close-button-wrapper">
                <Button classes="close-button" text="X" handleClick={closeCommentWindow}></Button> 
            </div>
        </div>
        <div class="chat-wrapper">
            <div class={{'chat': true, 'loading': loading}}>
                {#if loading}
                <div>{loading}</div>
                
                {:else if comments.length > 0}
                
                {#each comments as comment}
                
                <div class="comment">
                    <div>{transformDate(comment.created_at)}</div>
                    <div>
                        <span class={{'username': true, 'me': comment.me}}>
                            {comment.username}
                        </span>
                    </div>
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

.username {
    font-weight: bold;
    background-color: #e0e0e0;
}

.me {
    font-weight: bold;
    background-color: #ffd700;
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

.header {
     width: 100%;
     display: flex;
     justify-content: flex-end;
     align-items: center;

}
.close-button-wrapper {
    width: 20px;
    height: 20px;
    margin: 7px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

</style>