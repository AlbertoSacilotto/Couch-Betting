export interface Team{
    teamName: string,
    teamLogo:string,
    teamStadium: string,
    teamCity:string,
}

export function GetAllTeams():Promise<any>{

    const teams:Team[] = [];


        teams = [
            {
                teamCity: "Manchester",
                teamLogo: "https://media.api-sports.io/football/teams/33.png",
                teamName: "Manchester United",
                teamStadium: "Old Trafford",
            },
            {
                teamCity: "Newcastle upon Tyne"
                teamLogo: "https://media.api-sports.io/football/teams/34.png"
                teamName: "Newcastle"
                teamStadium: "St. James' Park"
            },
            {

            },
            {

            },
            {

            },
            {

            },
        ];


    return teams;
}