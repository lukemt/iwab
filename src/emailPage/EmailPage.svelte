<script lang="ts">
  import BackgoundImage from "../sharedBlocks/BackgoundImage.svelte";
  import PageWrapper from "../basic/PageWrapper.svelte";
  import type { IPageState } from "../types";
  import { sendEmailAdress } from "./sendEmailAdress";
  import type { IEmailPageData } from "../data/dataTypes";

  export let emailData: IEmailPageData;
  export let backgroundImage: string | undefined;
  export let pageState: IPageState;

  let emailAdress: string | undefined;
  let sent: boolean = false;

  const handleButtonClick = () => {
    sendEmailAdress(emailAdress);
    sent = true;
  };
</script>

<BackgoundImage {backgroundImage} {...pageState} />

<PageWrapper {...pageState}>
  {#if !sent}
    <div>
      {emailData.mainText}

      <input
        type="email"
        placeholder={emailData.emailPlaceholderText}
        bind:value={emailAdress}
      />

      <input
        type="button"
        on:click={handleButtonClick}
        value={emailData.buttonText}
      />
    </div>
  {:else}
    {emailData.thanksText}
  {/if}
</PageWrapper>

<style>
  input[type="email"] {
    border-radius: 5px;
  }
  input[type="button"] {
    border-radius: 5px;
  }
</style>
