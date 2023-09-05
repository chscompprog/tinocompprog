<script>
	import '../app.css';
	import logo from '$lib/logo.jpg';
	import { page } from '$app/stores';
	$: path = $page.url.pathname;

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	function setFalse() {
		showMenu = false;
	}
</script>

<div>
	<div>
		<ul
			class="fixed top-0 flex p-2 list-none bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl a w-[96%] m-[2%] sm:m-[1%] sm:w-[98%]"
		>
			<a href="/">
				<img src={logo} alt="logo" class=" w-10 h-10 rounded-full m-2" />
			</a>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="true"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>

			<li on:click={toggleNavbar} class="mt-4 sm:hidden">
				<button
					type="button"
					class=" text-white hover: text-white focus:outline-none focus:text-white"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="3"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</li>

			<div class="flex items-center">
				<!-- Mobile menu button -->
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div
				class="flex-col mt-10 space-y-4 sm:flex sm:space-y-0 sm:flex-row sm:items-center sm:mt-0 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				<a href="/">
					<li
						on:click={setFalse}
						class=" m-0.5 font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300"
						class:active={path == '/'}
					>
						Home
					</li>
				</a>

				<a href="/lessons/intermediate">
					<li
						on:click={setFalse}
						class="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300"
						class:active={path == '/lessons/intermediate' ||
							path == '/lessons/beginner' ||
							path == '/lessons/advanced'}
					>
						Lessons
					</li>
				</a>

				<a href="/events">
					<li
						on:click={setFalse}
						class="m-0.5 font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300"
						class:active={path == '/events'}
					>
						Events
					</li>
				</a>

				<a href="/team">
					<li
						on:click={setFalse}
						class="m-0.5 font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300"
						class:active={path == '/team'}
					>
						Team
					</li>
				</a>

				<a href="/resources">
					<li
						on:click={setFalse}
						class="m-0.5 font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300"
						class:active={path == '/resources'}
					>
						Resources
					</li>
				</a>
			</div>
		</ul>
	</div>
</div>

<!-- <ul class = "fixed top-0 flex p-2 list-none bg-gradient-to-r from-blue-500 to-purple-500 items-center rounded-xl a">
        <img src={logo} alt="logo" class=" w-10 h-10 rounded-full m-2"/>

        <a href="/">
        <li class= "m-0.5 font-bold px-3 py-2 text-slate-100 rounded-lg  hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300" class:active={path=='/'}>
             Home 
        </li>
        </a>
        
        <a href="/lessons/intermediate">
        <li class="m-0.5 font-bold px-3 py-2 text-slate-100 rounded-lg  hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300" class:active={path=='/lessons/intermediate' || path=='/lessons/beginner' ||path=='/lessons/advanced'}>
             Lessons 
        </li>
        </a>

        <a href="/events"> 
        <li class="m-0.5 font-bold px-3 py-2 text-slate-100 rounded-lg  hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300" class:active={path=='/events'}>
            Events 
        </li>
        </a>

        <a href="/team">
        <li class="m-0.5 font-bold px-3 py-2 text-slate-100 rounded-lg  hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300" class:active={path=='/team'}>
             Team
        </li>
        </a>

        <a href="/resources">
        <li class="m-0.5 font-bold px-3 py-2 text-slate-100 rounded-lg  hover:bg-purple-300 hover:text-slate-900 text-2xl ease-in-out duration-300" class:active={path=='/resources'}>
             Resources
        </li>
        </a>

    </ul> -->

<slot />

<div class="text-center bg-purple-200 p-2">
	<h1 class=" text-4xl sm:text-5xl font-bold m-3 drop-shadow-lg">Contact</h1>
	<a href="https://discord.gg/NrZanv24nN" target="_blank">
		<p class=" easeAni text-md sm:text-2xl inline-block font-semibold m-3 hover:text-blue-500">
			Discord: https://discord.gg/NrZanv24nN
		</p>
	</a>
	<br />
	<a href="https://instagram.com/chscompetitiveprogramming" target="_blank">
		<p class="easeAni text-md sm:text-2xl inline-block font-semibold m-3 hover:text-blue-500">
			Instagram: instagram.com/chscompetitiveprogramming
		</p>
	</a>
	<br />
	<a href="https://mailto:chscompprogramming@gmail.com">
		<p class="easeAni inline-block text-md hover:text-blue-500 sm:text-2xl font-semibold m-3">
			Email: chscompprogramming@gmail.com
		</p>
	</a>
</div>

<style>
	.active {
		--tw-bg-opacity: 1;
		color: rgb(216 180 254 / var(--tw-bg-opacity));
	}

	.active:hover {
		color: rgb(15 23 42 / var(--tw-text-opacity));
	}
	.a {
		z-index: 11;
		width: 98%;
		margin: 1%;
	}

	.easeAni {
		cursor: pointer;
		-webkit-transition-property: all;
		-webkit-transition-duration: 0.3s;
		-webkit-transition-timing-function: ease;
	}

	.easeAni:hover {
		transform: scale(1.1);
	}
</style>
