<script>
    import {onMount} from "svelte";
    import {GetNews} from "../stores/news.js";
    let news;
    onMount(
        async function (){
            news = await GetNews();
            console.log(news);
        })
</script>
<h3>Hello</h3>
{#if news != undefined}
    {#each news as n}
        <!--implement card output--->
    {/each}
{/if}