import { teams } from "./Teams";
/*export async function GetUpcomingGames(length:number) : Promise<any> {
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
    const upcomingGames: UpcomingGame[] = [];
    for(let y = 0; y < length;y++)
    {
        upcomingGames[y] = {
            homeImage: "",
            guestImage: "",
            homeName: "",
            guestName: "",
            date: "",
            hour: "",
            stadium: "",
            referee: "",
            city: "",
        };
    }
    await fetch(`https://api-football-beta.p.rapidapi.com/fixtures?season=2021&status=NS&league=39&next=${length}`, options)
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
                    const dateStamps = item.fixture.date.split("T");
                    upcomingGames[x].date = dateStamps[0];
                    const timeStamps = dateStamps[1].split(":");
                    timeStamps[0] = (parseInt(timeStamps[0]) + 2).toString()
                    if(parseInt(timeStamps[0]) > 23)
                    {
                        timeStamps[0] = "0" + (24 - parseInt(timeStamps[0])).toString();
                    }
                    upcomingGames[x].hour = timeStamps[0] +":"+ timeStamps[1];
                    upcomingGames[x].stadium = item.fixture.venue.name;
                    upcomingGames[x].referee = item.fixture.referee;
                    upcomingGames[x].city = item.fixture.venue.city;
                    x++;
                });
            }
        })
        .catch(err => console.error(err));
    return upcomingGames;
}*/
export const upGames = [
    {
        homeImage: teams[4].teamLogo,
        guestImage: teams[14].teamLogo,
        homeName: teams[4].teamName,
        guestName: teams[14].teamName,
        homeShort: teams[4].teamShort,
        guestShort: teams[14].teamShort,
        date: "10.06.2022",
        hour: "17:00",
        stadium: teams[4].teamStadium,
        referee: "John Peterson",
        city: teams[4].teamCity,
        id: 21,
    },
    {
        homeImage: teams[5].teamLogo,
        guestImage: teams[6].teamLogo,
        homeName: teams[5].teamName,
        guestName: teams[6].teamName,
        homeShort: teams[5].teamShort,
        guestShort: teams[6].teamShort,
        date: "10.06.2022",
        hour: "17:00",
        stadium: teams[5].teamStadium,
        referee: "Yanis Smith",
        city: teams[5].teamCity,
        id: 20,
    },
    {
        homeImage: teams[13].teamLogo,
        guestImage: teams[1].teamLogo,
        homeName: teams[13].teamName,
        guestName: teams[1].teamName,
        homeShort: teams[13].teamShort,
        guestShort: teams[1].teamShort,
        date: "14.06.2022",
        hour: "15:30",
        stadium: teams[13].teamStadium,
        referee: "Abdul Samet",
        city: teams[13].teamCity,
        id: 19,
    },
    {
        homeImage: teams[8].teamLogo,
        guestImage: teams[10].teamLogo,
        homeName: teams[8].teamName,
        guestName: teams[10].teamName,
        homeShort: teams[8].teamShort,
        guestShort: teams[10].teamShort,
        date: "14.06.2022",
        hour: "16:00",
        stadium: teams[8].teamStadium,
        referee: "Andrei Kaukal",
        city: teams[8].teamCity,
        id: 18,
    },
    {
        homeImage: teams[9].teamLogo,
        guestImage: teams[17].teamLogo,
        homeName: teams[9].teamName,
        guestName: teams[17].teamName,
        homeShort: teams[9].teamShort,
        guestShort: teams[17].teamShort,
        date: "15.06.2022",
        hour: "14:00",
        stadium: teams[9].teamStadium,
        referee: "John Grey",
        city: teams[9].teamCity,
        id: 17,
    },
    {
        homeImage: teams[3].teamLogo,
        guestImage: teams[15].teamLogo,
        homeName: teams[3].teamName,
        guestName: teams[15].teamName,
        homeShort: teams[3].teamShort,
        guestShort: teams[15].teamShort,
        date: "15.06.2022",
        hour: "14:00",
        stadium: teams[3].teamStadium,
        referee: "Walter White",
        city: teams[3].teamCity,
        id: 16,
    },
];
//# sourceMappingURL=Upcoming-Games.js.map