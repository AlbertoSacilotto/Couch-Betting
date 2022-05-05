export async function GetLiveGames() : Promise<any> {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '173f8b92b0msh36bd9a12fb677cdp159833jsnbe4948354b88'
        }
    };

    const response = await fetch('https://api-football-beta.p.rapidapi.com/fixtures?season=2021&live=39-808&league=39', options)

    return await response.json();
}
