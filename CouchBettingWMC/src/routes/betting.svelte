<script>
    import {BettSystem, loggedAccount} from "../stores/Betting.js";
    import Yourbet from "../components/Bets/your-bets.svelte";
    import HistoryBetCard from "../components/Bets/historyCard.svelte";
    let b = new BettSystem();
    console.log(b.GetWins(true));
    console.log(b.GetLoses(true));
</script>
    <div id="grid">
        <div id="your-games">
            <h1 class="text-white ps-3 cen">Your Bets</h1>
            {#if loggedAccount.bets != []}
                <div class="d-flex">
                    {#each loggedAccount.bets as bet}
                        <Yourbet bet="{bet}"/>
                    {/each}
                </div>

            {:else}
                <h4>You havent placed a bet yet. Do can do it <a href="/betting">here</a> though</h4>
            {/if}
        </div>
        <div id="history-bets">
            <h1 class="text-white ps-3 cen">Your History</h1>
            {#if loggedAccount.historyOfBets != []}
                <div class="d-flex">
                    {#each loggedAccount.historyOfBets as bet}
                        <HistoryBetCard bet="{bet}"/>
                    {/each}
                </div>
            {:else}
                <h4>You havent placed a bet yet. Do can do it <a href="/betting">here</a> though</h4>
            {/if}
        </div>
    </div>
<style>
    #grid{
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 30em 23em;
        grid-template-areas:"a a""c c";
        margin-bottom: 24em;
    }
    #your-games{
        background-color: #4717F6;
        grid-area: a;
        overflow-y:hidden ;
        overflow: auto;
    }

    #history-bets{
        background-color: #0E0B16;
        grid-area: c;
        overflow-y:hidden ;
        overflow: auto;
    }
    .cen{
        text-align: center;
    }
</style>