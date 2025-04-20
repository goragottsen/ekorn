<script lang="ts">
  import { JsonView } from '@zerodevx/svelte-json-view';

  interface Props {
    value: unknown;
  }

  let { value }: Props = $props();
</script>

<section>
  <h3>studentsData =</h3>
  <pre><JsonView json={value}></JsonView></pre>
</section>

<style>
  section {
    margin-top: 20px;
  }

  h3 {
    margin-bottom: 14px;
  }
</style>
