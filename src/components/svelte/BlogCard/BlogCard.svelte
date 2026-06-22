<script>
import Button from "../Button/Button.svelte";
const {topic, oncontextmenu} = $props();

</script>

<li class={topic.disabled ? 'disabled blog-card' : 'blog-card'}>
    <a href={topic.href}>
        <div>
            <p class="title">{topic.title}</p>
            <p>{topic.description}</p>
            <span>{topic.date}</span>
        </div>
        <div class="button-container">
            <Button text={'\u22EF'}  handleClick={oncontextmenu}></Button>
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
        padding: 10px;
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

    a {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        color: white;
        width: 100%;
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
        width: 50px;
        height: 4px!important;
        margin: 6px;
    }


    .disabled,
    .disabled > a {
        color: #999;
        background-color: #e0e0e0;
        cursor: not-allowed;
        pointer-events: none;
    }
</style>

