<script>
    export let news;
</script>

<div id="News" class="col-lg-4 col-sm-6 m-4">
    <!-- Portfolio item 1-->
    <div class="portfolio-item float-right">
        <img class="img-fluid mb-3" id="NewsImage" src="{news.image}" alt="news"/>
        <div class="portfolio-caption">
            <h4>{news.title}</h4>
            <p>{news.description}</p>
            <p type="button"><img width="30" src="static/info-circle.svg" alt="Know More" data-bs-toggle="modal"  href="#exampleModal" class="float-end"></p>
        </div>

    </div>
</div>






<!-- Modal -->
<div class=" container modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog w-100" style="align-items: center" >
        <div class="modal-content" style="margin: auto">
            <div class="modal-header">
                <h4 class="modal-title text" id="exampleModalLabel">{news.title}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p type="button"><img src="{news.image}" alt="news" id="ModalPicture"></p>
                <p>{news.content}</p>ddd
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
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
    #ModalPicture
    {
        width: 29em;
        height:auto;
    }
</style>