export interface Game {
    id:number;
    home:string;
    guest:string;
    goalsHome:number;
    goalsGuest: number;
    minute: number;
}
export async function GetLiveGames() : Promise<Game[]> {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '173f8b92b0msh36bd9a12fb677cdp159833jsnbe4948354b88'
        }
    };

    const response = await fetch('https://api-football-beta.p.rapidapi.com/fixtures?season=2021&status=FT&league=39', options)

    return await response.json();
}
/*function FormLiveGames(data:any):Game[] {
    const games :Game[] = [];
    let x = 0;
    for(const d of data) {
        games[x].home = d.fixture.teams.home.id;
        games[x].guest = d.fixture.teams.away.id
        games[x].goalsHome = d.goals.home;
        games[x].goalsHome = d.goals.away;
        games[x].minute = d.fixture.status.elapsed;
        x++
    }
    return games
}*/