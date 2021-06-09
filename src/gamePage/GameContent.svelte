<script lang="ts">
  import type { IGamePageData } from "../data/dataTypes";
  import { Board } from "./gameLogic/Board";
  import type { Field } from "./gameLogic/Field";
  import { FieldOwner } from "./gameLogic/types";

  export let gameData: IGamePageData;
  export let goToNextPage: () => void;

  enum COLOR {
    OUTLINE = "#19407a",
    HIGHLIGHT = "yellow",
  }

  const ownerColors: string[] = [];
  ownerColors[FieldOwner.Free] = "#ffde3c";
  ownerColors[FieldOwner.Player1] = "#fff8d3";
  ownerColors[FieldOwner.Player2] = "#b3b3b3";

  const getColor = (field: Field) => {
    if (field.highlight) {
      return COLOR.HIGHLIGHT;
    } else {
      return ownerColors[field.owner];
    }
  };

  const board = new Board();

  let allFields = board.allFieldsOfBoard();
  var clickCount = 0;

  const handleClick = (field: Field) => (event: any) => {
    if (field.owner === FieldOwner.Free) {
      board.makeMove(
        field.point,
        clickCount % 2 ? FieldOwner.Player2 : FieldOwner.Player1
      );
      allFields = board.allFieldsOfBoard();
      clickCount++;
    }
  };
</script>

<div class="container">
  <div class="title">
    {gameData.title1}<br />{gameData.title2}
  </div>
  <svg
    version="1.1"
    width="300"
    height="300"
    xmlns="http://www.w3.org/2000/svg"
  >
    {#each allFields as field}
      <polygon
        points={field.svgHexPoints}
        style="fill:{getColor(
          field
        )};stroke:{COLOR.OUTLINE};stroke-width:5;cursor:pointer;"
        on:click={handleClick(field)}
      />
    {/each}
  </svg>

  <div class="nextButton" on:click={goToNextPage}>{gameData.next}</div>
</div>

<style>
  .container {
    background-color: #ffffff;
    opacity: 0.8;
    border-radius: 70px;
    width: 70vw;
    margin: 50px 0px;
    padding: 80px;
  }
  div {
    text-align: center;
  }
  .nextButton,
  .title {
    font-family: "Krona One", sans-serif;

    text-shadow: 0 0 20px #ffffff;
    color: #000000;
    text-align: center;
    font-size: 30px;
    letter-spacing: 0.12px;
    padding-bottom: 60px;
  }
  .nextButton {
    cursor: pointer;
  }
</style>
