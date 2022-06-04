<script lang="ts">
    import NewsPopup from "../components/News/NewsPopup.svelte";
    interface News{
        title: string,
            author: string,
            description: string,
            content: string,
            image:string,
            date: string,
            source:string,
            id:string,
            sourceName: string,
    }
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let allNewsPromise = GetNewsFromApi();
    function GetNewsFromApi() {
        const options = {
            method: 'GET',
        };
        const news: News[] = [];
        //const url = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=e8517c35369347f8861fbe8a136f438b";
        //const url = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=96795eb66ddc4b19a456b67bf13c7573";
        const url = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=0ca8d234a30b43d1a6157a7be9d9cb06";
        return fetch(url, options)
                .then(response => response.json())
                .then(data => {

                    const list = data.articles;
                    let x = 0;

                    list.map(article => {
                        news[x] = {
                            title: article.title,
                            author: article.author,
                            description: article.description,
                            content: article.content,
                            image: article.urlToImage,
                            date: article.publishedAt,
                            source: article.url,
                            id: x.toString(),
                            sourceName: article.source.name,
                        };
                        x++;
                    });
                    return news;
                })
                .catch(err => console.error(err));
        }

</script>
<div class="container d-flex" id="Place">
{#await allNewsPromise}
    <h1>loading news</h1>
{:then news}
    {#each news as n}
        {#if n.id == id}
            <NewsPopup news ={n}/>
        {/if}
    {/each}
{/await}
</div>
<style>
    #Place{
        width:75%;
        background-color: white;
        display: grid;
    }
</style>