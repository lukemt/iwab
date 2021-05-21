<script lang="ts">
  import BackgoundImage from "../sharedBlocks/BackgoundImage.svelte";
  import type { IPageState } from "../types";
  import PageWrapper from "../basic/PageWrapper.svelte";
  import GameContent from "./GameContent.svelte";
  import type { IGamePageData } from "../data/dataTypes";

  export let gameData: IGamePageData;
  export let backgroundImage: string | undefined;
  export let goToNextPage: () => void;
  export let pageState: IPageState;

  gameData;
</script>

<BackgoundImage {backgroundImage} {...pageState} />
<PageWrapper {...pageState}>
  <GameContent {gameData} {goToNextPage} />
</PageWrapper>
