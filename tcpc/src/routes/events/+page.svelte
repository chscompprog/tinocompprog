<script>
	import turtle from '$lib/turtlescode.png';
	import first from '$lib/gold.png';
	import second from '$lib/silver.png';
	import third from '$lib/bronze.png';
</script>

<svelte:head><title>CHS Comp Prog | Events</title></svelte:head>

<div style="margin-top: 120px" />

<img
	src={turtle}
	class="easeAni w-[90%] mx-[5%] sm:w-[80%] sm:mx-[10%] md:w-[70%] md:mx-[15%] lg:w-[50%] lg:mx-[25%] xl:w-[30%] xl:mx-[35%]"
/>
<h1 class="text-center text-6xl sm:text-8xl font-bold m-10 text-white drop-shadow-lg">
	Cupertino Informatics Tournament
</h1>

<p class="text-center text-4xl font-semibold m-3 text-white drop-shadow-lg">
	Date: 5/25<br />Time: TBD
</p>

<div class="infoBlock">
	<h1 class=" text-5xl font-semibold m-5">Registration</h1>
	<a
		href="https://docs.google.com/forms/d/e/1FAIpQLScS6S-dDwMuzdUsCH9OE7-LIcuD5DYt7OfLHTqai6tQ-gYAqw/viewform"
		target="_blank"
	>
		<h1 class=" text-5xl font-semibold m-5 hover:text-blue-500 easeAni">Link</h1>
	</a>
</div>

<div class="infoBlock bg-purple-200 shadow-lg">
	<h1 class=" text-5xl font-bold m-5">What is the Cupertino Informatics Tournament</h1>

	<p class="sm:px-10 m-5 text-lg font-semibold">
		Cupertino Informatics Tournament is a competitive programming competition hosted by Tino
		Competitive Programming where contestants solve a series of challenging coding problems, relying
		on their skills and knowledge of programming. The competition will be individual.
	</p>
</div>

<div class="infoBlock">
	<h1 class=" text-4xl font-bold m-5">Where and when?</h1>

	<p class="sm:px-10 m-5 text-xl font-semibold">
		Cupertino Informatics Tournament will be held on Codeforces, on 5/25/2024. The specific time is
		still to be determined.
	</p>
</div>

<div class="outer">
	<h1 class="text-center text-white drop-shadow-lg text-7xl font-bold mt-6">Prizes</h1>
	<!-- <div
		class="easeAni lg:ml-[12%] mt-12 rounded-md bg-purple-200 shadow-lg lg:float-left text-center w-auto mx-6 p-4 lg:w-[35%]"
	>
		<h1 class="text-5xl m-5 font-bold">Beginner</h1>

		<h1 class="text-2xl m-5 font-bold">No Competitive Programming Experience</h1>
		<div class="inner-div">
			<div class="flex list-none text-center text-3xl items-center align-middle font-semibold">
				<img src={first} class="w-10 m-3" />
				<h1>First: $15</h1>
			</div>
		</div>
		<br />
		<div class="inner-div">
			<div class="flex list-none text-center text-3xl items-center align-middle font-semibold">
				<img src={second} class="w-10 m-3" />
				<h1>Second: $10</h1>
			</div>
		</div>
		<br />
		<div class="inner-div">
			<div class="flex list-none text-center text-3xl items-center align-middle font-semibold">
				<img src={third} class="w-10 m-3" />
				<h1>Third: $5</h1>
			</div>
		</div>
	</div>
	<div
		class="easeAni lg:mr-[12%] mt-12 rounded-md bg-purple-200 shadow-lg lg:float-right text-center w-auto mx-6 p-4 lg:w-[35%]"
	>
		<h1 class="text-5xl m-5 font-bold">Advanced</h1>
		<h1 class="text-2xl m-5 font-bold">Have Competitive Programming Experience</h1>

		<div class="inner-div">
			<div class="flex list-none text-center text-3xl items-center align-middle font-semibold">
				<img src={first} class="w-10 m-3" />
				<h1>First: $20</h1>
			</div>
		</div>
		<br />
		<div class="inner-div">
			<div class="flex list-none text-center text-3xl items-center align-middle font-semibold">
				<img src={second} class="w-10 m-3" />
				<h1>Second: $15</h1>
			</div>
		</div>
		<br />
		<div class="inner-div">
			<div class="flex list-none text-center text-3xl items-center align-middle font-semibold">
				<img src={third} class="w-10 m-3" />
				<h1>Third: $10</h1>
			</div>
		</div>
	</div> -->

	<div class="infoBlock bg-purple-200 shadow-lg">
		<div class="inner-div">
			<div class="flex list-none text-center text-3xl items-center align-middle font-semibold">
				<img src={first} class="w-10 m-3" />
				<h1>First: TBD</h1>
			</div>
		</div>
		<br />
		<div class="inner-div">
			<div class="flex list-none text-center text-3xl items-center align-middle font-semibold">
				<img src={second} class="w-10 m-3" />
				<h1>Second: TBD</h1>
			</div>
		</div>
		<br />
		<div class="inner-div">
			<div class="flex list-none text-center text-3xl items-center align-middle font-semibold">
				<img src={third} class="w-10 m-3" />
				<h1>Third: TBD</h1>
			</div>
		</div>
	</div>
