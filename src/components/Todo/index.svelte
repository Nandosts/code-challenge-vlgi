<script lang="ts">
  import { onMount } from "svelte";
  import { v4 as uuidv4 } from "uuid";

  import { tasks } from "../../stores.js";

  import TodoApi from "../../TodoApi.js";

  import "./styles.scss";
  import TodoItem from "../TodoItem/index.svelte";
  import NewItem from "../NewItem/index.svelte";

  function handleNewItem(e) {
    $tasks = [
      {
        id: uuidv4(),
        text: "",
        checked: false,
      },
      ...$tasks,
    ];

    TodoApi.save($tasks);
  }

  function handleUpdate(e) {
    const index = $tasks.findIndex((item) => item.id === e.detail.id);
    $tasks[index] = e.detail;
    TodoApi.save($tasks);
  }

  function handleDelete(e) {
    $tasks = $tasks.filter((item) => item.id !== e.detail);
    TodoApi.save($tasks);
  }

  let tasksSorted = [];

  $: {
    tasksSorted = [...$tasks];
    tasksSorted.sort((a, b) => {
      if(a.checked && b.checked) return 0;
      if(a.checked) return 1;
      if(b.checked) return -1;
    });
  }

  onMount(async () => {
    $tasks = await TodoApi.getAll();
  });
</script>

<ion-list class="todo-list">
  {#each tasksSorted as item (item)}
  <TodoItem {...item} on:update={handleUpdate} on:delete={handleDelete} />
  {/each}
  <NewItem on:newitem={handleNewItem} />
</ion-list>
