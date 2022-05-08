<script>
    import {onMount} from "svelte";
    import {GetLiveGames} from "../stores/Live-Games.js";
    import {GetUpcomingGames} from "../stores/Upcoming-Games.js";
    import {GetFinishedGames} from "../stores/Finished-Games.js";
    import UpcomingGameCard from "../components/upcomingGameCard.svelte";
    let liveGames;
    let upcomingGames;
    let finishedGames;
    onMount(async function () {
            //liveGames = await GetLiveGames(4);
            upcomingGames = await GetUpcomingGames(16);
            //finishedGames = await GetFinishedGames(16);
            console.log(liveGames);
            console.log(upcomingGames);
            console.log(finishedGames);
        }
    )
</script>
<svelte:head>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</svelte:head>


<div class="container">
<div class="row align-items-center">
<div class="m-1 pt-4 text-center rounded-bottom">
        {#if upcomingGames != undefined}
        {#each upcomingGames as game}
            <UpcomingGameCard upcomingGame={game}/>
        {/each}
        {:else if upcomingGames == undefined}
            <p>Games are still loading</p>
        {/if}
</div></div></div>
