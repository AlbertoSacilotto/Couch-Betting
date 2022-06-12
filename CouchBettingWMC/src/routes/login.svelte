<script lang="ts">
    import {AccountManager} from "../stores/Accounts";

    let name,password;
    let am:AccountManager = new AccountManager();
    async function login(name:string, password:string)
    {
        if(name != undefined && password != undefined)
        console.log(await am.LogIn(name,password));
    }
</script>
<input placeholder="Username" bind:value="{name}">
<input placeholder="Password" bind:value="{password}">
<button class="btn btn-primary" on:click={login(name,password)}></button>