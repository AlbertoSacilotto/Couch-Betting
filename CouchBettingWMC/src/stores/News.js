export async function GetNewsFromApi() {
    const options = {
        method: 'GET',
    };
    const news = [];
    //const url = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=e8517c35369347f8861fbe8a136f438b";
    const url = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=96795eb66ddc4b19a456b67bf13c7573";
    fetch(url, options)
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
                source: x.toString(),
                id: article.url,
                sourceName: article.source.name,
            };
            x++;
        });
    })
        .catch(err => console.error(err));
    return news;
}
//# sourceMappingURL=News.js.map