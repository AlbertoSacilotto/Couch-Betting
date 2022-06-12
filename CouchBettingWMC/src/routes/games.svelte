<script>
    import {liveGames} from "../stores/Live-Games.js";
    import {finishedGames} from "../stores/Finished-Games.js";
    import {upGames} from "../stores/Upcoming-Games.js";
    import UpcomingGameCard from "../components/UpcomingGames/upcomingGameCard.svelte";
    import LiveGameCard from "../components/LiveGames/liveGameCard.svelte";
    import FinishedGameCard from "../components/FinishedGames/finishedGameCard.svelte";
</script>
<svelte:head>
    <title>Couch Betting - Games</title>
</svelte:head>
<div id="GamesGrid" class="flow">
    <div id="liveTitle">
        <h2 class="m-3 text-center">Live Games</h2>
    </div>
    <div class="text-center rounded-bottom" id="LiveGamesCol">
        {#if liveGames != undefined}
            {#each liveGames as game}
                <div>
                    <LiveGameCard liveGame={game}/>
                </div>
            {/each}
        {:else if liveGames == undefined}
            <p>Games are still loading</p>
        {/if}
    </div>

    <div id="upTitle">
        <h2 class="m-3 text-center">Upcoming Games</h2>
    </div>

    <div class="text-center rounded-bottom media-scroller snaps-inline" id="UpcomingGamesCol">
        {#if upGames != undefined}
            {#each upGames as game}
                <div class="media-element">
                    <UpcomingGameCard upcomingGame={game}/>
                </div>
            {/each}
        {:else if upGames == undefined}
            <p>Games are still loading</p>
        {/if}
    </div>
    <div id="finTitle">
        <h2 class="m-3 text-center">Finished Games</h2>
    </div>
    <div class="text-center rounded-bottom media-scroller snaps-inline" id="FinishedGamesCol">

        {#if finishedGames != undefined}
            {#each finishedGames as game}
                <div class="media-element">
                    <FinishedGameCard finishedGame={game}/>
                </div>
            {/each}
        {:else if finishedGames == undefined}
            <p>Games are still loading</p>
        {/if}
    </div>
</div>

<style>
    #GamesGrid {
        overflow-x: hidden;
        display: grid;
        grid-template-columns: 35% 65%;
        grid-template-rows:6% 30.1% 6% 29.6%;
        grid-template-areas:
        "live up"
        "a b"
        "a fin"
        "a c";
    }

    #LiveGamesCol
    {
        overflow-y: auto;
        background-color: #0E0B16;
        grid-area:a;
        font-size: 10%;
        flex-direction: column;
        float: left;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    #UpcomingGamesCol
    {
        color: #000000;
        grid-area:b;
        display: flex;
        list-style-type:none;
        flex-direction: row;
        background-color: #4717F6;
    }
    #FinishedGamesCol
    {
        color: #000000;
        grid-area:c;
        display: flex;
        list-style-type:none;
        flex-direction: row;
        background-color: #4717F6;
    }

    .media-scroller {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 21%;

        overflow-x: auto;
        overscroll-behavior-inline: contain;
    }

    .media-element {
        color: white;
    }

    .snaps-inline {
        scroll-snap-type: inline mandatory;
        scroll-padding-inline: 1rem;
    }

    .snaps-inline > * {
        scroll-snap-align: start;
    }
    #finTitle{
        color: #ffffff;
        background-color: #4717F6;
        grid-area:fin;
    }
    #liveTitle{
        color: #ffffff;
        background-color: #0E0B16;
        grid-area:live;
    }
    #upTitle{
        color: #ffffff;
        background-color: #4717F6;
        grid-area:up;
    }

</style>

