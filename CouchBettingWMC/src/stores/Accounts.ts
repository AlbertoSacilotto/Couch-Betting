import type {Bet} from "./Betting";
import {loggedAccount} from "./Betting";
import {goto} from "$app/navigation";
export interface User {
    id: number,
    name:string,
    email:string,
    coins: number,
    bets: Bet[],
    historyOfBets: Bet[]
}
const unallowedSigns= ['*', '/', '"', '-', '+', '#', '[', ']', '{', '}', '=', ';', ':', '@', '|', '<', '>', '?', '!', ',',];

export class AccountManager
{
    public async LogIn(email:string )
    {
        const users:User[] = <User[]> await $.get("http://localhost:4000/accounts");
        let allert = "You are not signed in yet!";
        console.log(users);
        users.map(existing_user=>{
                if(existing_user.email == email)
                {
                    allert = "You are logged in!";

                    localStorage.setItem('username', existing_user.name);
                    localStorage.setItem('email', existing_user.email);
                    localStorage.setItem('coins', existing_user.coins.toString());
                    localStorage.setItem('id', existing_user.id.toString());
                }
            }
        );
        alert(allert);
    }
    private async checkEmail(email) {
        const users:User[] = <User[]> await $.get("http://localhost:4000/accounts");
        let tr = true;
        users.map(existing_user=>{
                if(existing_user.email === email)
                {
                    console.log(email)
                    console.log(existing_user.email);
                    console.log("--------")
                    tr = false;
                }
            }
        );
        return tr;
    }

    public async SignUpUser(name:string, email:string)
    {
        if(await this.checkEmail(email) == true)
        {
            await this.AddUser(name, email)
        }
        else
        {
            alert("You are already signed in!");
        }

    }
    private async GetLengthOfDB()
    {
        const users = <User[]> await $.get("http://localhost:4000/accounts");
        return users.length + 1;
    }

    private async AddUser(name:string, email:string)
    {
        const length = await this.GetLengthOfDB();

        const user={
            name: name,
            email: email,
            coins: 10000,
            bets: [],
            historyOfBets: [],
            id: length
        }
        $.ajax({
            url: "http://localhost:4000/accounts",
            data: JSON.stringify(user),
            type: 'POST',
            contentType: 'application/json',
            processData: false,
            success: _ => {console.log("success")}
        });

        localStorage.setItem('username', user.name);
        localStorage.setItem('email', user.email);
        localStorage.setItem('coins', user.coins.toString());
        localStorage.setItem('id', user.id.toString());

        alert("You are logged in!");
    }

}

export function SignOut()
{
    localStorage.clear();
    goto('/');
    setTimeout(()=>{window.location.reload()},300);
}

