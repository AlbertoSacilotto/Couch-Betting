<script lang="ts">
    import {upGames} from "../../stores/Upcoming-Games.js";
    import {liveGames} from "../../stores/Live-Games.js";
    import type {BetType} from "../../stores/Betting";
    export let bet;
    let odds = bet.win / bet.cost
    let game,live= false;
    upGames.map(upgame=>{
        if(bet.id == upgame.id)
        {
            game = upgame;
        }
    });
    liveGames.map(item=>{
        if(bet.id == item.id)
        {
            game = item;
            live = true;
        }
    });
</script>
<div class="mx-3 mt-1">
    <div class="card" style="width: 20rem;height: 25rem;" id="cardDesign">
        <div class="card-body">
            {#if live == true}
                <img id="d" src="https://upload.wikimedia.org/wikipedia/commons/8/83/Green_dot.svg" width="20" alt="sdf">
            {:else}
                <br>
            {/if}
            <div id="abc" class="d-flex justify-content-around">
                <div>
                    <h6><img src="{game.homeImage}" class="card-img-top TeamPics m-1" alt="{game.homeName} Image"></h6>
                </div>
                <div>
                    <h3 class="card-title m-1">_</h3>
                </div>
                <div>
                    <h6><img src="{game.guestImage}" class="card-img-top TeamPics m-1" alt="{game.guestName} Image"></h6>
                </div>
            </div>
            <div class="d-flex justify-content-around">
                <div>
                    <h6 class="card-title m-1">{game.homeShort}</h6>
                </div>
                <div class="justify-content-center">
                    <h6 class="card-title m-1">&nbsp</h6>
                </div>
                <div>
                    <h6 class="card-title m-1">{game.guestShort}</h6>
                </div>
            </div>

            {#if live == true}
                <div class="cen justify-content-around mt-3">
                    <h6>{game.homeGoals}&nbsp&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp&nbsp{game.guestGoals}</h6>
                </div>
                <h6 class="cen card-text pb-2 m-2" id="live">{game.minute}'</h6>
            {:else}
                <h6 class="cen card-text m-2">{game.date}</h6>
                <h6 class="cen card-text m-1 pb-2" id="border-b">{game.hour}</h6>
            {/if}
            <div class="mt-2">
                <h6>Input: {bet.cost}  <img className="pb-1" src="../../../static/KiraCoinPNG.png" width="20"></h6>
                <h6>Odds: {odds.toFixed(2)}x</h6>
                <h6>Outcome: {bet.win.toFixed(0)}   <img className="pb-1" src="../../../static/KiraCoinPNG.png" width="20"></h6>
                <h6>Your Bet:</h6>
                <h6>{bet.text}</h6>
            </div>
        </div>
    </div>
</div>
<style>
    h6,h3,p{
        color: #ffffff;
    }
    div{
        color: black;
        font-size: small;
    }
    .TeamPics{
        height: 3.5em;
        width: 3.5em;
    }
    #cardDesign{
        background-color: #2a2a2a;
    }
    #border-b{
        border-bottom:solid #4717F6 0.1em;
        margin-bottom: 10em;
    }
    .cen{
        text-align: center;
    }
    #live{
        color: #5d9b48;
        border-bottom:solid #4717F6 0.1em;
    }
    #d{
        padding-bottom: -2em;
        margin-bottom: -2em;
        margin-top: -2em;
    }
</style>