</div>

<div
	class="easeAni mr-[10%] ml-[10%] w-[80%] rounded-md bg-purple-200 shadow-lg text-center m-10 font-semibold text-xl p-3"
>
	<h1 class="m-4 text-3xl">All participants: TBD</h1>
</div>

<h1 class="text-center text-white text-6xl font-bold mb-7 mt-3 drop-shadow-lg">Sponsors</h1>
<a class=" text-center align-middle" href="https://balsamiq.com/" target="_blank">
	<div
		class="easeAni m-10 mx-auto w-[80%] sm:w-[30%] sm:mx[25%] p-3 rounded-md bg-purple-200 shadow-lg text-center items-center"
	>
		<img
			src="https://cdn.uc.assets.prezly.com/72029d99-e7e9-4896-b41c-633bd8527b97/logo-balsamiq.png"
			alt="Balsamiq"
			class="w-[100%] p-5"
		/>
	</div>
</a>

<a class=" text-center align-middle" href="https://gen.xyz/" target="_blank">
	<div
		class="easeAni m-10 mx-auto w-[80%] sm:w-[30%] sm:mx[25%] p-3 rounded-md bg-purple-200 shadow-lg text-center items-center"
	>
		<img
			src="https://gen.xyz/wp-content/themes/xyz/images/xyz-white-logo.svg"
			alt="Balsamiq"
			class="w-[100%] p-5"
		/>
	</div>
</a>

<a class=" text-center align-middle" href="https://www.desmos.com/" target="_blank">
	<div
		class="easeAni m-10 mx-auto w-[80%] sm:w-[30%] sm:mx[25%] p-3 rounded-md bg-purple-200 shadow-lg text-center items-center"
	>
		<img
			src="https://media.licdn.com/dms/image/D5612AQEQZTpOd8OlNQ/article-cover_image-shrink_600_2000/0/1676581819022?e=2147483647&v=beta&t=RkYkMz8xCYsVoEQApDv2U0twp3QQkI34RVic0P7_Ejc"
			alt="Balsamiq"
			class="w-[100%] p-5"
		/>
	</div>
</a>

<a class=" text-center align-middle" href="https://wolfram.com/" target="_blank">
	<div
		class="easeAni m-10 mx-auto w-[80%] sm:w-[30%] sm:mx[25%] p-3 rounded-md bg-purple-200 shadow-lg text-center items-center"
	>
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WolframCorporateLogo.svg/1280px-WolframCorporateLogo.svg.png"
			alt="Balsamiq"
			class="w-[100%] p-5"
		/>
	</div>
</a>

<style lang="postcss">
	.outer::after {
		content: '';
		display: table;
		clear: both;
	}

	.inner-div {
		display: inline-block;
		margin: 0 auto;
		padding: 3px;
	}

	.easeAni {
		cursor: pointer;
		-webkit-transition-property: all;
		-webkit-transition-duration: 0.3s;
		-webkit-transition-timing-function: ease;
	}

	.easeAni:hover {
		transform: scale(1.08);
	}

	.infoBlock {
		--tw-bg-opacity: 1;
		background-color: rgb(233 213 255 / var(--tw-bg-opacity));
		--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
			0 4px 6px -4px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
		width: 80%;
		margin-left: 10%;
		margin-right: 10%;
		height: auto;
		opacity: 1;
		margin-top: 50px;
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
