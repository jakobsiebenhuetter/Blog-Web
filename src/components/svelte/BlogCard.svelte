<script>
import Button from "./Button.svelte";
const {topic, handleClick} = $props();

//TODO - Wenn ein man nicht eingeloggt ist, dann soll beim versuch die Kommentarfunktion zu klicken, eine toastmessage bekommen, dass man sich zuerst einlogen soll
</script>

<li class={topic.disabled ? 'disabled blog-card' : 'blog-card'}>
    <a href={topic.href}>
        <div class="title-wrapper">
            <p class="title">{topic.title}</p>
            <p>{topic.description}</p>
            <span>{topic.date}</span>
        </div>
        <div class="button-container">
        <span class="desktop">
            <Button text='Kommentieren'  handleClick={(e) => handleClick(e)}></Button>
        </span >
            <span class="mobile">
                <Button text='...' handleClick={(e) => handleClick(e)}></Button>
            </span>
        </div>
    </a>
</li>

<style>
    

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(118, 115, 122);
        color: white;
        margin: 15px 0;
        border-radius: 6px;
        outline: 2px solid rgba(99, 102, 241, 0);
        outline-offset: 0px;
    }

    li:hover {
        background-color: rgb(95, 92, 97);
    }

    li:active {
        background-color: rgb(47, 46, 49);
    }

    .title-wrapper {
        max-width: 800px;
    }

    a {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        color: white;
        width: 100%;
        padding: 10px;
    }

    .title {
        margin: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        background-color: black;
        padding: 0 8px;
        border-radius: 6px;
    }

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 4px;
        margin: 6px;
    }


    .disabled,
    .disabled > a {
        color: #999;
        background-color: #e0e0e0;
        cursor: not-allowed;
        pointer-events: none;
    }

    .button-container .mobile {
        display: none;
    }

    @media(max-width: 767px) {
        li {
            text-align: center;
        }

        .desktop {
            display: none;
        }

        .button-container .mobile {
            display: block;
        }
    }
</style>

