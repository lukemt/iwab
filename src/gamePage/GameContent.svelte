<script lang="ts">
  import { onMount } from "svelte";
  import type { IGamePageData } from "../data/dataTypes";

  export let gameData: IGamePageData;
  export let goToNextPage: () => void;

  enum COLOR {
    DEFAULT = "#ffde3c",
    FIRST = "#fff8d3",
    SECOND = "#b3b3b3",
    OUTLINE = "#19407a",
  }

  var clickCount = 0;
  function hexPoints(x: number, y: number, radius: number) {
    var points = [];
    for (var theta = 0; theta < Math.PI * 2; theta += Math.PI / 3) {
      var pointX, pointY;

      pointX = x + radius * Math.sin(theta);
      pointY = y + radius * Math.cos(theta);

      points.push(pointX + "," + pointY);
    }

    return points.join(" ");
  }

  var spielFeld: {
    hexPoints: string;
    col: number;
    row: number;
    color: string;
  }[][] = [];

  var x, y, row, col, pointX, pointY, theta;

  onMount(() => {
    var radius = 30;

    for (row = 0; row < 4; row += 1) {
      spielFeld[row] = [];
      for (col = 0; col < 4; col += 1) {
        var newCol = col + Math.ceil(row / 2) - 2;
        var minusCol = col - Math.floor(row / 2);

        if (newCol >= 0 && minusCol < 3) {
          var offset = (Math.sqrt(3) * radius) / 2;
          x = 40 + offset * col * 2;
          y = 40 + offset * row * Math.sqrt(3);
          if (row % 2 !== 0) x += offset;

          spielFeld[row][newCol] = {
            hexPoints: hexPoints(x, y, radius),
            col: newCol,
            row: row,
            color: COLOR.DEFAULT,
          };
        }
      }
    }
  });

  const handleClick = (col: number, row: number) => (event: any) => {
    console.log("clicked", col);
    if (spielFeld[row][col].color === COLOR.DEFAULT) {
      spielFeld[row][col].color = clickCount % 2 ? COLOR.SECOND : COLOR.FIRST;
      clickCount++;
    }
  };
</script>

<div>
  <div class="title">
    {gameData.title1}<br />{gameData.title2}
  </div>
  <svg
    version="1.1"
    width="300"
    height="300"
    xmlns="http://www.w3.org/2000/svg"
  >
    {#each spielFeld as row}
      {#each row as col}
        <polygon
          points={col.hexPoints}
          style="fill:{col.color};stroke:{COLOR.OUTLINE};stroke-width:5;cursor:pointer;"
          on:click={handleClick(col.col, col.row)}
        />
      {/each}
    {/each}
  </svg>

  <!-- <pre>
    {JSON.stringify(spielFeld, null, 2)}
  </pre> -->
  <div class="nextButton" on:click={goToNextPage}>{gameData.next}</div>
</div>

<style>
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
