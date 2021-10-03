<script>
  import { createEventDispatcher } from "svelte";
  import "./styles.scss";

  export let id, text, checked;

  const dispatch = createEventDispatcher();

  function triggerUpdate() {
    dispatch("update", { id, text, checked });
  }

  function handleClick() {
    dispatch("delete", id);
  }
</script>

<div class="todo-item" class:checked>
  <input
    type="checkbox"
    class="checked-box"
    bind:checked
    on:change={() => triggerUpdate()}
  />

  <input
    type="text"
    class="text-input"
    bind-value={text}
    readonly={checked}
    on:keyup={({ key, target }) => key === "Enter" && target.blur()}
    on:blur={() => triggerUpdate()}
  />

  <ion-icon name="close" class="delete-icon" on:click={handleClick} />
</div>
