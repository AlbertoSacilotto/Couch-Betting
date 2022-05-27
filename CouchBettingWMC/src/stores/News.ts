export interface News{
    title: string,
    author: string,
    description: string,
    content: string,
    image:string,
    date: string,
}
export async function GetNews() : Promise<News[]> {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
            'X-RapidAPI-Key': '00035a63a3msh1a62ff152aaab6dp177507jsn53bacee8f9db'
        }
    };
    const news: News[] = [];
    for(let y = 0; y < 20;y++)
    {
        news[y] = {
            title: "",
            author: "",
            description: "",
            content: "",
            image: "",
            date: "",
        };
    }

    fetch('https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913320920836&page=1', options)
        .then(response => response.json())
        .then(data=>{;
            const list = data.data;

            let x = 0;
            list.map(item=>{
                news[x].title = item.seo.title;
                news[x].author = "";//item.authors[0].name;
                news[x].description = item.subtitle;
                if(news[x].description == null)
                {
                    news[x].description = item.seo.description;
                }
                news[x].image = item.image.data.urls.uploaded.original;
                news[x].date = item.created_at;
                item.body.map(text_part=>{
                    news[x].content += text_part.data.content;//.slice(3,text_part.data.content.length-4);
                })
                x++;
            })
            console.log(news)
        })
        .catch(err => console.error(err));
    return news;
}