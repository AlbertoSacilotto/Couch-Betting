export interface UpcomingGame {
    homeImage: string,
    guestImage: string,
    homeName: string,
    guestName: string,
    date: string,
}


export async function GetUpcomingGames() : Promise<any> {
    const options = {
        method: 'GET',
        /*headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '173f8b92b0msh36bd9a12fb677cdp159833jsnbe4948354b88'
        }*/
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '00035a63a3msh1a62ff152aaab6dp177507jsn53bacee8f9db'
        }
    };
    const upcomingGames: UpcomingGame[] = [
        {
            homeImage: "",
            guestImage: "",
            homeName: "",
            guestName: "",
            date: "",
        },
        {
            homeImage: "",
            guestImage: "",
            homeName: "",
            guestName: "",
            date: "",
        },
        {
            homeImage: "",
            guestImage: "",
            homeName: "",
            guestName: "",
            date: "",
        },
        {
            homeImage: "",
            guestImage: "",
            homeName: "",
            guestName: "",
            date: "",
        },
    ];

    await fetch('https://api-football-beta.p.rapidapi.com/fixtures?season=2021&status=NS&league=39&next=4', options)
        .then(response => response.json())
        .then(data =>{
            if(data.response != undefined) {

                let x = 0;
                const list = data.response;
                list.map(item => {

                    upcomingGames[x].homeImage = item.teams.home.logo;
                    upcomingGames[x].guestImage = item.teams.away.logo;
                    upcomingGames[x].homeName = item.teams.home.name;
                    upcomingGames[x].guestName = item.teams.away.name;
                    upcomingGames[x].date = item.fixture.date;
                    x++;
                });
            }
        })
        .catch(err => console.error(err));
    return upcomingGames;
}