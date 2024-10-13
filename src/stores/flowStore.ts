import { writable } from 'svelte/store';
import type { Node, Edge } from '@xyflow/svelte';

export const nodes = writable([
	{
		id: '1',
		type: 'input',
		data: { label: 'Input Node' },
		position: { x: 150, y: 5 }
	},
	{
		id: '2',
		type: 'default',
		data: { label: 'Default Node' },
		position: { x: 0, y: 150 }
	},
	{
		id: '3',
		type: 'output',
		data: { label: 'Output Node' },
		position: { x: 300, y: 150 }
	},
	{
		id: '4',
		type: 'default',
		data: { label: 'Env' },
		position: { x: 150, y: 300 }
	}
]);

export const edges = writable<Edge[]>([
	{
		id: '1-2',
		type: 'default',
		source: '1',
		target: '2'
	},
	{
		id: '1-3',
		type: 'default',
		source: '1',
		target: '3'
	}
]);

export const type = writable<string | null>(null);
export const draggedLabel = writable<string>('');

export function addNode(newNode: Node) {
	nodes.update(currentNodes => [...currentNodes, newNode]);
}

export function updateNodePosition(id: string, position: { x: number; y: number }) {
	nodes.update(currentNodes =>
		currentNodes.map(node =>
			node.id === id ? { ...node, position } : node
		)
	);
}
