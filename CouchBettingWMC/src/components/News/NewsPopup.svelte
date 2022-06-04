<script>
    export let news;
    const url = `/news`;
    console.log(news.content);
</script>

<div id="News" class="col-lg-4 col-sm-6 m-4">
    <!-- Portfolio item 1-->
    <div class="portfolio-item float-right">
        <img class="img-fluid mb-3" id="NewsImage" src="{news.image}" alt="{news.image}"/>
        <div class="portfolio-caption">
            <h4>{news.title}</h4>
            <h5>{news.description}</h5>
            <p>{news.date}</p>
            {#if news.url != null}
                <a href="{news.url}"  type="button" >Source: {news.sourceName}</a>
            {:else}
                <p>Written by {news.author}</p>
            {/if}

            <a href="{url}" type="button">Go Back</a>
        </div>
    </div>
</div>
<style>
    #NewsImage
    {
        border: #A239CA solid 0.1em ;
        border-radius: 0.4em;
    }
    #NewsImage:hover{
        border: #A239CA solid 0.18em ;
        width: 29.94em;
        height: auto;
    }
    #News{
        float: right;
    }
</style>
