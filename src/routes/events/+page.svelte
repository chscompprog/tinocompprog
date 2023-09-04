<script>
    import turtle from "$lib/turtlescode.png"
    import first from "$lib/gold.png"
    import second from "$lib/silver.png"
    import third from "$lib/bronze.png"
</script>

<div style="margin-top: 120px"/>

<img src={turtle} class = "easeAni w-[90%] mx-[5%] sm:w-[80%] sm:mx-[10%] md:w-[70%] md:mx-[15%] lg:w-[50%] lg:mx-[25%] xl:w-[30%] xl:mx-[35%]"/>
<h1 class = "text-center text-6xl sm:text-8xl font-bold m-10 text-white drop-shadow-lg">
    TurtleCodes
</h1>

<p class = "text-center text-4xl font-semibold m-3 text-white drop-shadow-lg"> 9/2 10 AM - 12 PM</p>

<div class="infoBlock  bg-purple-200 shadow-lg">
    <h1 class=" text-5xl font-bold m-5">
      What is TurtleCodes
    </h1>

    <p class = "sm:px-10 m-5 text-lg font-semibold">
      TurtleCodes is a competitive programming competition hosted by Tino Competitive Programming where contestants solve a series of challenging problems,
      relying on there skills and knowledge of programming. The competition will be split into 2 divisions, Beginner and Advanced.
    </p>
</div>

<div class = "infoBlock">
    <h1 class=" text-4xl font-bold m-5">
        Where and when?
      </h1>
  
      <p class = "sm:px-10 m-5 text-xl font-semibold">
        TurtleCodes will be held on Codeforces on Saturday, September 2, from 10 AM to 12 PM.    
    </p>
</div>

<div class = "outer">
    <h1 class = "text-center text-white drop-shadow-lg text-7xl font-bold mt-3"> 
        Prizes
    </h1> 
    <div class = "easeAni sm:ml-[12%] mt-12 rounded-md bg-purple-200 shadow-lg sm:float-left text-center w-auto mx-8 p-4 sm:w-[35%]">
        <h1 class = "text-5xl m-5 font-bold">Beginner</h1>
        <div class = "inner-div">
            <div class = "flex list-none text-center text-3xl items-center align-middle font-semibold">
                <img src = {first} class = "w-10 m-3"/>
                <h1> First: $40 </h1>
            </div>
        </div>
        <br>
        <div class = "inner-div">
            <div class = "flex list-none text-center text-3xl items-center align-middle font-semibold">
                <img src = {second} class = "w-10 m-3"/>
                <h1> Second: $30 </h1>
            </div>
        </div>
        <br>
        <div class = "inner-div">

        <div class = "flex list-none text-center text-3xl items-center align-middle font-semibold">
            <img src = {third} class = "w-10 m-3"/>
            <h1> Third: $20 </h1>
        </div>

        </div>

        
    </div>
    <div class = "easeAni sm:mr-[12%] mt-12 rounded-md bg-purple-200 shadow-lg sm:float-right text-center w-auto mx-8 p-4 sm:w-[35%]">
        <h1 class = "text-5xl m-5 font-bold">Advanced</h1>
        <div class = "inner-div">
            <div class = "flex list-none text-center text-3xl items-center align-middle font-semibold">
                <img src = {first} class = "w-10 m-3"/>
                <h1> First: $150 </h1>

            </div>
        </div>
        <br>
        <div class = "inner-div">
            <div class = "flex list-none text-center text-3xl items-center align-middle font-semibold">
                <img src = {second} class = "w-10 m-3"/>
                <h1> Second: $100 </h1>
            </div>
        </div>
        <br>
        <div class = "inner-div">

        <div class = "flex list-none text-center text-3xl items-center align-middle font-semibold">
            <img src = {third} class = "w-10 m-3"/>
            <h1> Third: $50 </h1>
        </div>

        </div>
        
    </div>
</div>

<div class = "easeAni mr-[10%] ml-[10%] w-[80%] rounded-md bg-purple-200 shadow-lg text-center m-10 font-semibold text-xl p-3">
    <h1 class = "m-2"> All participants: free access to Interview Cake's coding interview prep course + 1 year upgrades to Taskade's Starter plan </h1>
    <h1 class = "m-2"> Raffle for a $45 gift code for the Desmos store </h1>
</div>

<h1 class = "text-center text-white text-6xl font-bold mb-7 mt-3 drop-shadow-lg"> 
    Sponsers
</h1>
<a class=" text-center align-middle " href="https://www.correlation-one.com/" target="_blank">

<div class = "easeAni m-10 mx-auto w-[80%] sm:w-[50%] sm:mx[25%] p-3 rounded-md bg-purple-200 shadow-lg text-center  items-center">
        <img src="https://media.discordapp.net/attachments/930578418859397123/1118402967947722864/c1logo_color.png?width=1923&amp;height=170" alt="correlation-one" class = "w-[100%] p-5"/>
</div>
</a>


<style>
    .outer::after{
    content: "";
    display: table;
    clear: both;
}

    .inner-div {
        display: inline-block;
        margin: 0 auto;
        padding: 3px;
    }

    .easeAni{
        cursor: pointer;
        -webkit-transition-property: all; 
        -webkit-transition-duration: 0.3s; 
        -webkit-transition-timing-function: ease; 
    }

    .easeAni:hover{
        transform: scale(1.08);
    }

    .infoBlock{
        --tw-bg-opacity: 1;
        background-color: rgb(233 213 255 / var(--tw-bg-opacity));
        --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        width:80%;
        margin-left:10%;
        margin-right:10%;
        height:auto;
        opacity:1;
        margin-top:50px;
        border-radius: 20px;
        padding: 10px;
        text-align:center;
        cursor: pointer;
        -webkit-transition-property: all; 
        -webkit-transition-duration: 0.3s; 
        -webkit-transition-timing-function: ease; 
    }

    .infoBlock:hover{
        transform: scale(1.1);
    }
</style>