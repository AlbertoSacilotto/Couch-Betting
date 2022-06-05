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


</script>
<div class="container d-flex" id="Place">
    {#if allNews != undefined}
        {#each allNews as n}
            {#if n.id == id}
                <NewsPopup news ={n}/>
            {/if}
        {/each}
    {/if}
</div>
<style>
    #Place{
        width:75%;
        background-color: white;
        display: grid;
    }
</style>