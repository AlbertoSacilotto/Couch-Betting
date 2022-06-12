<script lang="ts">
    import NewsCard from "../components/News/newsCard.svelte";
    import {onMount} from "svelte";
    import {GetNewsFromApi} from "../stores/News";
    let news
    onMount(async()=>{
        news = await GetNewsFromApi()
    })

</script>
<div class="container" id="Place">
    {#if news != undefined}
        {#each news as n}
            <NewsCard news ={n}/>
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
        margin-bottom: 23.75em;
        height: 34em;
        border-left: solid white 0.01em;
        border-right: solid white 0.01em;
    }
</style>
