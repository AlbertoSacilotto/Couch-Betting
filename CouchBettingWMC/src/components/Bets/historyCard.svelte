<script lang="ts">
    import type {Bet} from "../../stores/Betting";
    import jQuery from "jquery";
    import {finishedGames} from "../../stores/Finished-Games";
    export let bet:Bet

</script>
<div class="d-flex justify-content-center m-3" id="up">
    <div class="px-4 card" style="width: 20em; height:17.5em" id="CardDesign">
        <div class="card-body">
            <div class="d-flex justify-content-around">
                <div>
                    <h6><img src="{bet.homeIMG}" class="card-img-top TeamPics" alt="{bet.home} Image"></h6>
                </div>

                <div>
                    <h6><img src="{bet.guestIMG}" class="card-img-top TeamPics" alt="{bet.guest} Image"></h6>
                </div>
            </div>
            <div>
                <h6 class="card-title cen">-</h6>
            </div>
            <div class="d-flex justify-content-around">
                <div>
                    <h6 class="card-title">{bet.home}</h6>
                </div>
                <div class="justify-content-center">
                    <h6 class="card-title"> </h6>
                </div>
                <div>
                    <h6 class="card-title">{bet.guest}</h6>
                </div>
            </div>
            <div class="cen justify-content-around mt-3">
                <h6>{bet.homeGoals}&nbsp&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp&nbsp{bet.guestGoals}</h6>
            </div>
            {#if bet.state == 1}
                <div>
                    <h5 id="green">+{bet.win.toFixed()} <img className="pb-1" src="../../../static/KiraCoinPNG.png" width="20"></h5>
                </div>
            {:else}
                <div>
                    <h5 id="red">-{bet.cost} <img className="pb-1" src="../../../static/KiraCoinPNG.png" width="20"></h5>
                </div>
            {/if}
            <h6>Your Bet:</h6>
            <h6>{bet.text}</h6>
        </div>
    </div>
</div>
<style>
    #red{
        color: #c46060;
    }
    #green{
        color: #5d9b48;
    }
    h6,p{
        color: #ffffff;
    }
    .TeamPics{
        height: 2.5em;
        width: 2.5em;
    }
    #CardDesign{
        background-color: #2a2a2a;
    }
    .cen{
        text-align: center;
    }
</style>