import {upGames} from "./Upcoming-Games";
import {finishedGames} from "./Finished-Games";
import type {User} from "./Accounts";

export interface Bet{
    id:number,
    home: string,
    guest: string,
    homeIMG: string,
    guestIMG: string,
    homeGoals: number,
    guestGoals:number,
    cost: number,
    betType: BetType,
    win: number,
}

enum BetType{
    WinnerHome,
    WinnerGuest,
    Draw,
    Score,
    Goals,
}

export class BettSystem
{
    public AddBetToUser(cost:number,win:number,id:number,type:number)
    {
        let bet: Bet;
        upGames.map(item=>{
            if(item.id == id)
            {
                bet = {
                    id: id,
                    home: item.homeName,
                    guest: item.guestName,
                    homeIMG: item.homeImage,
                    guestIMG: item.guestImage,
                    guestGoals: 0,
                    homeGoals: 0,
                    cost: cost,
                    betType: type,
                    win: win,
                }
            }
        });
        loggedAccount.bets.push(bet);
        const user={
            name: loggedAccount.name,
            password: loggedAccount.password,
            coins: loggedAccount.coins - bet.cost,
            bets: loggedAccount.bets,
        }
        $.ajax({
            url: "http://localhost:4000/accounts/"+loggedAccount.id.toString(),
            data: JSON.stringify(user),
            type: 'PATCH',
            contentType: 'application/json',
            processData: false,
            success: _ => {console.log("success")}
        });
    }
    public GetWins(b: boolean){
        const won = [];
        finishedGames.map(item=>{
            loggedAccount.bets.map(bet=>{
                if(bet.id == item.id)
                {
                    if((bet.betType == BetType.Draw && item.guestGoals == item.homeGoals)||(bet.betType == BetType.WinnerHome && item.homeGoals>item.guestGoals)||(bet.betType == BetType.WinnerGuest && item.guestGoals>item.homeGoals)||(bet.betType == BetType.Score && item.homeGoals == bet.homeGoals && item.guestGoals == bet.guestGoals)||( bet.betType == BetType.Goals && item.homeGoals+item.guestGoals == bet.homeGoals))
                    {
                        won.push(bet);
                        if(b ==true) {
                            this.AddWin(bet.win, bet.id);
                        }
                    }
                }
            });
        });
        return won;
    }
    public GetLoses(){
        const lost = [];
        finishedGames.map(item=>{
            loggedAccount.bets.map(bet=>{
                if(bet.id == item.id)
                {
                    if((bet.betType == BetType.Draw && item.guestGoals != item.homeGoals)||(bet.betType == BetType.WinnerHome && item.homeGoals<item.guestGoals)||(bet.betType == BetType.WinnerGuest && item.guestGoals<item.homeGoals)||(bet.betType == BetType.Score && item.homeGoals != bet.homeGoals && item.guestGoals != bet.guestGoals)||( bet.betType == BetType.Goals && item.homeGoals+item.guestGoals != bet.homeGoals))
                    {
                        lost.push(bet);
                    }
                }
            });
        });
        return lost;
    }
    public AddWin(amount:number,id:number)
    {
        loggedAccount.coins-=amount;
        loggedAccount.bets = loggedAccount.bets.filter(n=>{return n.id != id});
        const user = {
            name: loggedAccount.name,
            password: loggedAccount.password,
            coins: loggedAccount,
            bets: loggedAccount.bets
        }
        $.ajax({
            url: "http://localhost:4000/accounts/"+loggedAccount.id.toString(),
            data: JSON.stringify(user),
            type: 'PATCH',
            contentType: 'application/json',
            processData: false,
            success: _ => {console.log("success")}
        });
    }
}
export const loggedAccount = await GetUser();
async function  GetUser()
{
    const users = <User[]> await $.get("http://localhost:4000/accounts/");
    return users[0];
}