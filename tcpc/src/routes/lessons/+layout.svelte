<script>
    import { page } from '$app/stores';
    $: path = $page.url.pathname;
</script>

<div style = "margin-top: 120px; content-align: center"></div>

<h1 class = "text-center font-bold text-8xl text-white drop-shadow-lg">Lessons</h1>

<p class = "m-5 sm:mr-20 sm:ml-20 text-center font-semibold text-white text-lg sm:text-2xl drop-shadow-md"> 
    The majority of meetings throughout the school year will be centered around 
    learning about important aspects of competitive programming, from data structures to algorithms.
    In order to make sure everyone who joins our club will gain something, the club's lessons 
    are divided into 3 sections: Beginner, Intermediate, and Advanced. 
    Click into each division to see what they cover and whether you belong in it!
</p>

    <ul class = "flex p-2 list-none items-center rounded-xl a">
        <div class = "wrapper flex list-none">

        <a href="/lessons/beginner">
        <li class= "drop-shadow-md m-1 font-bold px-2 py-2 text-slate-100 rounded-lg  hover:bg-purple-300 hover:text-slate-900 text-lg sm:text-2xl ease-in-out duration-300" class:active={path=='/lessons/beginner'}>
            Beginner 
        </li>
        </a>
        
        <a href="/lessons/intermediate">
        <li class="drop-shadow-md m-1 font-bold px-2 py-2 text-slate-100 rounded-lg  hover:bg-purple-300 hover:text-slate-900 text-lg sm:text-2xl ease-in-out duration-300" class:active={path=='/lessons/intermediate'}>
            Intermediate 
        </li>
        </a>
    
        <a href="/lessons/advanced"> 
        <li class="drop-shadow-md m-1 font-bold px-2 py-2 text-slate-100 rounded-lg  hover:bg-purple-300 hover:text-slate-900 text-lg sm:text-2xl ease-in-out duration-300" class:active={path=='/lessons/advanced'}>
            Advanced 
        </li>
        </a>
        </div>

    </ul>






<style lang="postcss">
    .active{
        --tw-bg-opacity: 1;
        background-color: rgb(216 180 254 / var(--tw-bg-opacity));
        color: rgb(15 23 42 / var(--tw-text-opacity));
    }

    .wrapper{
        width: auto;
        margin: auto;
    }
    
    .lesson{
        frameborder:0;
        width:50%;
        margin: 20px;
        margin-left: 25%;
        margin-right: 25%;
        height:30vw;
    }

    .a{
        z-index: 11;
        margin: 1%;
    }
</style>

<slot/>
