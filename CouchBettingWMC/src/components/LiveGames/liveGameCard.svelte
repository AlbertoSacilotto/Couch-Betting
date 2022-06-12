<script>
    export let liveGame;
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

<div class="p-1 m-3 float-start">
    <div class="card" style="width: 18rem;height: 20.8rem" id="cardDesign">
        <div class="card-body">
            <div class="d-flex justify-content-around mt-4">
                <div>
                    <h6><img src="{liveGame.homeImage}" class="card-img-top TeamPics m-1" alt="{liveGame.homeName} Image"></h6>
                </div>
                <div>
                    <h3 class="card-title m-1">_</h3>
                </div>
                <div>
                    <h6><img src="{liveGame.guestImage}" class="card-img-top TeamPics m-1" alt="{liveGame.guestName} Image"></h6>
                </div>
            </div>

            <div class="d-flex justify-content-around">
                <div>
                    <h6 class="card-title m-1">{liveGame.homeShort}</h6>
                </div>
                <div class="justify-content-center">
                    <h6 class="card-title m-1"></h6>
                </div>
                <div>
                    <h6 class="card-title m-1">{liveGame.guestShort}</h6>
                </div>
            </div>

            <div>
                <div class="d-flex justify-content-center">
                    <div>
                        <h6 class="card-title m-1">{liveGame.homeGoals}</h6>
                    </div>
                    <div class="justify-content-center">
                        <h6 class="card-title m-1">-</h6>
                    </div>
                    <div>
                        <h6 class="card-title m-1">{liveGame.guestGoals}</h6>
                    </div>
                </div>
                <div class="justify-content-end">
                    <h6 class="card-title m-1" id="Time"><strong>{liveGame.minute}'</strong></h6>
                </div>
            </div>
            <div class="d-felx" id="non-sel">
                <h6>
                    <p type="button" class="mb-2 btn btn-xs btn-success" on:click={SeeMore}>{text}</p>
                </h6>
            </div>
            {#if extended == true}
                <p class="card-text m-1"><u>City:</u> {liveGame.city}</p>
                <p class="card-text m-1"><u>Stadium:</u> {liveGame.stadium}</p>
                <p class="card-text m-0"><u>Referee:</u> {liveGame.referee}</p>
            {/if}
        </div>
    </div>
</div>
<style>
    h6,h3{
        color: #ffffff;
        font-weight: 500;
    }
    a{
        text-decoration: none;
        color: #000000;
    }
    #non-sel{
        -webkit-touch-callout : none;
        -webkit-user-select:none;
    }
    div{
        color: #ffffff;
        font-size: small;
    }
    .TeamPics{
        height: 3.5em;
        width: 3.5em;
    }
    #Time{
        color: #5d9b48;
    }
    #cardDesign{
        background-color: #2a2a2a;
    }
</style>