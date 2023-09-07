<script>
	import logo from '$lib/logo.jpg';
	import { page } from '$app/stores';
	import aaron from '$lib/aaron.png';
	import katie from '$lib/katie.png';
	$: path = $page.url.pathname;

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div class="mt-[120px]" />

<h1 class="text-center font-bold text-8xl mb-10 text-white drop-shadow-lg">Officers</h1>

<div class="flex flex-wrap ml-auto m-8">
	<div class="easeAni relative mx-auto h-[400px] w-[400px]">
		<div
			class=" bg-purple-200 rounded-md w-[20rem] lg:w-[23rem] md:w-[22rem] h-[13rem] lg:h-[15rem] absolute top-24 left-9"
		>
			<p
				class="absolute left-[13rem] top-[0rem] lg:left-[14.5rem] lg:top-[2.5rem] text-[11.5px] p-1 lg:text-md text-center overflow-auto"
			>
				Hello! My name is Aaron and I am currently a Junior and in the Gold division of USACO.
				Outside of competitive programming, I enjoy playing the piano and the saxophone and curling
				up to read a good novel.
			</p>
		</div>
		<h1
			class="absolute left-[4rem] top-[15rem] lg:left-[5rem] lg:top-[16.5rem] text-2xl font-semibold text-center"
		>
			Aaron Cu <br /> Co-President
		</h1>
		<img
			src={aaron}
			alt="hi"
			class="absolute h-[15rem] lg:h-[17rem] rounded-full border-8 border-purple-200"
		/>
	</div>

	<div class="easeAni relative mx-auto h-[400px] w-[400px]">
		<div
			class=" bg-purple-200 rounded-md w-[20rem] lg:w-[23rem] md:w-[22rem] h-[13rem] lg:h-[15rem] absolute top-24 left-9"
		>
			<p
				class="absolute left-[13rem] top-[0rem] lg:left-[14.5rem] lg:top-[2.5rem] text-[11.5px] p-1 lg:text-md text-center overflow-auto"
			>
				hi, I’m Katie! I’m a senior and USACO Silver, and I’m also interested in cybersecurity and
				CTFs (Capture the Flag competitions). I enjoy reading (mostly fantasy and sci-fi) and arts
				and crafts.
			</p>
		</div>
		<h1
			class="absolute left-[4rem] top-[15rem] lg:left-[5rem] lg:top-[16.5rem] text-2xl font-semibold text-center"
		>
			Katie Min <br /> Co-President
		</h1>
		<img
			src={katie}
			alt="hi"
			class="absolute h-[15rem] lg:h-[17rem] rounded-full border-8 border-purple-200"
		/>
	</div>

	<div class="easeAni relative mx-auto h-[400px] w-[400px]">
		<div
			class=" bg-purple-200 rounded-md w-[20rem] lg:w-[23rem] md:w-[22rem] h-[13rem] lg:h-[15rem] absolute top-24 left-9"
		>
			<p
				class="absolute left-[13rem] top-[0rem] lg:left-[14.5rem] lg:top-[2.5rem] text-[11.5px] p-1 lg:text-md text-center overflow-auto"
			>
				Hello my name is richard Hello my name is richard Hello my name is richard Hello my name is
				richard Hello my name is richard Hello my name is richard Hello my name is richard Hello my
				name is richard
			</p>
		</div>
		<h1
			class="absolute left-[4rem] top-[15rem] lg:left-[5rem] lg:top-[16.5rem] text-2xl font-semibold text-center"
		>
			Richard Zhang <br /> Mentor
		</h1>
		<img
			src={logo}
			alt="hi"
			class="absolute h-[15rem] lg:h-[17rem] rounded-full border-8 border-purple-200"
		/>
	</div>

	<div class="easeAni relative mx-auto h-[400px] w-[400px]">
		<div
			class=" bg-purple-200 rounded-md w-[20rem] lg:w-[23rem] md:w-[22rem] h-[13rem] lg:h-[15rem] absolute top-24 left-9"
		>
			<p
				class="absolute left-[13rem] top-[0rem] lg:left-[14.5rem] lg:top-[2.5rem] text-[11.5px] p-1 lg:text-md text-center overflow-auto"
			>
				Hello my name is richard Hello my name is richard Hello my name is richard Hello my name is
				richard Hello my name is richard Hello my name is richard Hello my name is richard Hello my
				name is richard
			</p>
		</div>
		<h1
			class="absolute left-[4rem] top-[15rem] lg:left-[5rem] lg:top-[16.5rem] text-2xl font-semibold text-center"
		>
			Richard Zhang <br /> Mentor
		</h1>
		<img
			src={logo}
			alt="hi"
			class="absolute h-[15rem] lg:h-[17rem] rounded-full border-8 border-purple-200"
		/>
	</div>

	<div class="easeAni relative mx-auto h-[400px] w-[400px]">
		<div
			class=" bg-purple-200 rounded-md w-[20rem] lg:w-[23rem] md:w-[22rem] h-[13rem] lg:h-[15rem] absolute top-24 left-9"
		>
			<p
				class="absolute left-[13rem] top-[0rem] lg:left-[14.5rem] lg:top-[2.5rem] text-[11.5px] p-1 lg:text-md text-center overflow-auto"
			>
				Hello my name is richard Hello my name is richard Hello my name is richard Hello my name is
				richard Hello my name is richard Hello my name is richard Hello my name is richard Hello my
				name is richard
			</p>
		</div>
		<h1
			class="absolute left-[4rem] top-[15rem] lg:left-[5rem] lg:top-[16.5rem] text-2xl font-semibold text-center"
		>
			Richard Zhang <br /> Mentor
		</h1>
		<img
			src={logo}
			alt="hi"
			class="absolute h-[15rem] lg:h-[17rem] rounded-full border-8 border-purple-200"
		/>
	</div>

	<div class="easeAni relative mx-auto h-[400px] w-[400px]">
		<div
			class=" bg-purple-200 rounded-md w-[20rem] lg:w-[23rem] md:w-[22rem] h-[13rem] lg:h-[15rem] absolute top-24 left-9"
		>
			<p
				class="absolute left-[13rem] top-[0rem] lg:left-[14.5rem] lg:top-[2.5rem] text-[11.5px] p-1 lg:text-md text-center overflow-auto"
			>
				Hello my name is richard Hello my name is richard Hello my name is richard Hello my name is
				richard Hello my name is richard Hello my name is richard Hello my name is richard Hello my
				name is richard
			</p>
		</div>
		<h1
			class="absolute left-[4rem] top-[15rem] lg:left-[5rem] lg:top-[16.5rem] text-2xl font-semibold text-center"
		>
			Richard Zhang <br /> Mentor
		</h1>
		<img
			src={logo}
			alt="hi"
			class="absolute h-[15rem] lg:h-[17rem] rounded-full border-8 border-purple-200"
		/>
	</div>

	<div class="easeAni relative mx-auto h-[400px] w-[400px]">
		<div
			class=" bg-purple-200 rounded-md w-[20rem] lg:w-[23rem] md:w-[22rem] h-[13rem] lg:h-[15rem] absolute top-24 left-9"
		>
			<p
				class="absolute left-[13rem] top-[0rem] lg:left-[14.5rem] lg:top-[2.5rem] text-[11.5px] p-1 lg:text-md text-center overflow-auto"
			>
				Hello my name is richard Hello my name is richard Hello my name is richard Hello my name is
				richard Hello my name is richard Hello my name is richard Hello my name is richard Hello my
				name is richard
			</p>
		</div>
		<h1
			class="absolute left-[4rem] top-[15rem] lg:left-[5rem] lg:top-[16.5rem] text-2xl font-semibold text-center"
		>
			Richard Zhang <br /> Mentor
		</h1>
		<img
			src={logo}
			alt="hi"
			class="absolute h-[15rem] lg:h-[17rem] rounded-full border-8 border-purple-200"
		/>
	</div>

	<div class="easeAni relative mx-auto h-[400px] w-[400px]">
		<div
			class=" bg-purple-200 rounded-md w-[20rem] lg:w-[23rem] md:w-[22rem] h-[13rem] lg:h-[15rem] absolute top-24 left-9"
		>
			<p
				class="absolute left-[13rem] top-[0rem] lg:left-[14.5rem] lg:top-[2.5rem] text-[11.5px] p-1 lg:text-md text-center overflow-auto"
			>
				Hello my name is richard Hello my name is richard Hello my name is richard Hello my name is
				richard Hello my name is richard Hello my name is richard Hello my name is richard Hello my
				name is richard
			</p>
		</div>
		<h1
			class="absolute left-[4rem] top-[15rem] lg:left-[5rem] lg:top-[16.5rem] text-2xl font-semibold text-center"
		>
			Richard Zhang <br /> Mentor
		</h1>
		<img
			src={logo}
			alt="hi"
			class="absolute h-[15rem] lg:h-[17rem] rounded-full border-8 border-purple-200"
		/>
	</div>
</div>

<style lang="postcss">
	.active {
		--tw-bg-opacity: 1;
		color: rgb(216 180 254 / var(--tw-bg-opacity));
	}

	.active:hover {
		color: rgb(15 23 42 / var(--tw-text-opacity));
	}
	.a {
		z-index: 11;
	}

	.easeAni {
		cursor: pointer;
		-webkit-transition-property: all;
		-webkit-transition-duration: 0.3s;
		-webkit-transition-timing-function: ease;
	}

	.easeAni:hover {
		transform: scale(1.01);
	}

	.easeAni {
		cursor: pointer;
		-webkit-transition-property: all;
		-webkit-transition-duration: 0.3s;
		-webkit-transition-timing-function: ease;
	}

	.easeAni:hover {
		z-index: 100;
		transform: scale(1.1);
	}
</style>
