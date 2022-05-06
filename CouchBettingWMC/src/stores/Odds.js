export async function GetOddsForGame() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'football-betting-odds1.p.rapidapi.com',
            'X-RapidAPI-Key': '00035a63a3msh1a62ff152aaab6dp177507jsn53bacee8f9db'
        }
    };
    fetch('https://football-betting-odds1.p.rapidapi.com/provider1/live/upcoming', options)
        .then(response => response.json())
        .then(data => {
        console.log(data);
    })
        .catch(err => console.error(err));
}
//# sourceMappingURL=Odds.js.map