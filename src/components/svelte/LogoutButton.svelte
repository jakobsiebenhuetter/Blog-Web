<script>
import supabase from "../../supabase/supabaseClient";
import Button from "./Button.svelte";
import {onMount} from 'svelte';
import {setToastText} from "./shared.state.svelte.js";
let show = $state(false);

onMount(async () => {
   await checkSession()
});

async function logout() {
    try {
        const { data, error } = await supabase.auth.signOut();
        if(error) {
            throw new Error();
        }
    } catch(error) {
        console.log('Fehler beim Logout')
        return;
    }
    console.log('Erfolgreich ausgeloggt')
    setToastText("Du hast dich erfolgreich abgemeldet.");
    show = false;
}

async function checkSession() {
    const {data} = await supabase.auth.getSession();
    if(data.session) {
        show = true;
    } else {
        show = false;
    }
}

</script>

{#if show}
<Button handleClick={logout} text="Abmelden"></Button>
{/if}
