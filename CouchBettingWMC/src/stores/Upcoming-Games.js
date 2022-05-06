export async function GetUpcomingGames(length) {
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
    const upcomingGames = [];
    for (let y = 0; y < length; y++) {
        upcomingGames[y] = {
            homeImage: "",
            guestImage: "",
            homeName: "",
            guestName: "",
            date: "",
            stadium: "",
            referee: "",
            city: "",
        };
    }
    await fetch(`https://api-football-beta.p.rapidapi.com/fixtures?season=2021&status=NS&league=39&next=${length}`, options)
        .then(response => response.json())
        .then(data => {
        if (data.response != undefined) {
            let x = 0;
            const list = data.response;
            list.map(item => {
                upcomingGames[x].homeImage = item.teams.home.logo;
                upcomingGames[x].guestImage = item.teams.away.logo;
                upcomingGames[x].homeName = item.teams.home.name;
                upcomingGames[x].guestName = item.teams.away.name;
                upcomingGames[x].date = item.fixture.date;
                upcomingGames[x].stadium = item.fixture.venue.name;
                upcomingGames[x].referee = item.fixture.referee;
                upcomingGames[x].city = item.fixture.venue.city;
                x++;
            });
        }
    })
        .catch(err => console.error(err));
    return upcomingGames;
}
//# sourceMappingURL=Upcoming-Games.js.map