export interface LiveGame {
    homeImage:string,
    guestImage:string,
    homeName:string,
    guestName:string,
    homeGoals: number,
    guestGoals:number,
    minute: number,
    stadium:string,
    city:string,
    referee: string,
}

export async function GetLiveGames() : Promise<any> {
    const options = {
        method: 'GET',
        /*headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '173f8b92b0msh36bd9a12fb677cdp159833jsnbe4948354b88'
        }*/
        /*headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '00035a63a3msh1a62ff152aaab6dp177507jsn53bacee8f9db'
        }*/
        /*headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '5f2cc192d9msh69b07515e17d774p1dd35ejsn5828f7a01216'
        }*/
        /*headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '155e473e49msh837bf9f83c94a03p118238jsn764de615730c'
        }*/
        /*headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '0c0b69a25dmsh31ec16ebeba5cdcp15b11ajsn55e3492c54c1'
        }*/
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '2c7f13b9bbmshc9acb30687769acp196323jsned8f5c0b4f5a'
        }
    };
    const liveGames: LiveGame[] = [];
    for(let y = 0; y < 10;y++)
    {
        liveGames[y] = {
            homeImage:"",
            guestImage:"",
            homeName:"",
            guestName:"",
            homeGoals: 0,
            guestGoals:0,
            minute: 0,
            stadium:"",
            city:"",
            referee: "",
        };
    }

    fetch(`https://api-football-beta.p.rapidapi.com/fixtures?season=2021&live=808-39&league=39`, options)
        .then(response => response.json())
        .then(data =>{
            if(data.response != undefined) {
                let x = 0;
                const list = data.response;

                list.map(item => {
                    liveGames[x].homeImage = item.teams.home.logo;
                    liveGames[x].guestImage = item.teams.away.logo;
                    liveGames[x].homeName = item.teams.home.name;
                    liveGames[x].guestName = item.teams.away.name;
                    liveGames[x].homeGoals = item.goals.home;
                    liveGames[x].guestGoals = item.goals.away;
                    liveGames[x].minute = item.fixture.status.elapsed;
                    liveGames[x].city = item.fixture.venue.city;
                    liveGames[x].stadium = item.fixture.venue.stadium;
                    liveGames[x].referee = item.fixture.referee;
                    x++;
                });
            }
        })
        .catch(err => console.error(err));

    return liveGames;
}

