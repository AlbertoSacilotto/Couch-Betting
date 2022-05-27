var BetType;
(function (BetType) {
    BetType[BetType["Score"] = 0] = "Score";
    BetType[BetType["Goals"] = 1] = "Goals";
    BetType[BetType["WinnerHome"] = 2] = "WinnerHome";
    BetType[BetType["WinnerGuest"] = 3] = "WinnerGuest";
    BetType[BetType["Draw"] = 4] = "Draw";
})(BetType || (BetType = {}));
export class BettSystem {
    AddBetToUser(bet) {
        const user = {
            name: loggedAccount.name,
            password: loggedAccount.password,
            coins: loggedAccount.coins - bet.cost,
            bets: loggedAccount.bets.push(bet),
        };
        $.ajax({
            url: "http://localhost:4000/account/" + loggedAccount.id.toString(),
            data: JSON.stringify(user),
            type: 'PATCH',
            contentType: 'application/json',
            processData: false,
            success: _ => { console.log("success"); }
        });
    }
}
//# sourceMappingURL=Betting.js.map