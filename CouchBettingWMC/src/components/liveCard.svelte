<script>
    export let liveGame;
</script>

<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h3><img src="{liveGame.homeImage}" class="card-img-top TeamPics" alt="{liveGame.homeName} Image"> - <img src="{liveGame.guestImage}" class="card-img-top TeamPics" alt="{liveGame.guestName} Image"></h3>
        <h5 class="card-title">{liveGame.homeName}-{liveGame.guestName}</h5>
        <h6 class="card-title">{liveGame.homeGoals}-{liveGame.guestGoals}</h6>
        <h6 class="card-text">{liveGame.time}</h6>
        <a href="/betting" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
<style>
    div{
        color: black;
        font-size: small;
    }
    .TeamPics{
        height: 1.5em;
        width: 1.5em;
    }
</style>