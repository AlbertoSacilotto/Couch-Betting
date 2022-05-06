<script>
    import {onMount} from "svelte";
    import {GetNews} from "../stores/news.js";
    let news;
    onMount(
        async function (){
            news = GetNews();
        })
</script>