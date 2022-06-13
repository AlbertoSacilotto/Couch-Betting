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
    public async LogIn(email:string ): Promise<boolean>
    {
        const users:User[] = <User[]> await $.get("http://localhost:4000/accounts");
        console.log(users);
        users.map(existing_user=>{
                if(existing_user.email == email)
                {
                    alert("You are logged in!!!");

                    localStorage.setItem('username', existing_user.name);
                    localStorage.setItem('email', existing_user.email);
                    localStorage.setItem('coins', existing_user.coins.toString());
                    localStorage.setItem('id', existing_user.id.toString());

                    return true;
                }
            }
        );
        return false;
    }
    public async SignUpUser(name:string, email:string): Promise<boolean>
    {
        if(await this.LogIn(name) == false &&  this.VerfiyName(name)== true)
        {
            await this.AddUser(name, email)
        }

        return false;
    }
    private async GetLengthOfDB()
    {
        const users = <User[]> await $.get("http://localhost:4000/accounts");
        return users.length;
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

    private VerfiyName(name:string):boolean
    {
        if(name == "" || name == undefined || name == null || name.length > 16)
        {
            return false;
        }
        else
        {
            for(const n of name)
            {
                for(const sign of unallowedSigns)
                {
                    if(n == sign)
                    {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}

export function SignOut()
{
    localStorage.clear();
    goto('/');
    setTimeout(()=>{window.location.reload()},300);
}

