<script>
import supabase from "../../supabase/supabaseClient";
import Button from "./Button.svelte";
import {onMount} from 'svelte';

let show = $state(false);

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
    show = false;
    window.location.href = `${window.location.origin}/Blog-Web/blog/main`
}

async function checkSession() {
    const {data} = await supabase.auth.getSession();
    console.log(data.session);
    if(data.session) {
        show = true;
    } else {
        show = false;
    }
}
onMount(async () => {
   await checkSession()
});
</script>

{#if show}
<Button handleClick={logout} text="Logout"></Button>
{/if}


<style>

</style>