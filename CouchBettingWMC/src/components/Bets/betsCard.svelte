<script lang="ts">
    import {BettSystem, loggedAccount} from "../../stores/Betting.ts";

    export let upcomingGame;
    let amount = 1;
    let type,win:number,bet_coins,home_goals = 0,guest_goals = 0 ;
    let b = new BettSystem();
    const odds_home = Math.random()+1.1;
    const odds_guest = Math.random()+1.1;
    const odds_draw = (odds_home + odds_guest)/2;
    $:{
        switch (type) {
            case "0":
                win = odds_draw * amount;
                break;
            case "1":
                win = odds_home * amount;
                break;
            case "2":
                win = odds_guest * amount;
                break;
            case "3":
                if(home_goals >= 3 && guest_goals >= 3)
                {
                    win = odds_draw * amount * 6;
                }
                else {
                    win = odds_draw * amount * 3;
                }
                break;
            case "4":
                if(home_goals >= 0 && home_goals< 5)
                {
                    win = odds_draw * amount * 1.5;
                }
                else
                {
                    win = odds_draw * amount * 3;
                }

                break;
            default:
                win = 0;
                break;
        }
    }
    function decrement()
    {
        if(amount > 1)
        {
            amount --;
        }
        else
        {
            alert("You cant bet lower than on 1 coin")
        }
    }
    function increment()
    {
        if(amount != loggedAccount.coins)
        {
            amount++;
        }
        else
        {
            alert("You dont have enough coins for a higher bet")
        }
    }
</script>

<div class="d-flex justify-content-center py-5">
    <div class="px-4 card" style="width: 70em; height: 60em">
        <div class="card-body">
            <div class="d-flex justify-content-around">
                <div>
                    <h1><img src="{upcomingGame.homeImage}" class="card-img-top TeamPics" alt="{upcomingGame.homeName} Image"></h1>
                </div>

                <div>
                    <h1><img src="{upcomingGame.guestImage}" class="card-img-top TeamPics" alt="{upcomingGame.guestName} Image"></h1>
                </div>
            </div>
            <div>
                <h1 class="card-title cen">-</h1>
            </div>
            <div class="d-flex justify-content-around">
                <div>
                    <h2 class="card-title">{upcomingGame.homeName}</h2>
                </div>
                <div class="justify-content-center">
                    <h2 class="card-title"> </h2>
                </div>
                <div>
                    <h2 class="card-title">{upcomingGame.guestName}</h2>
                </div>
            </div>

            <div id="info">
                <br>
                <h4 class="cen">Information:</h4>
                <div class="mt-4 d-flex justify-content-around">
                    <div>
                        <h6><strong>Gamestart:</strong> {upcomingGame.date} at {upcomingGame.hour}</h6>
                    </div>
                    <div>
                        <h6><strong>Referee:</strong> {upcomingGame.referee}</h6>
                    </div>
                    <div>
                        <h6><strong>Stadium and City:</strong> {upcomingGame.stadium} / {upcomingGame.city}</h6>
                    </div>
                </div>
            </div>
        <h3 class="cen mt-4">Place the Bet</h3>
            <div class="mt-4">
                <div class="m-2">
                    <label for="selection"><h5>Type</h5></label>
                    <div id="selection">
                        <select bind:value={type} class="form-select w-50" aria-label="Default select example">
                            <option selected>type of bet you want to place</option>
                            <option value="0">draw</option>
                            <option value="1">winner home</option>
                            <option value="2">winner guest</option>
                            <option value="3">on score</option>
                            <option value="4">number of goals</option>
                        </select>
                    </div>
                </div>
                {#if type == 3}
                    <div class="m-2">
                        <label for="score"><h6>Score</h6></label>
                        <div id="score" class="d-flex ">
                            <input class="form-control p" placeholder="home" bind:value={home_goals} aria-label="input example">
                            <h3 class="mx-1">:</h3>
                            <input class="form-control p" placeholder="guest" bind:value={guest_goals} aria-label="input example">
                        </div>
                    </div>
                {:else if type == 4}
                    <div class="m-2">
                        <label for="score"><h6>Goals</h6></label>
                        <div class="d-flex ">
                            <input class="form-control p" placeholder="home" bind:value={home_goals} aria-label="input example">
                        </div>
                    </div>
                {/if}
                <div class="m-2 d-flex">
                    <button type="button" on:click={decrement} class="btn btn-primary">-</button>
                    <input id="coins" class="form-control" placeholder="{amount}" bind:value={amount} aria-label="input example">
                    <button type="button" on:click={increment} class="btn btn-primary">+</button>
                    <input class="form-control w-25 px-4" type="number" placeholder="outcome: {Math.floor(win)}" aria-label="input example" disabled>
                </div>
                <button class="m-2 btn btn-success" on:click={b.check(amount,win,upcomingGame.id,type,home_goals,guest_goals)}>Place this Bet</button>
            </div>

        </div>
    </div>
</div>
<style>
    div{
        color: black;
        font-size: small;
    }
    .TeamPics{
        height: 2.5em;
        width: 2.5em;
    }
    #info{
        border-bottom: solid #4717F6 0.1em;
    }
    .cen{
        text-align: center;
    }
    #coins{
        width: 8em;
    }
    .p{
        width: 4.5em;
    }
</style>