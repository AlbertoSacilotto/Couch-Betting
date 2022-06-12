<script>
    export let upcomingGame;
    let extended = false;
    let text ="Show More";
    function SeeMore()
    {
        if(extended == false)
        {
            extended = true;
            text ="Show Less";
        }
        else{
            extended = false;
            text ="Show More";
        }
    }
    let url ="/bet-on-game?id="+upcomingGame.id;
</script>

<div id="right" class="mx-3 mt-1">
    <div class="card" style="width: 20rem;height: 21rem;" id="cardDesign">
        <div class="card-body">
            <div class="d-flex justify-content-around mt-4">
                <div>
                    <h6><img src="{upcomingGame.homeImage}" class="card-img-top TeamPics m-1" alt="{upcomingGame.homeName} Image"></h6>
                </div>
                <div>
                    <h3 class="card-title m-1">_</h3>
                </div>
                <div>
                    <h6><img src="{upcomingGame.guestImage}" class="card-img-top TeamPics m-1" alt="{upcomingGame.guestName} Image"></h6>
                </div>
            </div>
            <div class="d-flex justify-content-around">
                <div>
                        <h6 class="card-title m-1">{upcomingGame.homeShort}</h6>
                </div>
                <div class="justify-content-center">
                    <h6 class="card-title m-1">&nbsp</h6>
                </div>
                <div>
                    <h6 class="card-title m-1">{upcomingGame.guestShort}</h6>
                </div>
            </div>
            <h6 class="card-text m-2">{upcomingGame.date}</h6>
            <h6 class="card-text m-1">{upcomingGame.hour}</h6>
            <div class="d-felx" id="non-sel">
                <h6>
                    <p type="button" class="mb-2 btn btn-xs btn-success" on:click={SeeMore}>{text}</p>
                </h6>
            </div>
            {#if extended == true}
                <p class="card-text m-1"><u>City:</u> {upcomingGame.city}</p>
                <p class="card-text m-1"><u>Stadium:</u> {upcomingGame.stadium}</p>
                <p class="card-text m-0"><u>Referee:</u> {upcomingGame.referee}</p>
                {:else if extended == false}
                <h6><a href="{url}" class="btn btn-primary mt-3">Place Bet</a></h6>
            {/if}
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
    #right{
        float: right;
    }
    #non-sel{
        -webkit-touch-callout : none;
        -webkit-user-select:none;
    }
    #cardDesign{
        background-color: #2a2a2a;
    }
</style>