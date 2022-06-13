import { loggedAccount } from "./Betting";
import { goto } from "$app/navigation";
const unallowedSigns = ['*', '/', '"', '-', '+', '#', '[', ']', '{', '}', '=', ';', ':', '@', '|', '<', '>', '?', '!', ',',];
export class AccountManager {
    async LogIn(email) {
        const users = await $.get("http://localhost:4000/accounts");
        console.log(users);
        users.map(existing_user => {
            if (existing_user.email == email) {
                alert("You are logged in!!!");
                localStorage.setItem('username', existing_user.name);
                localStorage.setItem('email', existing_user.email);
                localStorage.setItem('coins', existing_user.coins.toString());
                localStorage.setItem('id', existing_user.id.toString());
                return true;
            }
        });
        return false;
    }
    async SignUpUser(name, email) {
        if (await this.LogIn(name) == false && this.VerfiyName(name) == true) {
            await this.AddUser(name, email);
        }
        return false;
    }
    async GetLengthOfDB() {
        const users = await $.get("http://localhost:4000/accounts");
        return users.length;
    }
    async AddUser(name, email) {
        const length = await this.GetLengthOfDB();
        const user = {
            name: name,
            email: email,
            coins: 10000,
            bets: [],
            historyOfBets: [],
            id: length
        };
        $.ajax({
            url: "http://localhost:4000/accounts",
            data: JSON.stringify(user),
            type: 'POST',
            contentType: 'application/json',
            processData: false,
            success: _ => { console.log("success"); }
        });
        localStorage.setItem('username', user.name);
        localStorage.setItem('email', user.email);
        localStorage.setItem('coins', user.coins.toString());
        localStorage.setItem('id', user.id.toString());
        alert("You are logged in!");
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
export function SignOut() {
    localStorage.clear();
    goto('/');
    setTimeout(() => { window.location.reload(); }, 300);
}
//# sourceMappingURL=Accounts.js.map