<script lang="ts">
    import NewsPopup from "../components/News/NewsPopup.svelte";
    import {GetNewsFromApi} from "../stores/News";
    import {onMount} from "svelte";

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let allNews
    onMount(async()=>{
        allNews = await GetNewsFromApi();
    })

    import { writable } from 'svelte/store';

    const progress = writable(0);
    function load() {
        let x = 0;
        setInterval(()=>{
            if(x<=1) {
                progress.set(x)
                x += 0.01
            }
        },25);
    }
</script>
<div class="container d-flex" id="Place">

    {#if allNews != undefined}
        <div id="insideTheGoods">
        {#each allNews as n}
            {#if n.id == id}
                <NewsPopup news ={n}/>
            {/if}
        {/each}
        </div>
    {:else}
        <div id="bar">
            <progress on:load={load()} value={$progress}></progress>

            <h1 id="per">{($progress * 100).toFixed()}%</h1>
        </div>
    {/if}

</div>
<style>
    #Place{
        width:75%;
        background-color: white;
        display: grid;
        margin-bottom: 24em;
    }
    progress {
        display: block;
        width: 100%;
        height: 4em;
    }
    #bar{
        margin-top: 15em;
        width: 100%;
        margin-bottom: 15em;
    }
    #per{
        text-align: center;
    }
    #insideTheGoods{
        margin-left: 13.5em;
    }
</style>