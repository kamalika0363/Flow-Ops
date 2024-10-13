<script>
	import { Button } from '$lib/components/ui/button';
</script>

<section class="font-['Exo_2',_sans-serif] min-h-screen flex flex-col p-4 sm:p-8 md:p-16 gap-4 sm:gap-6 md:gap-8 justify-center items-center text-center relative overflow-hidden">
	<div
		class="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-purple-300 to-pink-200 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
	<div
		class="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-tl from-indigo-300 to-blue-200 rounded-full filter blur-3xl opacity-30 translate-x-1/4 translate-y-1/4 animate-pulse"></div>

	<h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#471553] via-[#832163] to-[#471553]">
		Work Flow Automation Builder
	</h1>
	<div class="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight w-full sm:w-10/12 md:w-9/12 lg:w-8/12 relative z-10 text-[#180042]">
		The <span class="underline decoration-[#c7b9f8] decoration-4 underline-offset-4">open source</span>,
		<span class="underline decoration-[#c7b9f8] decoration-4 underline-offset-4">fast</span>,
		<span class="underline decoration-[#c7b9f8] decoration-4 underline-offset-4">Workflow</span> Builder for Developers.
	</div>
	<h2 class="text-center tracking-widest font-medium text-sm sm:text-base md:text-lg relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#471553] via-[#832163] to-[#471553]">
		<p class="mb-2">
			Automate your business processes with a simple drag and drop interface.
		</p>
		<p class="relative">
			No code required. No limits.
		</p>
	</h2>
	<a href="/interface" class="mt-4">
		<Button class="bg-gradient-to-r from-[#471553] to-[#832163] via-[#471553] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300">
			Get Started
		</Button>
	</a>
</section>

<style>
    .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 0.2;
        }
        50% {
            opacity: 0.3;
        }
    }
</style>