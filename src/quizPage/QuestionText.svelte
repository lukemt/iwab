<script lang="ts">
  export let text: string;
</script>

<div class:text={true}>
  {text}
</div>

<style>
  .text {
    padding: 50px;

    /* font-family: "Redacted Script"; */
    /* font-family: "Indie Flower", cursive; */
    /* font-family: "Open Sans", sans-serif; */
    /* font-family: "Hammersmith One", sans-serif; */
    font-family: "Krona One", sans-serif;

    text-shadow: 0 0 20px #000000;
    color: #ffffff;
    text-align: center;
    font-size: 44px;
    letter-spacing: 0.12px;
    line-height: 64px;
  }
</style>
