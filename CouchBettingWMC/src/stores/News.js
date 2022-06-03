export async function GetNews() {
    const options = {
        method: 'GET',
    };
    const news = [];
    fetch("https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=e8517c35369347f8861fbe8a136f438b", options)
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
                id: x.toString(),
                source: article.url,
                sourceName: article.source.name,
            };
            x++;
        });
    })
        .catch(err => console.error(err));
    return news;
}
//# sourceMappingURL=News.js.map