<script lang="ts">
    import { upGames} from "../stores/Upcoming-Games";
    import type {UpcomingGame} from "../stores/Upcoming-Games"
    import type UpcomingCard from "../components/UpcomingGames/upcomingGameCard.svelte";

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let game:UpcomingGame;
    upGames.map(item=>{
        if(item.id == id)
        {
            game = item;
        }
    });
</script>
<UpcomingCard upcomingGame="{game}"/>
