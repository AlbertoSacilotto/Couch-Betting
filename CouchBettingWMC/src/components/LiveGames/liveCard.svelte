<script>
    export let liveGame;
</script>
<div class="d-flex justify-content-center mt-4">
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h3><img src="{liveGame.homeImage}" class="card-img-top TeamPics" alt="{liveGame.homeName} Image"> - <img src="{liveGame.guestImage}" class="card-img-top TeamPics" alt="{liveGame.guestName} Image"></h3>
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
        <h6 class="card-title">{liveGame.homeGoals}-{liveGame.guestGoals}</h6>
        <h6 class="card-text" id="Time"><strong>{liveGame.minute}'</strong></h6>
        <a href="/betting" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
</div>
<style>
    div{
        color: black;
        font-size: small;
    }
    .TeamPics{
        height: 2em;
        width: 2em;
    }
    #Time{
        color: #5d9b48;
    }
</style>