<script>
  import "./styles.scss";
  
  export let id, text, checked;
</script>

<div class="todo-item" class:checked>
  <input 
  type="text" 
  class="text-input" 
  bind-value={text} 
  readonly={checked} />

  <input type="checkbox" class="checked-box" bind:checked={checked} />
</div>