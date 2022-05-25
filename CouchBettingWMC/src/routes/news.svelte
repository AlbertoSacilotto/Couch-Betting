<script>
    import NewsCard from "../components/newsCard.svelte";
    import {onMount} from "svelte";
    import {GetNews} from "../stores/news.js";
    import newsCard from "../components/newsCard.svelte";
    let news;
    onMount(
        async function (){
            //news = await GetNews();
            console.log(news);
        })
</script>


<NewsCard/>


{#if news != undefined}
    {#each news as n}
        <!--implement card output--->
    {/each}
{/if}