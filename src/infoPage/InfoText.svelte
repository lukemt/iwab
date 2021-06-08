<script lang="ts">
  export let text: string;
</script>

<div class="container">
  <div class="text">
    {#each text.split("*") as textFragment, i}
      {#if i % 2 === 0}
        {textFragment}
      {:else}
        <i>{textFragment}</i>
      {/if}
    {/each}
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

    font-family: "Krona One", sans-serif;

    /* text-shadow: 0 0 20px #ffffff; */
    color: #000000;
    text-align: center;
    font-size: 44px;
    letter-spacing: 0.12px;
    line-height: 64px;
  }
</style>
