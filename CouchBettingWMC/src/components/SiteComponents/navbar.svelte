<script lang="ts">
    import {loggedAccount} from "../../stores/Accounts";
    console.log(loggedAccount)
</script>
{#if loggedAccount == null && loggedAccount == undefined}
<nav class="navbar navbar-expand-lg navbar-light border-bottom border-secondary w-100" id="navBar" >
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <a class="nav-link navText text-white" href="/">Home</a>
          <a class="nav-link navText text-white" href="/games">Games</a>
          <a class="nav-link navText text-white" href="/news">News</a>
          <a class="nav-link navText text-white" href="/fantasyleague">Fantasy Leauge</a>
          <a class="nav-link navText text-white" href="/betting">Betting</a>
          <a class="nav-link navText text-white" href="/about">About</a>
          
        </div>
      </div>
      <div class="d-flex">
        <div>
          <a class="nav-link navText text-white rounded" id="login" href="/login">Log In</a>
        </div>
        <div>
          <a class="nav-link navText rounded" id="signup" href="/signup">Sign Up</a>
        </div>
    </div>
    </div>
  </nav>
{/if}
  
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
  </style>