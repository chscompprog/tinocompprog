<script>
	import tcpc from '$lib/tcpc2.jpg';
	import big from '$lib/bigtcpc.jpg';
	/**
	 * @type {any}
	 */
	let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div style="position:relative;text-align:center;">
	{#if screenSize < 768}
		<img
			src={big}
			alt="tcpc"
			class="w-[99%] mx-[0.5%]"
			style="opacity:1;margin-top:100px;filter: blur(0.2vw); border-radius:5px;border-width:3px"
		/>
		<h1
			class=" drop-shadow-lg"
			style="position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:13vw;font-weight: bold;color:white;"
		>
			Tino Competitive Programming
		</h1>
	{:else}
		<img
			src={tcpc}
			alt="tcpc"
			class="w-[96%] mx-[2%]"
			style="opacity:1;margin-top:120px;filter: blur(0.2vw);border-radius:5px;border-width:3px"
		/>
		<h1
			class=" drop-shadow-lg"
			style="position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:8vw;font-weight: bold;color:white;"
		>
			Tino Competitive Programming
		</h1>
	{/if}
</div>
<h1 class=" text-[4vw] drop-shadow-lg text-center text-white font-semibold">
	Fridays at Lunch in Room 314
</h1>

<div class="infoBlock my-[50px] bg-purple-200 shadow-lg">
	<h1 class=" text-5xl font-bold m-5">About Us</h1>
	<p class="sm:px-10 m-5 text-lg font-semibold">
		Tino Competitive Programming is a club centered around hands-on problem solving. Throughout the
		year, club members will learn various algorithms and practice implementing them by solving real
		competitive programming problems. With the help of our qualified mentors, club members will
		prepare for coding contests such as USACO (USA Computing Olympiad) and other prestigious online
		competitions. Join us and boost your critical thinking and coding skills!
	</p>
</div>

<div class="infoBlock my-[50px] bg-purple-200 shadow-lg">
	<h1 class=" text-5xl font-bold m-5">Why Join</h1>
	<p class="sm:px-10 m-5 text-lg font-semibold">
		Joining Tino Competitive Programming is a great oppurtunity that brings many benefits. Our club
		helps prepare students for school courses such as Intro to Java and APCS, as well as learning
		beyond the school's scope. Competitive Programming is a great was to boost college applications
		and gain skills for coding interviews. You will be able to greatly improve your programming
		speed, knowledge of useful algorithms and data structures, logical thinking and problem solving.
		It will teach you a lot about programming in general and will put you on a path towards success
		in your future CS or STEM endeavors.
	</p>
</div>

<style lang="postcss">
	.infoBlock {
		width: 80%;
		margin-left: 10%;
		margin-right: 10%;
		height: auto;
		opacity: 1;
		border-radius: 20px;
		padding: 10px;
		text-align: center;
		cursor: pointer;
		-webkit-transition-property: all;
		-webkit-transition-duration: 0.3s;
		-webkit-transition-timing-function: ease;
	}

	.infoBlock:hover {
		transform: scale(1.1);
	}
</style>
