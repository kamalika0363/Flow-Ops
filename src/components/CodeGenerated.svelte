<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	const yamlSnippet = [
		'name: Deploy to Azure Storage and VM',
		'on:',
		'  push:',
		'    branches: [ main ]',
		'jobs:',
		'  build-and-deploy:',
		'    runs-on: ubuntu-latest',
		'    steps:',
		'    - uses: actions/checkout@v3',
		'    - name: Set up Python',
		'      uses: actions/setup-python@v4',
		'      with:',
		'        python-version: \'3.10\'',
		'    - name: Install Azure CLI',
		'      run: |',
		'        sudo apt-get update',
		'        ...',
		'    - name: Deploy to VM',
		'      run: |',
		'        ssh -i vm_key.pem ...'
	];

</script>

<section class="absolute items-center justify-center rounded-sm flex flex-col left-0 top-16 p-6 z-10 bg-[#fefbf6] border-b border-r border-[#c7b9f8] overflow-y-auto shadow-lg">
	<h4 class="mb-4 text-sm font-medium leading-none text-[#180042]">YAML Generated</h4>
	<ScrollArea class="h-auto w-64 rounded-sm border-t border-l border-[#c7b9f8]">
		<div class="p-4">
			{#each yamlSnippet as line}
				<div class="text-sm">
					{line}
				</div>
			{/each}
		</div>
	</ScrollArea>
</section>