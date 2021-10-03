import { writable }  from "svelte/store";

export const tasks = writable([
  {
    id: 1,
    description: "teste",
    checked: false
  },
  {
    id: 2,
    description: "testado",
    checked: true
  }
]);