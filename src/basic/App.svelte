<script lang="ts">
  import { data } from "../data/data";

  import PageState from "./PageState.svelte";

  let currentPageNumber = 0;
  let currentZIndex = 1;

  // url param &page=
  const urlParams = new URLSearchParams(window.location.search);
  currentPageNumber = Number(urlParams.get("page")) || 0;
</script>

{#each data as page, i}
  <PageState
    pageNumber={i}
    bind:currentPageNumber
    bind:currentZIndex
    pageCount={data.length}
  />
{/each}
