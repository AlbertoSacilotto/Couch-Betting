export interface Bet{
    id:number,
    home: string,
    guest: string,
    homeIMG: string,
    guestIMG: string,
    cost: number,
    betType: BetType,
    win: number,
}

enum BetType{
    Score,
    Goals,
    WinnerHome,
    WinnerGuest,
    Draw,
}

export class BettSystem
{
    public AddBetToUser(bet: Bet)
    {
        const user={
            name: loggedAccount.name,
            password: loggedAccount.password,
            coins: loggedAccount.coins - bet.cost,
            bets: loggedAccount.bets.push(bet),
        }
        $.ajax({
            url: "http://localhost:4000/account/"+loggedAccount.id.toString(),
            data: JSON.stringify(user),
            type: 'PATCH',
            contentType: 'application/json',
            processData: false,
            success: _ => {console.log("success")}
        });
    }
}