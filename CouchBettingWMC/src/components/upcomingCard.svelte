<script>
    export let upcomingGame;
</script>

<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h3><img src="{upcomingGame.homeImage}" class="card-img-top TeamPics" alt="{upcomingGame.homeName} Image"> - <img src="{upcomingGame.guestImage}" class="card-img-top TeamPics" alt="{upcomingGame.guestName} Image"></h3>
        <h5 class="card-title">{upcomingGame.homeName}-{upcomingGame.guestName}</h5>
        <p class="card-text">{upcomingGame.date}</p>
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