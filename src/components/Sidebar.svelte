<script lang="ts">
	import DraggableNode from './DraggableNode.svelte';
	import { type, draggedLabel } from '../stores/flowStore';
	import { Button } from '$lib/components/ui/button';

	const nodes = [
		{ type: 'input', label: 'Input Node' },
		{ type: 'default', label: 'Default Node' },
		{ type: 'output', label: 'Output Node' },
		{ type: 'default', label: 'ENV' },
		{ type: 'default', label: 'Run' },
		{ type: 'default', label: 'Branch' },
	];

	const onDragStart = (event: CustomEvent) => {
		const { nodeType, label } = event.detail;
		type.set(nodeType);
		draggedLabel.set(label);
	};
</script>

<aside class="absolute items-center right-0 top-16 h-3/4 rounded-sm w-64 2xl:w-96 border-b border-l border-[#c7b9f8] border-t-[#c7b9f8] bg-[#fefbf6] overflow-y-auto shadow-lg border-gray-200 text-sm flex flex-col p-4">
	<div class="my-4 text-lg font-semibold text-[#180042]">Drag and Drop the Components</div>
	<div class="grid grid-cols-2 gap-4 items-center">
		{#each nodes as node}
			<DraggableNode
				nodeType={node.type}
				label={node.label}
				on:dragstart={onDragStart}
			/>
		{/each}
	</div>
	<Button class="mt-auto h-10 mb-12 bg-[#006d32] shadow-green-300 shadow-2xl">Connect To GitHub</Button>
</aside>

