<script>
    export let finishedGame;
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
<div id="right" class="mx-3 mb-3">
    <div class="card" style="width: 20rem; height: 21rem">
        <div class="card-body" id="cardDesign">
            <div class="d-flex justify-content-around mt-4">
                <div><h6><img src="{finishedGame.homeImage}" class="card-img-top TeamPics m-1" alt="{finishedGame.homeName} Image"></h6></div>
                <div class="justify-content-center"><h3 class="card-title m-1">_</h3></div>
                <div><h6><img src="{finishedGame.guestImage}" class="card-img-top TeamPics m-1" alt="{finishedGame.guestName} Image"></h6></div>
            </div>

            <div class="d-flex justify-content-around">
                <div>
                    {#if finishedGame.homeName.length > 12}
                        <h6 class="card-title m-1">{finishedGame.homeShort}</h6>
                    {:else}
                        <h6 class="card-title m-1">{finishedGame.homeName}</h6>
                    {/if}
                </div>
                <div class="justify-content-center">
                    <h6 class="card-title m-1">-</h6>
                </div>
                <div>
                    {#if finishedGame.guestName.length > 12}
                        <h6 class="card-title m-1">{finishedGame.guestShort}</h6>
                    {:else}
                        <h6 class="card-title m-1">{finishedGame.guestName}</h6>
                    {/if}
                </div>
            </div>

            <div class="d-flex justify-content-center">
                <div><h6 class="card-title m-1">{finishedGame.homeGoals}</h6></div>
                <div class="justify-content-center"><h6 class="card-title m-1">-</h6></div>
                <div><h6 class="card-title m-1">{finishedGame.guestGoals}</h6></div>
            </div>

            <div class="d-felx" id="non-sel">
                <h6>
                    <p type="button" class="mb-2" on:click={SeeMore}>{text}<img src="{icon}" alt="show more/less"></p>
                </h6>
            </div>
            {#if extended == true}
                <h6 class="card-text m-1"><strong>Date:</strong> {finishedGame.date} <strong></h6>
                <h6 class="card-text m-1"><strong>City:</strong> {finishedGame.city}</h6>
                <h6 class="card-text m-1"><strong>Stadium:</strong> {finishedGame.stadium}</h6>
                <h6 class="card-text m-0"><strong>Referee:</strong> {finishedGame.referee}</h6>
            {:else if extended == false}
                <h6><a href="/betting" class="btn btn-primary mt-4">Place Bet</a></h6>
            {/if}
        </div>
    </div>
</div>




<style>
    h6,h3{
        color: #ffffff;
    }
    div{
        color: #ffffff;
        font-size: small;
    }
    .TeamPics{
        height: 3.5em;
        width: 3.5em;
    }
    #non-sel{
        -webkit-touch-callout : none;
        -webkit-user-select:none;
    }
    #cardDesign{
        background-color: #2a2a2a;
    }
</style>