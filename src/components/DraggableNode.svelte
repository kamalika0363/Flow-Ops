<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let nodeType: string;
	export let label: string;

	const dispatch = createEventDispatcher();

	function onDragStart(event: DragEvent) {
		dispatch('dragstart', { event, nodeType, label });
	}
</script>

<div
	class="bg-[#c7b9f8]/30 border border-neutral-500 text-center p-2 rounded-sm cursor-grab w-32"
	draggable={true}
	on:dragstart={onDragStart}
	role="button"
	tabindex="0"
>
	{label}
</div>