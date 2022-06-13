import { upGames } from "./Upcoming-Games";
import { finishedGames } from "./Finished-Games";
import { goto } from "$app/navigation";
import jQuery from "jquery";
export class BettSystem {
    AddBetToUser(cost, win, id, type, homeGoals, guestGoals) {
        let bet;
        upGames.map(item => {
            if (item.id == id) {
                let textt = "";
                console.log(type);
                if (type == 0) {
                    textt = "The match will be a draw";
                }
                else if (type == 1) {
                    textt = `${item.homeName} will win against ${item.guestName}`;
                }
                else if (type == 2) {
                    textt = `${item.guestName} will win against ${item.homeName}`;
                }
                else if (type == 3) {
                    textt = `${item.homeName} will play ${homeGoals} : ${guestGoals} against ${item.guestName}`;
                }
                else if (type == 4) {
                    textt = `There will be ${homeGoals} goals scored`;
                }
                bet = {
                    id: id,
                    home: item.homeName,
                    guest: item.guestName,
                    homeIMG: item.homeImage,
                    guestIMG: item.guestImage,
                    guestGoals: guestGoals,
                    homeGoals: homeGoals,
                    cost: cost,
                    betType: type,
                    win: win,
                    text: textt,
                    state: 0,
                };
            }
        });
        loggedAccount.bets.push(bet);
        const user = {
            name: loggedAccount.name,
            email: loggedAccount.email,
            coins: loggedAccount.coins - bet.cost,
            bets: loggedAccount.bets,
            historyOfBets: loggedAccount.historyOfBets,
        };
        jQuery.ajax({
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
                    console.log(item.homeGoals);
                    console.log(item.guestGoals);
                    if ((bet.betType == 0 && item.guestGoals == item.homeGoals) || (bet.betType == 1 && item.homeGoals > item.guestGoals) || (bet.betType == 2 && item.guestGoals > item.homeGoals) || (bet.betType == 3 && item.homeGoals == bet.homeGoals && item.guestGoals == bet.guestGoals) || (bet.betType == 4 && item.homeGoals + item.guestGoals == bet.homeGoals)) {
                        bet.state = 1;
                        bet.homeGoals = item.homeGoals;
                        bet.guestGoals = item.guestGoals;
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
    GetLoses(b) {
        const lost = [];
        finishedGames.map(item => {
            loggedAccount.bets.map(bet => {
                if (bet.id == item.id) {
                    if ((bet.betType == 0 && item.guestGoals != item.homeGoals) || (bet.betType == 1 && item.homeGoals < item.guestGoals) || (bet.betType == 2 && item.guestGoals < item.homeGoals) || (bet.betType == 3 && item.homeGoals != bet.homeGoals && item.guestGoals != bet.guestGoals) || (bet.betType == 4 && item.homeGoals + item.guestGoals != bet.homeGoals)) {
                        bet.state = 2;
                        bet.homeGoals = item.homeGoals;
                        bet.guestGoals = item.guestGoals;
                        lost.push(bet);
                        if (b == true) {
                            this.AddLose(bet.id);
                        }
                    }
                }
            });
        });
        return lost;
    }
    AddLose(id) {
        loggedAccount.bets.map(item => {
            if (item.id == id) {
                loggedAccount.historyOfBets.push(item);
            }
        });
        loggedAccount.bets = loggedAccount.bets.filter(n => { return n.id != id; });
        const user = {
            name: loggedAccount.name,
            email: loggedAccount.email,
            coins: loggedAccount.coins,
            bets: loggedAccount.bets,
            historyOfBets: loggedAccount.historyOfBets
        };
        jQuery.ajax({
            url: "http://localhost:4000/accounts/" + loggedAccount.id.toString(),
            data: JSON.stringify(user),
            type: 'PATCH',
            contentType: 'application/json',
            processData: false,
            success: _ => {
                console.log("success");
            }
        });
    }
    AddWin(amount, id) {
        loggedAccount.coins += parseInt(amount.toFixed());
        loggedAccount.bets.map(bet => {
            if (id == bet.id) {
                loggedAccount.historyOfBets.push(bet);
            }
        });
        loggedAccount.bets = loggedAccount.bets.filter(n => { return n.id != id; });
        const user = {
            name: loggedAccount.name,
            email: loggedAccount.email,
            coins: loggedAccount.coins,
            bets: loggedAccount.bets,
            historyOfBets: loggedAccount.historyOfBets
        };
        jQuery.ajax({
            url: "http://localhost:4000/accounts/" + loggedAccount.id.toString(),
            data: JSON.stringify(user),
            type: 'PATCH',
            contentType: 'application/json',
            processData: false,
            success: _ => { console.log("success"); }
        });
    }
    check(amount, win, id, type, homeGoals, guestGoals) {
        let a = false;
        console.log(loggedAccount);
        loggedAccount.bets.map(item => {
            if (id == item.id) {
                a = true;
            }
        });
        const b = confirm(`Do you really want to place ${amount} coins on this game`);
        if (amount > 0 && amount <= loggedAccount.coins && b == true && a == false) {
            this.AddBetToUser(amount, win, id, type, homeGoals, guestGoals);
            goto("/betting");
            setTimeout(() => { window.location.reload(); }, 350);
        }
        else if (a != false) {
            alert("You already placed a bet on this game!");
            goto("/games");
        }
        else if (b == false) {
            alert("Bet was canceled!");
            goto("/");
        }
        else {
            alert("You have to place a valid amount of coins!");
        }
    }
}
export const loggedAccount = await GetUser();
async function GetUser() {
    const users = await jQuery.get("http://localhost:4000/accounts");
    return users[parseInt(localStorage.getItem('id')) - 1];
}
//# sourceMappingURL=Betting.js.map