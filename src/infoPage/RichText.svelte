<!-- 
   Renders markdown style italic formatting on a given text. 
   Example: 
      Input: "One word is *italic*"
      Output: One word is <i>italic</i>
 -->
<script lang="ts">
  export let text: string;
</script>

{#each text.split("*") as textFragment, i}
  {#if i % 2 === 0}
    {textFragment}
  {:else}
    <i>{textFragment}</i>
  {/if}
{/each}

<style>
  i {
    font-style: normal;
    background: #00059a;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
</style>
