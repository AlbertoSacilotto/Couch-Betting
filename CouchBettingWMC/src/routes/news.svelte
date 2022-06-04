<script>
    import NewsCard from "../components/News/newsCard.svelte";
    import {onMount} from "svelte";
    import {GetNewsFromApi} from "../stores/News.ts";
    let news;
    onMount(async () => {
        news = await  GetNewsFromApi()
    })
</script>
<div class="container d-flex" id="Place">
    {#await }
       <h1>loading news</h1>
    {:then GetNewsFromApi}
        {#each GetNewsFromApi() as n}
            <h1>{n.title}</h1>
        {/each}
    {/await}
</div>
<style>
    #Place{
        width:75%;
        background-color: white;
        display: grid;
        overflow-y: hidden;
        overflow-x: scroll;
    }
</style>
