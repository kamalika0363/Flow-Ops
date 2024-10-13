<script lang="ts">
	import { FileText, GithubIcon } from 'lucide-svelte';
</script>

<nav class="font-class py-4 md:p-3 text-[#180042] shadow shadow-[#c7b9f8] fixed top-0 left-0 right-0 z-10">
	<div class="flex items-center px-8 lg:px-16">
		<div class="flex items-center mr-auto">
			<a href="/" class="text-lg xl:text-2xl font-bold flex items-center">
				Flow Ops
			</a>
		</div>
		<div class="flex items-center space-x-4">
			<a href="https://flow-ops.vercel.app/docs/intro" class="flex items-center">
				<FileText class="mr-1" size={20} />
				Docs
			</a>
			<a href="/github" class="flex items-center">
				<GithubIcon class="mr-1" size={20} />
				GitHub
			</a>
		</div>
	</div>
</nav>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Spicy+Rice&display=swap');

    .font-class {
        font-family: "Exo 2", sans-serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
    }

    nav {
        /*height: 54px;*/
        background-color: #fefbf6;
    }
</style>
