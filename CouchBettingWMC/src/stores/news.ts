interface News{
    title: string,
    source: string,
    content: string,
    image:string,
    date: string,
}
export async function GetNews() : Promise<any> {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'all-sport-news-and-live-scores.p.rapidapi.com',
            'X-RapidAPI-Key': '00035a63a3msh1a62ff152aaab6dp177507jsn53bacee8f9db'
        }
    };
    const news: News[] = [];
    for(let y = 0; y < 16;y++)
    {
        news[y] = {
            title: "",
            source: "",
            content: "",
            image: "",
            date: "",
        };
    }
    fetch('https://all-sport-news-and-live-scores.p.rapidapi.com/sport/football', options)
        .then(response => response.json())
        .then(data => {

            if(data != undefined)
            {
                let x = 0;
                const list = data;
                list.map(item=>{
                    news[x].title = item.title;
                    news[x].content = item.content;
                    news[x].image = item.image;
                    news[x].date = item.published_date;
                    news[x].source = item.source;

                    x++
                })
            }
        })
        .catch(err => console.error(err));
    return news;
}