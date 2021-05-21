<script lang="ts">
  export let text: string;
</script>

<div class="container">
  <div class="text">
    {text}
  </div>
</div>

<style>
  .container {
    background-color: #ffffff;
    opacity: 0.8;
    border-radius: 70px;
    width: 70vw;
    margin: 50px 0px;
  }
  .text {
    padding: 50px;

    /* font-family: "Redacted Script"; */
    /* font-family: "Indie Flower", cursive; */
    /* font-family: "Open Sans", sans-serif; */
    /* font-family: "Hammersmith One", sans-serif; */
    font-family: "Krona One", sans-serif;

    /* text-shadow: 0 0 20px #ffffff; */
    color: #000000;
    text-align: center;
    font-size: 44px;
    letter-spacing: 0.12px;
    line-height: 64px;
  }
</style>
