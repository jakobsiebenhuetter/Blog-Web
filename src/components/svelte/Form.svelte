<script>
import supabase from "../../supabase/supabaseClient";
let email = $state('');
let password = $state('');
let infomessage = $state('');

$inspect(email);
$inspect(password);

async function signup(event) {
    event.preventDefault();
    const {data, error} = await supabase.auth.signUp(
        {
            email: email,
            password: password
        }
    );

    if(error) {
        infomessage = error.message;
    } else {
        console.log(data);
    }
    email = '';
    password = '';
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
</script>

<form onsubmit={signup} onreset={reset}>
    <p>
        <label for="email">Email</label>
        <input id="email" type="email" bind:value={email} onchange={emailChangeHandle}>
    </p>
    <p>
        <label for="password">Password</label>
        <input id="password" type="password" bind:value={password} onchange={passwordChangeHandle}>
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
    min-width: 100px;
  }

  .btn-wrapper {
    display: inline-flex;
  }

  form p {
    margin: 6px;
  }

  button {
    margin: 12px;
  }

  span {
    font-size: small;
    color: red;
  }
</style>