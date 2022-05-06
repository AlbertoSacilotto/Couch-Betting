<script>
    export let upcomingGame;
</script>

<div class="d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h3><img src="{upcomingGame.homeImage}" class="card-img-top TeamPics m-1" alt="{upcomingGame.homeName} Image"> - <img src="{upcomingGame.guestImage}" class="card-img-top TeamPics m-1" alt="{upcomingGame.guestName} Image"></h3>
            <div class="d-flex justify-content-around">
                <div>
                    <h6 class="card-title m-1">{upcomingGame.homeName}</h6>
                </div>
                <div class="justify-content-center">
                    <h6 class="card-title m-1">-</h6>
                </div>
                <div>
                    <h6 class="card-title m-1">{upcomingGame.guestName}</h6>
                </div>
            </div>

            <h6 class="card-text m-1">{upcomingGame.date}</h6>
            <h6 class="card-text m-1">{upcomingGame.hour}</h6>
            <a href="/betting" class="btn btn-primary">Place Bet</a>
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
</style>