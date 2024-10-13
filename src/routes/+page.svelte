<script>
	import { Button } from '$lib/components/ui/button';
</script>

<section class="font-class h-screen flex flex-col my-4 p-16 gap-8 justify-center items-center relative overflow-hidden">
	<div
		class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-200 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
	<div
		class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-300 to-blue-200 rounded-full filter blur-3xl opacity-30 translate-x-1/4 translate-y-1/4"></div>

	<h1 class="text-4xl font-semibold relative z-10">
		Work Flow Automation Builder
	</h1>
	<div class="main-para text-center text-6xl font-bold leading-tight tracking-tight w-7/12 relative z-10">
		The <span class="underline decoration-[#c7b9f8] decoration-4 underline-offset-4">open source</span>,
		<span class="underline decoration-[#c7b9f8] decoration-4 underline-offset-4">fast</span>,
		<span class="underline decoration-[#c7b9f8] decoration-4 underline-offset-4">Workflow</span> Builder for Developers.
	</div>
	<h1 class="text-center tracking-widest font-medium text-lg relative z-10">
		<p class="mb-2">
			Automate your business processes with a simple drag and drop interface.
		</p>
		<p class="relative">
			No code required. No limits.
		</p>
	</h1>
	<a href="/interface">
		<Button class="bg-gradient-to-r from-[#471553] to-[#832163] via-[#471553] p-6">
			Get Started
		</Button>
	</a>
</section>

<style>
    h1 {
        background: linear-gradient(135deg, #471553, #832163, #471553);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    .main-para {
        color: #180042;
        max-width: 90%;
        margin: 0 auto;
        word-spacing: -4px;
    }

    .underline {
        text-underline-offset: 8px;
        text-decoration-thickness: 6px;
    }

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Spicy+Rice&display=swap');

    .font-class {
        font-family: "Exo 2", sans-serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
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