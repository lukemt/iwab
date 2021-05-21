<script lang="ts">
  export let text: string;
  export let backgroundImage: string | undefined;
  export let goToNextPage: () => void;
  export let pageState: IPageState;

  import BackgoundImage from "../sharedBlocks/BackgoundImage.svelte";
  import type { IPageState } from "../types";
  import PageWrapper from "../basic/PageWrapper.svelte";
  import InfoText from "./InfoText.svelte";
  import InfoTextNoBackground from "./InfoTextNoBackground.svelte";
</script>

<BackgoundImage {backgroundImage} {...pageState} />
<PageWrapper {...pageState} onClick={goToNextPage}>
  {#if backgroundImage}
    <InfoText {text} />
  {:else}
    <InfoTextNoBackground {text} />
  {/if}
</PageWrapper>
