<script lang="ts">

    import UpcomingCard from "../components/UpcomingGames/upcomingCard.svelte"
    import LiveCard from "../components/LiveGames/liveCard.svelte"
    import {liveGames} from "../stores/Live-Games";
    import {upGames} from "../stores/Upcoming-Games";

</script>
<svelte:head>
    <title>Couch Betting - Home</title>
</svelte:head>
<article id="HomeGrid">
    <div id="HomeCol">
        <div id="HomeCarousell">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../static/home1.jpg" class="d-block w-100 HomeCyclePics" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="../static/home2.jpg" class="d-block w-100 HomeCyclePics" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="../static/home3.jpg" class="d-block w-100 HomeCyclePics" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              
        </div>
        <div class="m-4 p-4 text-center">
            <h1>Welcome to Couch Betting</h1>
            <h4><em>Bet wherever and whenever</em></h4>
        </div>
    </div>
    <div id="LiveGamesCol" class="m-1 pt-4 text-center rounded-bottom">
        <ul>
            {#if liveGames != undefined}
                <h2>Live Games</h2>
                {#each liveGames as game}
                    {#if game.homeName != ""}
                        <LiveCard liveGame={game}/>
                    {/if}
                {/each}

            {:else if upGames != undefined }
                <h2>Upcoming Games</h2>
                {#each upGames as game}
                    {#if game.homeName != ""}
                        <UpcomingCard upcomingGame={game}/>
                    {/if}
                {/each}
            {/if}
        </ul>
    </div>
    
    
</article>
<style>
    #HomeGrid {
    display: grid;
    grid-template-columns: 77.5% 22.5%;
    grid-template-rows: 70%;
    grid-template-areas:"a b";
    }

  #LiveGamesCol
  {
    color: #E7DFDD;
    background-color:#4717F6;
    grid-area:b;
    font-size: 110%;
    padding-left: -5em;
    overflow:scroll;
    overflow-x: hidden;
  }

  #HomeCol
  {
    color: #E7DFDD;
    grid-area:a;
    display: flex;
    list-style-type:none;
    flex-direction: column;
  }
  #HomeCarousell
  {
    background-color: #0E0B16;
  }

  .HomeCyclePics
  {
      width: 100%;
      height: 100%;
  }

</style>

