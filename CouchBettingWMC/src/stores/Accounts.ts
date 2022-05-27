import type {Bet} from "./Betting";

export interface User {
    id: number,
    name:string,
    password:string,
    coins: number,
    bets: Bet[],
}
const unallowedSigns= ['*', '/', '"', '-', '+', '#', '[', ']', '{', '}', '=', ';', ':', '@', '|', '<', '>', '?', '!', ',',];

export class AccountManager
{
    public async LogIn(name:string, password:string): Promise<boolean>
    {
        const users:User[] = <User[]> await $.get("http://localhost:4000/accounts");
        users.map(existing_user=>{
                if(existing_user.name === name && existing_user.name === name)
                {
                    loggedAccount = existing_user;
                    return true;
                }
            }
        );
        return false;
    }
    public async SignUpUser(name:string, password:string): Promise<boolean>
    {
        if(await this.LogIn(name,password) == false &&  this.VerfiyName(name)== true)
        {
            this.AddUser(name,password)
        }
        loggedAccount = null;
        return false;
    }
    private AddUser(name:string, password:string)
    {
        const user={
            name: name,
            password: password,
            coins: 10000,
            bets: [],
        }
        $.ajax({
            url: "http://localhost:4000/accounts",
            data: JSON.stringify(user),
            type: 'POST',
            contentType: 'application/json',
            processData: false,
            success: _ => {console.log("success")}
        });
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
declare global{
    let loggedAccount:User;
}