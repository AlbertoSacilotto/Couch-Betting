import {teams} from "./Teams";

export interface LiveGame {
    homeImage:string,
    guestImage:string,
    homeName:string,
    guestName:string,
    homeGoals: number,
    guestGoals:number,
    homeShort: string,
    guestShort: string,
    minute: number,
    stadium:string,
    city:string,
    referee: string,
}

/*export async function GetLiveGames() : Promise<any> {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '173f8b92b0msh36bd9a12fb677cdp159833jsnbe4948354b88'
        }
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '00035a63a3msh1a62ff152aaab6dp177507jsn53bacee8f9db'
        }
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '5f2cc192d9msh69b07515e17d774p1dd35ejsn5828f7a01216'
        }
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '155e473e49msh837bf9f83c94a03p118238jsn764de615730c'
        }
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '0c0b69a25dmsh31ec16ebeba5cdcp15b11ajsn55e3492c54c1'
        }
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
}*/

export const liveGames:LiveGame[] = [
    {
        homeImage: teams[2].teamLogo,
        guestImage: teams[19].teamLogo,
        homeName: teams[2].teamName,
        guestName: teams[19].teamName,
        homeShort: teams[2].teamShort,
        guestShort: teams[19].teamShort,
        stadium: teams[2].teamStadium,
        referee: "Ilijas Brkic",
        city:teams[2].teamCity,
        homeGoals: 2,
        guestGoals:1,
        minute: 30,
    },
    {
        homeImage: teams[18].teamLogo,
        guestImage: teams[11].teamLogo,
        homeName: teams[18].teamName,
        guestName: teams[11].teamName,
        homeShort: teams[18].teamShort,
        guestShort: teams[11].teamShort,
        stadium: teams[18].teamStadium,
        referee: "Artin Becher",
        city:teams[18].teamCity,
        homeGoals: 0,
        guestGoals:1,
        minute: 60,
    },
    {
        homeImage: teams[5].teamLogo,
        guestImage: teams[14].teamLogo,
        homeName: teams[5].teamName,
        guestName: teams[14].teamName,
        homeShort: teams[5].teamShort,
        guestShort: teams[14].teamShort,
        stadium: teams[5].teamStadium,
        referee: "Hasallahm Mehmet",
        city:teams[5].teamCity,
        homeGoals: 2,
        guestGoals:2,
        minute: 61,
    },
    {
        homeImage: teams[0].teamLogo,
        guestImage: teams[16].teamLogo,
        homeName: teams[0].teamName,
        guestName: teams[16].teamName,
        homeShort: teams[0].teamShort,
        guestShort: teams[16].teamShort,
        stadium: teams[0].teamStadium,
        referee: "Robert Guler",
        city:teams[0].teamCity,
        homeGoals: 1,
        guestGoals:0,
        minute: 89,
    },
    {
        homeImage: teams[7].teamLogo,
        guestImage: teams[17].teamLogo,
        homeName: teams[7].teamName,
        guestName: teams[17].teamName,
        homeShort: teams[7].teamShort,
        guestShort: teams[17].teamShort,
        stadium: teams[7].teamStadium,
        referee: "Robert Guler",
        city:teams[7].teamCity,
        homeGoals: 1,
        guestGoals:5,
        minute: 90,
    },
    {
        homeImage: teams[13].teamLogo,
        guestImage: teams[9].teamLogo,
        homeName: teams[13].teamName,
        guestName: teams[9].teamName,
        homeShort: teams[13].teamShort,
        guestShort: teams[9].teamShort,
        stadium: teams[13].teamStadium,
        referee: "Robert Guler",
        city:teams[13].teamCity,
        homeGoals: 1,
        guestGoals:0,
        minute: 90,
    },
]

