const unallowedSigns = ['*', '/', '"', '-', '+', '#', '[', ']', '{', '}', '=', ';', ':', '@', '|', '<', '>', '?', '!', ',',];
export class AccountManager {
    async LogIn(name, password) {
        const users = await $.get("http://localhost:4000/accounts");
        users.map(existing_user => {
            if (existing_user.name === name && existing_user.name === name) {
                loggedAccount = existing_user;
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
            name: name,
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
//# sourceMappingURL=Accounts.js.map