<script>
    export let finishedGame;
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
</script>
<div id="right" class="mx-3 mb-3">
    <div class="card" style="width: 20rem; height: 20.5rem">
        <div class="card-body" id="cardDesign">
            <div class="d-flex justify-content-around mt-4">
                <div><h6><img src="{finishedGame.homeImage}" class="card-img-top TeamPics m-1" alt="{finishedGame.homeName} Image"></h6></div>
                <div class="justify-content-center"><h3 class="card-title m-1">_</h3></div>
                <div><h6><img src="{finishedGame.guestImage}" class="card-img-top TeamPics m-1" alt="{finishedGame.guestName} Image"></h6></div>
            </div>

            <div class="d-flex justify-content-around">
                <div>
                    <h6 class="card-title m-1">{finishedGame.homeShort}</h6>
                </div>
                <div class="justify-content-center">
                    <h6 class="card-title m-1">&nbsp</h6>
                </div>
                <div>
                    <h6 class="card-title m-1">{finishedGame.guestShort}</h6>
                </div>
            </div>

            <div class="d-flex justify-content-center">
                <div><h6 class="card-title m-1">{finishedGame.homeGoals}</h6></div>
                <div class="justify-content-center"><h6 class="card-title m-1">-</h6></div>
                <div><h6 class="card-title m-1">{finishedGame.guestGoals}</h6></div>
            </div>

            <div class="d-felx" id="non-sel">
                <h6>
                    <p type="button" class="mb-2 btn btn-xs btn-success" on:click={SeeMore}>{text}</p>
                </h6>
            </div>
            {#if extended == true}
                <p class="card-text m-1"><u>Date:</u> {finishedGame.date}</p>
                <p class="card-text m-1"><u>City:</u> {finishedGame.city}</p>
                <p class="card-text m-1"><u>Stadium:</u> {finishedGame.stadium}</p>
                <p class="card-text m-0"><u>Referee:</u> {finishedGame.referee}</p>
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