<script>
  import { onMount } from "svelte";
  import "./styles.scss";

  onMount(() => {
    const html = document.querySelector("body");
    const checkbox = document.querySelector("#switch");
    checkbox.addEventListener("change", ({ target }) => {
      target.checked ? changeColors(darkMode) : changeColors(initialColors);
    });
    const getStyle = (element, style) =>
      window.getComputedStyle(element).getPropertyValue(style);

    const initialColors = {
      bg: getStyle(html, "--bg"),
      colorText: getStyle(html, "--color-text"),
    };

    const darkMode = {
      bg: "#333",
      colorText: "#eee",
    };

    const transformKey = (key) =>
      "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

    const changeColors = (colors) => {
      Object.keys(colors).map((key) =>
        html.style.setProperty(transformKey(key), colors[key])
      );
    };
  });
</script>

<label class="switch">
  <input id="switch" type="checkbox" name="Tema">
  <ion-icon class="switcher check-off" name="sunny-sharp" />
  <ion-icon class="switcher check-on" name="moon-sharp" />
</label>