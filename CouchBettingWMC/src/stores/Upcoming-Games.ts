export interface Game{
    homeName:string;
    guestName:string;
    homeGoals:number;
    guestGoals:number;
}
export async function GetGames():Promise<any> {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': 'df8cdc3d71msh1d4fe544c21e5acp16de86jsn9767efcbd70f'
        }
    };

    fetch('https://api-football-beta.p.rapidapi.com/fixtures?season=2021&status=NS&league=39&next=4', options)
        .then(response => response.json())
        .then(data => {
            let games: Game[];
            const list = data.response;
            let x = 0;
            console.log(data);
            list.map(item =>{
                console.log(item.teams.home.name);
                games[x].homeName = item.teams.home.name;
                games[x].guestName = item.teams.away.name;
                games[x].guestGoals = item.teams.away.name;
                x++;
            })
            return games;
        })
        .catch(err => console.error(err));
}
