<!-- 
   Renders markdown style italic formatting on a given text. 
   Example: 
      Input: "One word is *italic*"
      Output: One word is <i>italic</i>
 -->
<script lang="ts">
  import type { StyleMode } from "../types";

  export let text: string;
  export let styleMode: StyleMode;
</script>

{#each text.split("\n") as paragraph}
  <div>
    {#each paragraph.split("*") as textFragment, i}
      {#if i % 2 === 0}
        {textFragment}
      {:else}
        <i class={styleMode}>{textFragment}</i>
      {/if}
    {/each}
  </div>
{/each}

<style>
  i.light,
  i.nobackground {
    font-style: normal;
    background-color: #00059a;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  i.dark,
  i.noglass {
    font-style: normal;
    color: #fff3b1;
  }
</style>
