<script lang="ts">
  import { GITHUB_REPO_URL } from "../config";

  export let linkText: string;
</script>

<div>
  <a href={GITHUB_REPO_URL} target="_blank"> {linkText} </a>
</div>

<style>
  div {
    z-index: 10000;
    position: absolute;
    bottom: 30px;
    left: 0;
    width: 100vw;

    text-align: center;
    font-size: 20px;
  }
  a {
    color: #000000;
  }
</style>
