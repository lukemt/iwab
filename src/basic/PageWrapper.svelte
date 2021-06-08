<script lang="ts">
  import { fade } from "svelte/transition";

  export let onClick: (() => void) | undefined = undefined;
  export let isPrevious: boolean;
  export let isCurrent: boolean;
  export let isNext: boolean;
  export let zIndex: number;

  let showContent = true;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleShowBackgroundClick = (e: any) => {
    e.stopPropagation();
    showContent = !showContent;
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
  <div class="showBackground" on:click={handleShowBackgroundClick} />
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

  .showBackground {
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url(/show-background-icon.png);
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border-radius: 7px;
    opacity: 0.6;
    transition: opacity 500ms;
  }
  .showBackground:hover {
    opacity: 1;
  }
</style>
