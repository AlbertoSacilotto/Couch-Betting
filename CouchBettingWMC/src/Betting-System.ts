enum TypeOfBet{
    Tie,
    WHome,
    WGuest,
}

interface BetsObj
{
    id:string,
    coins: number,
    outcome: number,
    betType: TypeOfBet,
} 

import { Accounts } from "src/Accounts";
import { Games } from "src/LiveGames";
import { identity } from "svelte/internal";

export class Bet{
	public PlaceBet(sizeOfBet: number, idOfBet:string, typeOfBet: number) :boolean
    {
        let newBet: BetsObj;
        let gameToBet = Games.filter(game => game.id.includes(idOfBet));

        if((sizeOfBet < 100 || sizeOfBet > Accounts[0].coins))
        {
            return false;
        }
        else{
            newBet.id = gameToBet[0].id;
            newBet.betType = typeOfBet;
            newBet.outcome = this.CalculateWin(newBet.betType,sizeOfBet,gameToBet)
            newBet.coins = sizeOfBet;

            Accounts[0].bets.push(newBet);
            Accounts[0].coins = Accounts[0].coins-sizeOfBet;
        }
    }
    //Remove Bets
    
    public WinBet(gameBetOn: any):void{
        Accounts[0].coins += gameBetOn.outcome; 
    }

    private CalculateWin(type: TypeOfBet,sizeOfBet: number,gameBetOn: any):number{
        if(TypeOfBet.Tie === type)
        {
            return ((gameBetOn[0].homeOut +gameBetOn[0].guestOut)/2)*sizeOfBet;
        }
        else if(TypeOfBet.WHome ===type)
        {
            return gameBetOn[0].homeOut * sizeOfBet;
        }

        return gameBetOn[0].guestOut * sizeOfBet;
    }
}