<script lang="ts">
  import RichText from "./RichText.svelte";

  export let text: string;
  export let styleMode: "dark" | "light" | "noglass" | "nobackground";
</script>

<div class="container {styleMode}">
  <div class="text {styleMode}">
    <RichText {text} />
  </div>
</div>

<style>
  .container {
    border-radius: 70px;
    width: 70vw;
    margin: 50px 0px;
  }
  .container.dark {
    background-color: #00000076;
  }
  .container.light {
    background-color: #ffffffbb;
  }

  .text {
    padding: 50px;

    font-family: "Krona One", sans-serif;

    text-align: center;
    font-size: 44px;
    letter-spacing: 0.12px;
    line-height: 64px;
  }
  .text.dark,
  .text.noglass {
    text-shadow: 0 0 20px #000000;
    color: #ffffff;
  }
  .text.light,
  .text.nobackground {
    text-shadow: 0 0 20px #ffffff;
    color: #000000;
  }
</style>
