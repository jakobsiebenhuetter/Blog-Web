<script lang="ts">
//TODO - Cleanup Code
import supabase from "../../supabase/supabaseClient";
import {redirect} from "../../util/util.ts";

let { mode = 'login'} = $props();
let email = $state('');
let password = $state('');
let username = $state('');
let infomessage = $state('');

//TODO - Einen Benutzernamen für die Anmeldung einführen, damit man nicht nur mit der Email-Adresse angemeldet ist. Dann kann man auch die Kommentare mit dem Benutzernamen versehen.
//TODO - RPC in Supabase einführen, dann kann man alles im backend machen
async function signup(event) {
    event.preventDefault();

    if(isValid(email) && isValid(password) && isValid(username)) {

        // Hier noch checken ob es diesen usernamen schon gibt !!!
        const {data, error} = await supabase.auth.signUp({
                email: email,
                password: password
            });

        // Hier noch ein Insert in die Tabelle "users" machen, um den Benutzernamen zu speichern. Dann kann man den Benutzernamen
        
        if(error) {
            infomessage = error.message;
        } else {
            infomessage = '';
            const {data: userData, error: userError} = await supabase.from('users').insert({
                username: username,
                email: email,
                user_id: data.user.id
            });
            redirect('blog/main');
        }
    }
    reset();
}

async function login(event) {
    infomessage = 'Loading...'
    event.preventDefault();
    if(isValid(username) && isValid(password)) {
        const {data: userData, error: userError} = await supabase.from('users').select('*').eq('username', username);
        const userCredentials = userData[0];
        console.log(userData);
        if(userCredentials) {
            email = userCredentials.email;
        } else {
            infomessage = 'Benutzer nicht gefunden, bitte registriere dich zuerst';
            return;
        }

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if(error) {
            infomessage = error.message;
        } else {
            console.log(data);
            infomessage = '';
            localStorage.setItem('logedin_init', 'true');
            redirect('blog/main');
        }
    }
    reset();
}

function reset() {
    email = '';
    password = '';
}

function emailChangeHandle(event) {
    email = event.target.value;
}

function passwordChangeHandle(event) {
    password = event.target.value;
}

function isValid(value) {
    if(!value.trim().length) {
        infomessage = 'Bitte etwas eingeben';
        return false;
    }
    return true;
}

</script>

<form onsubmit={mode === 'signup' ? signup : login} onreset={reset}>
    
    {#if mode === 'signup'}
    
    <label for="email">Email</label>
    <p>
        <input id="email" type="email" bind:value={email}>
    </p>

    {/if}

    <label for="username">Benutzername</label>
    <p>
        <input id="username" type="text" bind:value={username}>
    </p>

    <label for="password">Password</label>
    <p>
        <input id="password" type="password" bind:value={password}>
    </p>
    <div class="btn-wrapper">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
    </div>

    {#if infomessage}
    <span>{infomessage}</span>
    {/if}

</form>


<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: yellowgreen;
    padding: 12px;
    margin: auto;
    border-radius: 6px;
    width: 30%;
    min-width: 200px;
  }


  input {
    border-radius: 6px;
    border: 2px solid rgb(38, 255, 0);
    padding: 4px;
  }

  input:focus {
    outline: none;
    border: 2px solid rgba(51, 199, 25, 0.94);
  }

  .btn-wrapper {
    display: inline-flex;
  }

  form p {
    margin: 6px;
  }

  button {
    margin: 12px;
    border-radius: 6px;
    padding: 4px;
    font: inherit;
    font-size: medium;
  }

  
  button:hover {
    cursor: pointer;
  }

  button[type="reset"] {
    background-color: grey;
  }

  button[type="submit"] {
    background-color: red;
  }

  span {
    font-size: small;
    color: red;
  }
</style>