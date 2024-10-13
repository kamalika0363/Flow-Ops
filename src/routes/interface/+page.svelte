<script lang="ts">
    import { SvelteFlowProvider } from '@xyflow/svelte';
    import Flow from '../../components/Flow.svelte';
    import DnDProvider from '../../components/DnDProvider.svelte';

</script>

<SvelteFlowProvider>
    <DnDProvider>
        <Flow />
    </DnDProvider>
</SvelteFlowProvider>
