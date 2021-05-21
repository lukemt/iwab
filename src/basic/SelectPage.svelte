<script lang="ts">
  import { data } from "../data/data";
  import EmailPage from "../emailPage/EmailPage.svelte";
  import GamePage from "../gamePage/GamePage.svelte";
  import InfoPage from "../infoPage/InfoPage.svelte";
  import QuizPage from "../quizPage/QuizPage.svelte";
  import type { IPageState } from "../types";

  export let pageNumber: number;
  export let pageState: IPageState;
  export let goToNextPage: () => void;

  $: pageData = data[pageNumber];
</script>

{#if pageData.type == "info"}
  <InfoPage
    infoData={pageData}
    backgroundImage={pageData.backgroundImage}
    {goToNextPage}
    {pageState}
  />
{/if}

{#if pageData.type === "game"}
  <GamePage
    gameData={pageData}
    backgroundImage={pageData.backgroundImage}
    {goToNextPage}
    {pageState}
  />
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
  <EmailPage
    emailData={pageData}
    backgroundImage={pageData.backgroundImage}
    {pageState}
  />
{/if}
