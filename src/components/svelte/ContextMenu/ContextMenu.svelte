<script>
let {posX, posY} = $props();

const items = [
    { 
        id: 'Kommentieren',
        label: 'Kommentieren',
        onClick: () => {
            console.log('Kommentieren clicked');
        },
        disabeld: true
    },
    { 
        id: 'JSFiddle',
        label: 'JSFiddle',
        onClick: () => {
            window.location.href = 'https://jsfiddle.net/';
        },
        children: [
            { 
                id: 4,
                label: 'Item 2.1',
                onClick: () => {
                    console.log('Item 2.1 clicked');
                },
            },
            { 
                id: 5,
                label: 'Item 2.2',
                onClick: () => {
                    console.log('Item 2.2 clicked');
                },
            },
        ],
    },
    { 
        id: 'Drucken',
        label: 'Drucken',
        onClick: () => {
            console.log('Drucken clicked');
            print();
        },
    },
];

</script>

<div class="context-menu" style:left = {posX + 'px'} style:top = {posY + 'px'}>
    <ul>
        {#each items as item}
        <li class={item.disabeld ? 'disabled' : ''}>
            <button onclick={item.onClick} id={item.id}>{item.label}</button>
        </li>
        {/each}
    </ul>
</div>


<style>

.context-menu {
    top: 0;
    left: 0;
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

ul {
    list-style: none;
    margin: 5px;
    padding: 0;
}

li {
    display: flex;
    justify-content: center;
    width: 200px;
    margin: 2px;
    padding: 0;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background: none;
    text-align: left;
    background-color: #f0f0f0;
}

button:hover {
    background-color: #d7d6d6;
}

li.disabled button {
    color: #999;
    cursor: not-allowed;
    background-color: #e0e0e0;
    pointer-events: none;
}
</style>