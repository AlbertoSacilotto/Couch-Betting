<script>
    export let upcomingGame;
    let icon ="../static/chevron-down.svg";
    let extended = false;
    let text ="Show More";
    function SeeMore()
    {
        if(extended == false)
        {
            extended = true;
            icon ="../static/chevron-up.svg";
            text ="Show Less";
        }
        else{
            extended = false;
            icon ="../static/chevron-down.svg";
            text ="Show More";
        }
    }
</script>

<div id="right" class="mx-3 mt-1">
    <div class="card" style="width: 20rem;height: 21rem;">
        <div class="card-body" id="cardDesign">
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
                    {#if upcomingGame.homeName.length > 12}
                        <h6 class="card-title m-1">{upcomingGame.homeShort}</h6>
                    {:else}
                        <h6 class="card-title m-1">{upcomingGame.homeName}</h6>
                    {/if}
                </div>
                <div class="justify-content-center">
                    <h6 class="card-title m-1">-</h6>
                </div>
                <div>
                    {#if upcomingGame.guestName.length > 12}
                        <h6 class="card-title m-1">{upcomingGame.guestShort}</h6>
                    {:else}
                        <h6 class="card-title m-1">{upcomingGame.guestName}</h6>
                    {/if}
                </div>
            </div>
            <h6 class="card-text m-2">{upcomingGame.date}</h6>
            <h6 class="card-text m-1">{upcomingGame.hour}</h6>
            <div class="d-felx" id="non-sel">
                <h6>
                    <p type="button" class="mb-2" on:click={SeeMore}>{text}<img src="{icon}" alt="show more/less"></p>
                </h6>
            </div>
            {#if extended == true}
                <h6 class="card-text m-1"><strong>City:</strong> {upcomingGame.city}</h6>
                <h6 class="card-text m-1"><strong>Stadium:</strong> {upcomingGame.stadium}</h6>
                <h6 class="card-text m-0"><strong>Referee:</strong> {upcomingGame.referee}</h6>
                {:else if extended == false}
                <h6><a href="/betting" class="btn btn-primary mt-3">Place Bet</a></h6>
            {/if}
        </div>
    </div>
</div>
<style>
    h6,h3{
        color:black;
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
</style>