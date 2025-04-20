<script lang="ts">
  import { onMount } from 'svelte';

  let text = '';
  const fullText = 'Welcome to the Ekorn frontend coding challenge!';
  let index = 0;

  onMount(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        text += fullText[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 12);
  });
</script>

<h1>{text}</h1>

<style>
  h1 {
    font-size: 28px;
    background: linear-gradient(75deg, #00ddff, #ffb6c1, #ff3e00);
    background-size: 300% 300%;
    margin-bottom: 30px;
    animation:
      gradient-shift 5s infinite,
      color-shift 5s infinite;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    text-box-trim: trim-both;
    line-height: 1.2;
    animation: gradient-shift 5s infinite;
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
