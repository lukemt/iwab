<script lang="ts">
  import { data } from "../data/data";
  import InfoPage from "../infoPage/InfoPage.svelte";
  import QuizPage from "../quizPage/QuizPage.svelte";
  import type { IPageState } from "../types";

  export let pageNumber: number;
  export let goToNextPage: () => void;
  export let pageState: IPageState;

  $: pageData = data[pageNumber];
</script>

{#if pageData.type == "info"}
  <InfoPage
    text={pageData.text}
    backgroundImage={pageData.backgroundImage}
    {goToNextPage}
    {pageState}
  />
{/if}

{#if pageData.type === "game"}
  <!-- <WabenTryOut {pageState} /> -->
{/if}

{#if pageData.type === "quiz"}
  <QuizPage
    quizData={pageData}
    backgroundImage={pageData.backgroundImage}
    {goToNextPage}
    {pageState}
  />
{/if}

{#if pageData.type === "email"}
  <!-- nothing -->
{/if}
