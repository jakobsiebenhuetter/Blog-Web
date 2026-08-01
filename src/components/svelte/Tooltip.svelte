<script>

let { posX, posY, text = 'Jetzt registrieren' } = $props();

const base = import.meta.env.BASE_URL; // z.B. "/Blog-Web/"

const tooltipWidth = 220;
const tooltipHeight = 60;
const margin = 10; // Mindestabstand zum Fensterrand

// gleiche Logik wie im ContextMenu: an den Rändern umklappen
$effect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // horizontal: ragt rechts raus -> nach links versetzen
    if (posX + tooltipWidth > windowWidth - margin) {
        posX = posX - tooltipWidth;
    }

    // vertikal: ragt unten raus -> nach oben versetzen
    if (posY + tooltipHeight > windowHeight - margin) {
        posY = posY - tooltipHeight;
    }
});
</script>

    <div
        class="tooltip"
        style:left={posX + 'px'}
        style:top={posY + 'px'}
        style:width={tooltipWidth + 'px'}
        role="tooltip"
    >
        <a href={`${base}signup`}>{text}</a>
    </div>

<style>
.tooltip {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #fff;
    padding: 8px 12px;
    border-radius: 6px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    font-size: 0.85rem;
    line-height: 1.3;
    z-index: 1000;
}

.tooltip a {
    color: #fff;
    text-decoration: underline;
}

.tooltip a:hover {
    color: #f0da36;
}
</style>
