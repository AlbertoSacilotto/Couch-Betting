<script>
    export let news;
    const url = `/NewsInfo/?id=${news.id}`;
</script>

<div id="News" class="col-lg-4 col-sm-6 m-4">
    <!-- Portfolio item 1-->
    <div class="portfolio-item float-right">
        <img class="img-fluid mb-3" id="NewsImage" src="{news.image}" alt="news"/>
        <div class="portfolio-caption">
            <h4>{news.title}</h4>dd
            <h1>{news.id}ddd</h1>
            <p>{news.description}</p>
            <a href="{url}" type="button"><img width="30" src="static/info-circle.svg" alt="Know More"  class="float-end"></a>
        </div>

    </div>
</div>
<style>
    #NewsImage
    {
        width: 30em;
        height: auto;
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