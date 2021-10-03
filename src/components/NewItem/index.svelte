<script>
  import { createEventDispatcher } from "svelte";
  import "./styles.scss";

  const dispatch = createEventDispatcher();

  let value = "";
  
  function handleClick() {
    dispatch("newitem", value);
    value = "";
  }
</script>

<ion-item class="add-item" on:click={handleClick}>
  <ion-icon name="add" class="add-icon" />
  Item da lista
</ion-item>

