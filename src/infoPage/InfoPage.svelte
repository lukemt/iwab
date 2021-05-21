<script lang="ts">
  import BackgoundImage from "../sharedBlocks/BackgoundImage.svelte";
  import type { IPageState } from "../types";
  import PageWrapper from "../basic/PageWrapper.svelte";
  import InfoText from "./InfoText.svelte";
  import InfoTextNoBackground from "./InfoTextNoBackground.svelte";
  import type { IInfoPageData } from "../data/dataTypes";
  import GithubLink from "./GithubLink.svelte";

  export let infoData: IInfoPageData;
  export let backgroundImage: string | undefined;
  export let goToNextPage: () => void;
  export let pageState: IPageState;
</script>

<BackgoundImage {backgroundImage} {...pageState} />
<PageWrapper {...pageState} onClick={goToNextPage}>
  {#if backgroundImage}
    <InfoText text={infoData.text} />
  {:else}
    <InfoTextNoBackground text={infoData.text} />
  {/if}
</PageWrapper>
{#if infoData.githubLinkText}
  <GithubLink linkText={infoData.githubLinkText} />
{/if}
