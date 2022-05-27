<script>
    export let liveGame;
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

<div class="p-1 m-3 float-start">
    <div class="card" style="width: 18rem;height: 21rem">
        <div class="card-body" id="cardDesign">
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
                    {#if liveGame.homeName.length > 12}
                        <h6 class="card-title m-1">{liveGame.homeShort}</h6>
                    {:else}
                        <h6 class="card-title m-1">{liveGame.homeName}</h6>
                    {/if}
                </div>
                <div class="justify-content-center">
                    <h6 class="card-title m-1">-</h6>
                </div>
                <div>
                    {#if liveGame.guestName.length > 12}
                        <h6 class="card-title m-1">{liveGame.guestShort}</h6>
                    {:else}
                        <h6 class="card-title m-1">{liveGame.guestName}</h6>
                    {/if}
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
                    <p type="button" class="mb-2" on:click={SeeMore}>{text}<img src="{icon}" alt="show more/less"></p>
                </h6>
            </div>
            {#if extended == true}
                <h6 class="card-text m-1"><strong>City:</strong> {liveGame.city}</h6>
                <h6 class="card-text m-1"><strong>Stadium:</strong> {liveGame.stadium}</h6>
                <h6 class="card-text m-1"><strong>Referee:</strong> {liveGame.referee}</h6>
            {:else}
                <h6><a href="/betting" class="btn btn-primary mt-3">Place Bet</a></h6>
            {/if}
        </div>
    </div>
</div>
<style>
    h6,h3{
        color: #000000;
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

</style>