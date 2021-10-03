<script lang="ts">
  import { onMount } from "svelte";
  import { tasks } from "../stores.js";
  
  import TodoApi from "../TodoApi.js"
  
  import "./Component.scss";
  onMount(async () => {
    $tasks = await TodoApi.getAll();
    console.log($tasks)
  });
</script>

<div class="container">
  teste
</div>