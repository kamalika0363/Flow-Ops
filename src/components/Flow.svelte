<script lang="ts">
	import {
		SvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		useSvelteFlow,
		type Node
	} from '@xyflow/svelte';
	import Sidebar from './Sidebar.svelte';
	import '@xyflow/svelte/dist/style.css';
	import CodeGenerated from './CodeGenerated.svelte';
	import { nodes, edges, type, draggedLabel, addNode } from '../stores/flowStore';

	const { screenToFlowPosition } = useSvelteFlow();

	const onDragOver = (event: DragEvent) => {
		event.preventDefault();
		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'move';
		}
	};

	const onDrop = (event: DragEvent) => {
		event.preventDefault();

		if (!$type) {
			return;
		}

		const position = screenToFlowPosition({
			x: event.clientX,
			y: event.clientY
		});

		const newNode = {
			id: `${Math.random()}`,
			type: $type,
			position,
			data: { label: $draggedLabel || `${$type} node` },
			origin: [0.0, 0.0]
		} satisfies Node;

		addNode(newNode);
	};

	const fitViewOptions = {
		minZoom: 0.1,
		maxZoom: 0.9,
	};
</script>

<main class="h-screen w-screen flex relative">
		<CodeGenerated />

	<div class="flex-grow h-full">
		<SvelteFlow
			{nodes}
			{edges}
			fitView={true}
			fitViewOptions={fitViewOptions}
			on:dragover={onDragOver}
			on:drop={onDrop}
			class="h-full"
		>
			<Controls />
			<Background bgColor='#fefbf6' variant={BackgroundVariant.Dots} />
		</SvelteFlow>
	</div>

		<Sidebar />
</main>