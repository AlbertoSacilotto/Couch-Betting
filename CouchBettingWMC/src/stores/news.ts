const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'football-news3.p.rapidapi.com',
        'X-RapidAPI-Key': '5f2cc192d9msh69b07515e17d774p1dd35ejsn5828f7a01216'
    }
};

fetch('https://football-news3.p.rapidapi.com/news', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));