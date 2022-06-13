<script lang="ts">
    import {loggedAccount} from "../../stores/Betting";
    import {AccountManager, SignOut} from "../../stores/Accounts";
    import {onMount} from "svelte";
    import {auth, googleProvider} from "../../stores/Firebase";
    import {goto} from "$app/navigation";

    let image = "";
    let email = "";
    onMount(() => {
      image = localStorage.getItem('profilePic');
      email = loggedAccount.email;
      console.log(loggedAccount.bets)
    })

    const SignUpGoogle = async () => {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      let am = new AccountManager();

      let name = res.user.displayName;
      let email = res.user.email;
      localStorage.setItem('profilePic', res.user.photoURL);

      await am.SignUpUser(name, email);

      goto('/');
      setTimeout(()=>{window.location.reload()},300);


    };

    const LoginGoogle = async () => {

      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      let am = new AccountManager();

      localStorage.setItem('profilePic', res.user.photoURL);
      let email = res.user.email;

      await am.LogIn(email);
      //getFireUser();

      goto('/');
      setTimeout(()=>{window.location.reload()},300);
    };

</script>

<nav class="navbar navbar-expand-lg navbar-light border-bottom border-secondary w-100" id="navBar" >
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <a class="nav-link navText text-white" href="/">Home</a>
          <a class="nav-link navText text-white" href="/games">Games</a>
          <a class="nav-link navText text-white" href="/news">News</a>
          <a class="nav-link navText text-white" href="/betting">Betting</a>
          <a class="nav-link navText text-white" href="/about">About</a>
          
        </div>
      </div>
      {#if email == ""}
      <div class="d-flex">
        <div>
          <a class="nav-link navText text-white rounded" id="login" on:click={LoginGoogle}>Log In</a>
        </div>
        <div>
          <a class="nav-link navText rounded" id="signup" on:click={SignUpGoogle}>Sign Up</a>
        </div>
      </div>
        {:else}
        <div class="d-flex">

          <div>
            <a class="nav-link navText text-white rounded disabled">{loggedAccount.coins}  <img class="pb-2" src="../../../static/KiraCoinPNG.png" width="30"></a>
          </div>
            <div>
            <a class="nav-link navText rounded disabled">{loggedAccount.name} <img style="border-radius: 2em" src="{image}" width="40"></a>
          </div>
          <div>
            <a class="nav-link navText rounded" id="logout" on:click={SignOut} href="/">Log out</a>
          </div>
        </div>
      {/if}
    </div>
  </nav>

  
  <style>
      #navBar
      {
          background-color: #000000;
      }
      .navText
      {
        font-size: 1.6em;
        text-decoration: none;
        margin-left: 2rem;
        color:#E7DFDD;
      }
      #login
      {
        background-color: #A239CA;
      }
      #signup
      {
        border: solid #A239CA 0.1em;
        color: #A239CA;
        font-size: 1.6em;
        padding: 0.20em 0.5em;
        margin-left: 2em;
      }
      #logout
      {
        margin-left: 1.75em;
        border: solid #A239CA 0.1em;
        color: #A239CA;
        font-size: 1.6em;
        padding: 0.20em 0.5em;
        margin-left: 2em;
      }
  </style>