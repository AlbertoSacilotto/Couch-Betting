import {teams} from "./Teams";

export interface FinishedGames {
    homeImage: string,
    guestImage: string,
    homeName: string,
    guestName: string,
    homeGoals: number,
    guestGoals: number,
    homeShort: string,
    guestShort: string,
    date: string,
    stadium: string;
    referee: string;
    city:string;
    id: number,
}

export const finishedGames:FinishedGames[] = [
    {
        homeImage: teams[12].teamLogo,
        guestImage: teams[9].teamLogo,
        homeName: teams[12].teamName,
        guestName: teams[9].teamName,
        homeShort: teams[12].teamShort,
        guestShort: teams[9].teamShort,
        stadium: teams[12].teamStadium,
        referee: "Ilijas Brkic",
        city:teams[12].teamCity,
        homeGoals: 2,
        guestGoals:2,
        date: "28/5/2022",
        id: 9,
    },
    {
        homeImage: teams[13].teamLogo,
        guestImage: teams[4].teamLogo,
        homeName: teams[13].teamName,
        guestName: teams[4].teamName,
        homeShort: teams[13].teamShort,
        guestShort: teams[4].teamShort,
        stadium: teams[13].teamStadium,
        referee: "Artin Becher",
        city:teams[13].teamCity,
        homeGoals: 0,
        guestGoals:1,
        date:"28/5/2022",
        id: 8,
    },
    {
        homeImage: teams[15].teamLogo,
        guestImage: teams[0].teamLogo,
        homeName: teams[15].teamName,
        guestName: teams[0].teamName,
        homeShort: teams[15].teamShort,
        guestShort: teams[0].teamShort,
        stadium: teams[15].teamStadium,
        referee: "Hasallahm Mehmet",
        city:teams[15].teamCity,
        homeGoals: 3,
        guestGoals:1,
        date:"28/5/2022",
        id: 7,
    },
    {
        homeImage: teams[5].teamLogo,
        guestImage: teams[19].teamLogo,
        homeName: teams[5].teamName,
        guestName: teams[19].teamName,
        homeShort: teams[5].teamShort,
        guestShort: teams[19].teamShort,
        stadium: teams[5].teamStadium,
        referee: "Robert Guler",
        city:teams[5].teamCity,
        homeGoals: 1,
        guestGoals:0,
        date:"24/5/2022",
        id: 6,
    },
    {
        homeImage: teams[7].teamLogo,
        guestImage: teams[10].teamLogo,
        homeName: teams[7].teamName,
        guestName: teams[10].teamName,
        homeShort: teams[7].teamShort,
        guestShort: teams[10].teamShort,
        stadium: teams[7].teamStadium,
        referee: "Ilijas Brkic",
        city:teams[2].teamCity,
        homeGoals: 2,
        guestGoals:1,
        date:"24/5/2022",
        id: 5,
    },
    {
        homeImage: teams[16].teamLogo,
        guestImage: teams[14].teamLogo,
        homeName: teams[16].teamName,
        guestName: teams[14].teamName,
        homeShort: teams[16].teamShort,
        guestShort: teams[14].teamShort,
        stadium: teams[16].teamStadium,
        referee: "Artin Becher",
        city:teams[16].teamCity,
        homeGoals: 0,
        guestGoals:1,
        date:"24/5/2022",
        id: 4,
    },
    {
        homeImage: teams[18].teamLogo,
        guestImage: teams[17].teamLogo,
        homeName: teams[18].teamName,
        guestName: teams[17].teamName,
        homeShort: teams[18].teamShort,
        guestShort: teams[17].teamShort,
        stadium: teams[18].teamStadium,
        referee: "Hasallahm Mehmet",
        city:teams[18].teamCity,
        homeGoals: 3,
        guestGoals:1,
        date:"20/5/2022",
        id: 3,
    },
    {
        homeImage: teams[1].teamLogo,
        guestImage: teams[3].teamLogo,
        homeName: teams[1].teamName,
        guestName: teams[3].teamName,
        homeShort: teams[1].teamShort,
        guestShort: teams[3].teamShort,
        stadium: teams[1].teamStadium,
        referee: "Robert Guler",
        city:teams[1].teamCity,
        homeGoals: 1,
        guestGoals:0,
        date:"20/5/2022",
        id: 2,
    },
    {
        homeImage: teams[2].teamLogo,
        guestImage: teams[11].teamLogo,
        homeName: teams[2].teamName,
        guestName: teams[11].teamName,
        homeShort: teams[2].teamShort,
        guestShort: teams[11].teamShort,
        stadium: teams[2].teamStadium,
        referee: "Ilijas Brkic",
        city:teams[2].teamCity,
        homeGoals: 2,
        guestGoals:1,
        date:"20/5/2022",
        id: 1,
    },
    {
        homeImage: teams[8].teamLogo,
        guestImage: teams[6].teamLogo,
        homeName: teams[8].teamName,
        guestName: teams[6].teamName,
        homeShort: teams[8].teamShort,
        guestShort: teams[6].teamShort,
        stadium: teams[8].teamStadium,
        referee: "Hasallahm Mehmet",
        city:teams[8].teamCity,
        homeGoals: 1,
        guestGoals:2,
        date:"16/5/2022",
        id: 0,
    },
]