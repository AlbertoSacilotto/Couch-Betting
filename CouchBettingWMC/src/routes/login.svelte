<script lang="ts">
    import { auth, googleProvider } from "../stores/Firebase.js";
    import { goto } from '$app/navigation';
    import {addFireUser, getFireUser} from "../stores/DataBase";
    import {AccountManager} from "../stores/Accounts";

    const SignUpGoogle = async () => {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        let am = new AccountManager();

        let name = res.user.displayName;
        let email = res.user.email;

        am.SignUpUser(name, email);

        goto('/');
        setTimeout(()=>{window.location.reload()},300);
    };

    const LoginGoogle = async () => {

        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        let am = new AccountManager();

        let email = res.user.email;

        am.LogIn(email);
        //getFireUser();

        goto('/');
        setTimeout(()=>{window.location.reload()},300);
    };

</script>

<h1>Home</h1>
<button on:click={SignUpGoogle} class="btn btn-google btn-login text-uppercase fw-bold">
    <i class="bi bi-google" /> Sign up with Google
</button>

<button on:click={LoginGoogle} class="btn btn-google btn-login text-uppercase fw-bold">
    <i class="bi bi-google" /> Login with Google
</button>
