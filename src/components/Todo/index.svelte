<script lang="ts">
  import { onMount } from "svelte";
  import { tasks } from "../../stores.js";
  
  import TodoApi from "../../TodoApi.js"
  
  import "./styles.scss";
  onMount(async () => {
    $tasks = await TodoApi.getAll();
  });
</script>

<div class="todo-list">
  {#each $tasks as item (item)}
    {JSON.stringify(item.id + ' ' + item.text)}
  {/each}
</div>