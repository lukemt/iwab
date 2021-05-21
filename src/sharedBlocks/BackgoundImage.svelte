<script lang="ts">
  export let backgroundImage: string | undefined;
  export let isPrevious: boolean;
  export let isCurrent: boolean;
  export let isNext: boolean;
  export let zIndex: number;

  const backgroundImageStyle = backgroundImage
    ? "url(/images/" + backgroundImage + ")"
    : "radial-gradient(circle at 28% 29%, rgba(237, 237, 237,0.04) 0%, rgba(237, 237, 237,0.04) 50%,rgba(136, 136, 136,0.04) 50%, rgba(136, 136, 136,0.04) 100%),radial-gradient(circle at 8% 78%, rgba(156, 156, 156,0.04) 0%, rgba(156, 156, 156,0.04) 50%,rgba(37, 37, 37,0.04) 50%, rgba(37, 37, 37,0.04) 100%),radial-gradient(circle at 29% 46%, rgba(251, 251, 251,0.04) 0%, rgba(251, 251, 251,0.04) 50%,rgba(198, 198, 198,0.04) 50%, rgba(198, 198, 198,0.04) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))";
</script>

<div
  class:isPrevious
  class:isCurrent
  class:isNext
  style="z-index: {zIndex}; background-image: {backgroundImageStyle};"
/>

<style>
  div.isNext {
    opacity: 0;
  }
  div.isCurrent,
  div.isPrevious {
    opacity: 1;
    transition: opacity 2s;
  }

  div {
    pointer-events: none;

    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-size: cover;
    background-position: center;
    background-color: rgb(237, 237, 237);

    animation-name: spin;
    animation-duration: 30s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes spin {
    from {
      transform: rotate(0) scale(1);
    }

    to {
      transform: rotate(0) scale(1.3);
    }
  }
</style>
