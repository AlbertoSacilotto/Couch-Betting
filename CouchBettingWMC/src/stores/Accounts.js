const unallowedSigns = ['*', '/', '"', '-', '+', '#', '[', ']', '{', '}', '=', ';', ':', '@', '|', '<', '>', '?', '!', ',',];
export class AccountManager {
    async LogIn(name2, password) {
        const users = await $.get("http://localhost:4000/accounts");
        users.map(existing_user => {
            if (existing_user.username == name2) {
                global.loggedAccount = existing_user;
                console.log(loggedAccount);
                return true;
            }
        });
        return false;
    }
    async SignUpUser(name, password) {
        if (await this.LogIn(name, password) == false && this.VerfiyName(name) == true) {
            this.AddUser(name, password);
        }
        loggedAccount = null;
        return false;
    }
    AddUser(name, password) {
        const user = {
            username: name,
            password: password,
            coins: 10000,
            bets: [],
        };
        $.ajax({
            url: "http://localhost:4000/accounts",
            data: JSON.stringify(user),
            type: 'POST',
            contentType: 'application/json',
            processData: false,
            success: _ => { console.log("success"); }
        });
    }
    VerfiyName(name) {
        if (name == "" || name == undefined || name == null || name.length > 16) {
            return false;
        }
        else {
            for (const n of name) {
                for (const sign of unallowedSigns) {
                    if (n == sign) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
export let loggedAccount;
//# sourceMappingURL=Accounts.js.map