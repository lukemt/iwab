<script lang="ts">
  import type { IQuizPageData } from "../data/dataTypes";
  import QuestionText from "./QuestionText.svelte";

  export let quizData: IQuizPageData;
  export let goToNextPage: () => void;

  let clicked: number[] = [];
  const handleClickAnswer = (i: number) => {
    clicked = [...clicked, i];
    if (quizData.answers[i] && quizData.answers[i].correct) {
      setTimeout(() => {
        goToNextPage();
      }, 500);
    }
  };
</script>

<div class="container">
  <QuestionText text={quizData.question} />
  <div class="question">
    {quizData.question}
  </div>
  {#each quizData.answers as answer, i}
    <div
      class:answer={true}
      class:correct={answer.correct}
      class:clicked={clicked.includes(i)}
      on:click={() => handleClickAnswer(i)}
    >
      {answer.answer}
    </div>
  {/each}
</div>

<style>
  .container {
    width: 70vw;
  }

  .question {
    display: none;
    padding: 3vw;
  }
  .answer {
    padding: 1vw 3vw;
    cursor: pointer;
  }
  .question,
  .answer {
    opacity: 0.7;
    background-color: #ffffff;
    border-radius: 20px;
    color: #000000;
    text-shadow: 0 0 20px #ffffff;
    font-size: 40px;
    font-family: "Indie Flower", cursive;
    line-height: 55px;

    margin-bottom: 20px;
  }
  .answer.clicked {
    background-color: rgb(228, 77, 77);
  }
  .answer.clicked.correct {
    background-color: rgb(77, 228, 77);
  }
</style>
