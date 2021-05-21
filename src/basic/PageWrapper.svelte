<script lang="ts">
  import { fade } from "svelte/transition";

  export let onClick: (() => void) | undefined = undefined;
  export let isPrevious: boolean;
  export let isCurrent: boolean;
  export let isNext: boolean;
  export let zIndex: number;

  let showContent = true;

  const handleClick = () => {
    if (showContent === false) {
      showContent = true;
    } else {
      if (onClick) onClick();
    }
  };
</script>

<div
  class:wrapper={true}
  class:isPrevious
  class:isCurrent
  class:isNext
  style="z-index: {zIndex}; {onClick ? 'cursor: pointer;' : ''}"
  on:click={handleClick}
>
  {#if showContent}
    <div transition:fade class="flex">
      <slot />
    </div>
  {/if}
</div>

<style>
  .wrapper.isNext {
    pointer-events: none;
    opacity: 0;
  }
  .wrapper.isCurrent {
    opacity: 1;
    transition: opacity 1s;
  }
  .wrapper.isPrevious {
    pointer-events: none;
    opacity: 0;
    transition: opacity 1s;
  }

  .wrapper {
    /* position to fill entire screen */
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    overflow-y: auto;
  }

  .flex {
    /* center content vertically and horizontally with flexbox */
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
