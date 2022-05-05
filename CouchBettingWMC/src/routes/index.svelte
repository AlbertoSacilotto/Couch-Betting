<script lang="ts">
    import {GetGames} from "../stores/Upcoming-Games";
    import { onMount } from "svelte";

    interface Game{
        goals: [
            {
                home: number,
                away: number,
            }
        ],
        date: number,
        teams: [
            {
                home: [
                    {
                        id: number,
                        logo: string,
                        name: string,
                    }
                ],
                away: [
                    {
                        id: number,
                        logo: string,
                        name: string,
                    }
                ]
            }
        ]
    }
    let temp:Game[];
    onMount(async function () {
        temp = await GetGames();
    });
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
                    <img src="../static/caro3.jpeg" class="d-block w-100 HomeCyclePics" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="../static/caro3.jpeg" class="d-block w-100 HomeCyclePics" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="../static/caro4.jpg" class="d-block w-100 HomeCyclePics" alt="...">
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
        <div class="p-4 text-center">
            <h1>Welcome to Couch Betting</h1>
            <h3>Arsim schreib atwas über unsere Website und gestallte ein Impressum Und fixxe die Navbar und suche neue bilder mit der selben größe vllt</h3>
        </div>
        
    </div>
    <div id="LiveGamesCol" class="m-1 pt-4 text-center rounded-bottom">
        <h3> Live Games Score</h3>
        <ul>
            {#if temp != undefined || temp != null}
                {#each temp as game}
                    <h5>{game.teams.name}</h5>
                {/each}
            {:else}
                <p>Games are still loading</p>
            {/if}
        </ul>
        <div class="LiveGamesInHome mt-5">
            <a class="btn btn-xs" id="buttonBetHome" href="/betting">Bet Now</a>
        </div>
    </div>
    
    
</article>
<style>
    #HomeGrid {
    display: grid;
    grid-template-columns: 85% 15%;
    grid-template-rows: 50% auto;
    grid-template-areas: "a b"
    "a b";
    }

  #LiveGamesCol
  {
    color: #E7DFDD;
    background-color:#4717F6;
    grid-area:b;
    font-size: 110%;
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
    background-color: #f73f4e;
  }

  .HomeCyclePics
  {
      width: 100%;
      height: 100%;
  }
  #buttonBetHome
  {
      background-color: #A239CA;
      color: #E7DFDD;
  }

</style>

