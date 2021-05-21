<script lang="ts">
  import BackgoundImage from "../sharedBlocks/BackgoundImage.svelte";
  import type { IQuizPageData } from "../data/dataTypes";
  import PageWrapper from "../basic/PageWrapper.svelte";
  import type { IPageState } from "../types";
  import QuizContent from "./QuizContent.svelte";

  export let quizData: IQuizPageData;
  export let backgroundImage: string | undefined;
  export let goToNextPage: () => void;
  export let pageState: IPageState;
</script>

<BackgoundImage {backgroundImage} {...pageState} />
<PageWrapper {...pageState}>
  <QuizContent {quizData} {goToNextPage} />
</PageWrapper>
