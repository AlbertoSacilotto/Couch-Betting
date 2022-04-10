<script>

</script>
<h1>Place Bet</h1>
<input type="text" placeholder="type of bet" bind:value="{betType}">
<input type="text" placeholder="amount of Coins to Bet" bind:value="{sizeOfBet}">
<button class="btn btn-primary" on:click="{Bets.PlaceBet()}"></button>