<script>
  import { createEventDispatcher } from "svelte";
  import "./styles.scss";

  const dispatch = createEventDispatcher();

  let value = "";

  function handleKeyUp({ key }) {
    if (key !== "Enter" || value.length === 0) return;
    dispatch("newitem", value);
    value = "";
  }
</script>

<input
  type="text"
  on:keyup={handleKeyUp}
  bind:value
  placeholder="+ Item da lista"
/>
