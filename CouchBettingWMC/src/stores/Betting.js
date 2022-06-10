import { upGames } from "./Upcoming-Games";
import { finishedGames } from "./Finished-Games";
var BetType;
(function (BetType) {
    BetType[BetType["WinnerHome"] = 0] = "WinnerHome";
    BetType[BetType["WinnerGuest"] = 1] = "WinnerGuest";
    BetType[BetType["Draw"] = 2] = "Draw";
    BetType[BetType["Score"] = 3] = "Score";
    BetType[BetType["Goals"] = 4] = "Goals";
})(BetType || (BetType = {}));
export class BettSystem {
    AddBetToUser(cost, win, id, type) {
        let bet;
        upGames.map(item => {
            if (item.id == id) {
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
                };
            }
        });
        loggedAccount.bets.push(bet);
        const user = {
            name: loggedAccount.name,
            password: loggedAccount.password,
            coins: loggedAccount.coins - bet.cost,
            bets: loggedAccount.bets,
        };
        $.ajax({
            url: "http://localhost:4000/accounts/" + loggedAccount.id.toString(),
            data: JSON.stringify(user),
            type: 'PATCH',
            contentType: 'application/json',
            processData: false,
            success: _ => { console.log("success"); }
        });
    }
    GetWins(b) {
        const won = [];
        finishedGames.map(item => {
            loggedAccount.bets.map(bet => {
                if (bet.id == item.id) {
                    if ((bet.betType == BetType.Draw && item.guestGoals == item.homeGoals) || (bet.betType == BetType.WinnerHome && item.homeGoals > item.guestGoals) || (bet.betType == BetType.WinnerGuest && item.guestGoals > item.homeGoals) || (bet.betType == BetType.Score && item.homeGoals == bet.homeGoals && item.guestGoals == bet.guestGoals) || (bet.betType == BetType.Goals && item.homeGoals + item.guestGoals == bet.homeGoals)) {
                        won.push(bet);
                        if (b == true) {
                            this.AddWin(bet.win, bet.id);
                        }
                    }
                }
            });
        });
        return won;
    }
    GetLoses() {
        const lost = [];
        finishedGames.map(item => {
            loggedAccount.bets.map(bet => {
                if (bet.id == item.id) {
                    if ((bet.betType == BetType.Draw && item.guestGoals != item.homeGoals) || (bet.betType == BetType.WinnerHome && item.homeGoals < item.guestGoals) || (bet.betType == BetType.WinnerGuest && item.guestGoals < item.homeGoals) || (bet.betType == BetType.Score && item.homeGoals != bet.homeGoals && item.guestGoals != bet.guestGoals) || (bet.betType == BetType.Goals && item.homeGoals + item.guestGoals != bet.homeGoals)) {
                        lost.push(bet);
                    }
                }
            });
        });
        return lost;
    }
    AddWin(amount, id) {
        loggedAccount.coins -= amount;
        loggedAccount.bets = loggedAccount.bets.filter(n => { return n.id != id; });
        const user = {
            name: loggedAccount.name,
            password: loggedAccount.password,
            coins: loggedAccount,
            bets: loggedAccount.bets
        };
        $.ajax({
            url: "http://localhost:4000/accounts/" + loggedAccount.id.toString(),
            data: JSON.stringify(user),
            type: 'PATCH',
            contentType: 'application/json',
            processData: false,
            success: _ => { console.log("success"); }
        });
    }
}
export const loggedAccount = await GetUser();
async function GetUser() {
    const users = await $.get("http://localhost:4000/accounts/");
    return users[0];
}
//# sourceMappingURL=Betting.js.map