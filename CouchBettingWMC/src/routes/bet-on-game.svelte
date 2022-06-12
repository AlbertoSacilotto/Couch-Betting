<script lang="ts">
    import { upGames} from "../stores/Upcoming-Games";
    import type {UpcomingGame} from "../stores/Upcoming-Games"
    import BetsCard from "../components/Bets/betsCard.svelte";

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let game:UpcomingGame

    upGames.map(item=>{
        if(item.id == id)
        {
            game = item;
        }
    });
</script>
<div id="card">
    <BetsCard upcomingGame="{game}"/>
</div>
<style>
    #card{
        margin-bottom: 24em;
    }
</style>
