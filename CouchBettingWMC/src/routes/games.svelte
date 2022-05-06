<script>
    import {onMount} from "svelte";
    import {GetLiveGames} from "../stores/Live-Games.js";
    import {GetUpcomingGames} from "../stores/Upcoming-Games.js";
    import {GetFinishedGames} from "../stores/Finished-Games.js";
    let liveGames;
    let upcomingGames;
    let finishedGames;
    onMount(async function () {
            //liveGames = await GetLiveGames(4);
            //upcomingGames = await GetUpcomingGames(16);
            //finishedGames = await GetFinishedGames(16);
            console.log(liveGames);
            console.log(upcomingGames);
            console.log(finishedGames);
        }
    )
</script>
