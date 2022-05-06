export async function GetLiveGames() {
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
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '5f2cc192d9msh69b07515e17d774p1dd35ejsn5828f7a01216'
        }
    };
    const liveGames = [
        {
            homeImage: "",
            guestImage: "",
            homeName: "",
            guestName: "",
            homeGoals: 0,
            guestGoals: 0,
            minute: 0,
        },
        {
            homeImage: "",
            guestImage: "",
            homeName: "",
            guestName: "",
            homeGoals: 0,
            guestGoals: 0,
            minute: 0,
        },
    ];
    fetch('https://api-football-beta.p.rapidapi.com/fixtures?season=2021&live=39-808&league=39&next=2', options)
        .then(response => response.json())
        .then(data => {
        if (data.response != undefined) {
            let x = 0;
            const list = data.response;
            list.map(item => {
                liveGames[x].homeImage = item.teams.home.logo;
                liveGames[x].guestImage = item.teams.away.logo;
                liveGames[x].homeName = item.teams.home.name;
                liveGames[x].guestName = item.teams.home.name;
                liveGames[x].homeGoals = item.goals.home;
                liveGames[x].guestGoals = item.goals.away;
                liveGames[x].minute = item.fixture.status.elapsed;
                x++;
            });
        }
    })
        .catch(err => console.error(err));
    console.log(liveGames);
    return liveGames;
}
//# sourceMappingURL=Live-Games.js.map