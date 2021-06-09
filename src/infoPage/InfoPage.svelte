<script lang="ts">
  import BackgoundImage from "../sharedBlocks/BackgoundImage.svelte";
  import type { IPageState } from "../types";
  import PageWrapper from "../basic/PageWrapper.svelte";
  import InfoText from "./InfoText.svelte";
  import type { IInfoPageData } from "../data/dataTypes";
  import GithubLink from "./GithubLink.svelte";
  import { urlParams } from "../config";

  export let infoData: IInfoPageData;
  export let backgroundImage: string | undefined;
  export let goToNextPage: () => void;
  export let pageState: IPageState;

  const getStyleMode = () => {
    if (!backgroundImage) {
      return "nobackground";
    } else if (urlParams.get("mode")) {
      return urlParams.get("mode") as
        | "dark"
        | "light"
        | "noglass"
        | "nobackground";
    } else {
      return "light";
    }
  };
</script>

<BackgoundImage {backgroundImage} {...pageState} />
<PageWrapper {...pageState} onClick={goToNextPage}>
  <InfoText text={infoData.text} styleMode={getStyleMode()} />
</PageWrapper>
{#if infoData.githubLinkText}
  <GithubLink linkText={infoData.githubLinkText} />
{/if}
