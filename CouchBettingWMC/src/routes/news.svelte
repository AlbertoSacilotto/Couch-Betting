<script lang="ts">
    import NewsCard from "../components/News/newsCard.svelte";
    import {onMount} from "svelte";
    import {GetNewsFromApi} from "../stores/News";
    let news
    onMount(async function get() {
        news = await GetNewsFromApi()
    })

    import { writable } from 'svelte/store';

    const progress = writable(0);
    function load() {
        let x = 0;
        setInterval(()=>{
            if (x <= 1) {
                progress.set(x)
                x += 0.01
            }
        },25);
    }
</script>
<div class="container" id="Place">
    {#if news != undefined}

        {#each news as n}
            <NewsCard news ={n}/>
        {/each}

    {:else}
        <div id="bar">
        <progress on:load={load()} value={$progress}></progress>

            <h1 id="per">{($progress * 100).toFixed()}%</h1>
        </div>
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
    progress {
        display: block;
        width: 100%;
        height: 4em;
    }
    #bar{
        margin-top: 15em;
        width: 100%;
    }
    #per{
        text-align: center;
    }
</style>
