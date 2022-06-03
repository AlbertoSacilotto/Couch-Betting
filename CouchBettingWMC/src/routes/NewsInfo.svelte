<script>
    import {GetNews} from "../stores/News.js";
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id);
    let currentNews;
    const allNews = GetNews()
    currentNews= allNews[id];

    console.log(currentNews)
</script>
{#if currentNews != undefined}
<h1>{currentNews.title}</h1>
{:else}
    <h1>Hey</h1>
{/if}