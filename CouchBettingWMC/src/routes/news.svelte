<script lang="ts">
    import NewsCard from "../components/News/newsCard.svelte";
    import {onMount} from "svelte";
    import {GetNewsFromApi} from "../stores/News";
    let news
    onMount(async()=>{
        news = await GetNewsFromApi();
    })

</script>
<div class="container d-flex" id="Place">
    {#if news != undefined}
        {#each news as n}
            <NewsCard style="border-bottom: #0E0B16 solid 0.2em;" news ={n}/>
        {/each}
    {/if}
</div>
<style>
    #Place{
        background-color: #ffffff;
        display:flex;
        flex-direction: row;
        height: auto;
        overflow-y: hidden;
    }
</style>
