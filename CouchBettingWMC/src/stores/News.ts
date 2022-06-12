export interface News{
    title: string,
    author: string,
    description: string,
    content: string,
    image:string,
    date: string,
    id:string,
}
export async function GetNewsFromApi() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
            'X-RapidAPI-Key': '00035a63a3msh1a62ff152aaab6dp177507jsn53bacee8f9db'
        }
    };
    const news: News[] = [];

    const url = "https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913320920836&page=1";
    return await fetch(url, options)
        .then(response => response.json())
        .then(data => {

            const list = data.data;
            let x= 0;

            list.map(article => {
                let a = "";
                if(article.authors.length != 0)
                {
                    a = article.authors[0].name;
                }
                const p = article.created_at.slice(0,10);
                news[x] = {
                    title: article.title,
                    author: a,
                    description: article.seo.description,
                    content: article.body,
                    image: article.image.data.urls.uploaded.original,
                    date: p,
                    id: x.toString(),
                };
                x++;
            });
            return news;
        })
}