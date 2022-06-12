<script lang="ts">
    import { auth, googleProvider } from "../stores/Firebase.js";
    import { goto } from '$app/navigation';
    import {test} from "../stores/DataBase";

    const SignUpGoogle = async () => {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;

        localStorage.setItem('username', res.user.displayName);
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('profilePic', res.user.photoURL);
        localStorage.setItem('coins', res.user.phoneNumber);
        localStorage.setItem('uid', "1");

        console.log(user);
        test();
        await goto('./betting');
    };

</script>

<h1>Home</h1>
<button on:click={SignUpGoogle} class="btn btn-google btn-login text-uppercase fw-bold">
    <i class="bi bi-google" /> Sign up with Google
</button>
