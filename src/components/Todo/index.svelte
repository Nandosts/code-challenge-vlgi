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
        text: e.detail,
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

  onMount(async () => {
    $tasks = await TodoApi.getAll();
  });
</script>

<div class="todo-list">
  <NewItem on:newitem={handleNewItem} />
  {#each $tasks as item (item)}
    <TodoItem {...item} on:update={handleUpdate} on:delete={handleDelete} />
  {/each}
</div>
