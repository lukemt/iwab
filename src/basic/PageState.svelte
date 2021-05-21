<script lang="ts">
  import SelectPage from "./SelectPage.svelte";
  import type { IPageState } from "../types";

  export let currentPageNumber: number;
  export let pageNumber: number;
  export let currentZIndex: number;
  export let pageCount: number;

  // calculate pageNumbers
  $: previousPageNumber = currentPageNumber - 1;
  $: nextPageNumber = currentPageNumber + 1;
  $: if (currentPageNumber === pageCount - 1) {
    nextPageNumber = 0;
  }
  $: if (currentPageNumber === 0) {
    previousPageNumber = pageCount - 1;
  }

  // calculate pageState
  let pageState: IPageState;
  $: {
    pageState = {
      isPrevious: pageNumber === previousPageNumber,
      isCurrent: pageNumber === currentPageNumber,
      isNext: pageNumber === nextPageNumber,
      zIndex: 0,
    };

    // calculate pageState.zIndex
    if (pageState.isPrevious) {
      pageState.zIndex = currentZIndex - 1;
    } else if (pageState.isCurrent) {
      pageState.zIndex = currentZIndex;
    } else if (pageState.isNext) {
      pageState.zIndex = currentZIndex + 1;
    }
  }

  // page switch actions
  const goToNextPage = () => {
    currentPageNumber = nextPageNumber;
    currentZIndex++;
  };
</script>

<div>
  {#if pageState.isPrevious || pageState.isCurrent || pageState.isNext}
    <SelectPage {pageNumber} {pageState} {goToNextPage} />
  {/if}
</div>
