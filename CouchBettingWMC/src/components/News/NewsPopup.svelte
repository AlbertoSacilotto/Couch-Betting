<script lang="ts">
    import {onMount} from "svelte";
    export let news;
    const url = `/news`;
    onMount(()=>{
        for(let p of news.content)
        {
            if(p.data.content != undefined &&p.data.content != null )
            document.getElementById('content').innerHTML += p.data.content;
        }
    })

</script>

<div id="News" class="col-lg-4 col-sm-6 m-4 container">
    <!-- Portfolio item 1-->
    <div class="portfolio-item float-right">
        <img class="img-fluid mb-3" id="NewsImage" src="{news.image}" alt="{news.image}"/>
        <div class="portfolio-caption">
            <h4>{news.title}</h4>
            <div id="content">
            </div>
            {#if news.author != null&&news.author != "" && news.author!= undefined}
                <p>Written by {news.author}</p>
            {/if}
            <p>published on: {news.date}</p>
            <a href="{url}" type="button">Go Back</a>
        </div>
    </div>
</div>
<style>
    #NewsImage
    {
        width: 50em;
        border: #A239CA solid 0.05em ;
        border-radius: 0.4em;
    }

    #News{
        float: right;
        width: 50em;
    }
</style>
