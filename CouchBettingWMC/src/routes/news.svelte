<script>
    import NewsCard from "../components/News/newsCard.svelte";
    import {onMount} from "svelte";
    import {GetNews} from "../stores/News.ts";
    let news = undefined;
    onMount(
        async function (){
            news = await GetNews();
        })
    console.log(news)
</script>
<div class="container d-flex" id="Place">
    {#if news != undefined}
        {#each news as n}
            <NewsCard news = {n}/>
        {/each}
    {/if}
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
