<script>
    export let news;
    const url = `/NewsInfo/?id=${news.id}`;
</script>

<div id="News" class="col-lg-4 col-sm-6 m-5">
    <!-- Portfolio item 1-->
    <div class="portfolio-item float-right">
        <img class="img-fluid mb-3" id="NewsImage" src="{news.image}" alt="news"/>
        <div class="portfolio-caption">
            <a href="{url}"><h3>{news.title}</h3></a>
        </div>

    </div>
</div>
<style>
    a{
        color:#A239CA;
    }
    #NewsImage
    {
        width: 30em;
        height: auto;
        border: #A239CA solid 0.1em ;
        border-radius: 0.4em;
    }
    #News{
        float: right;
        width: 30em;
    }
</style>