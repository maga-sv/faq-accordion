<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <main>
    <img src="./assets/images/background-pattern-desktop.svg" alt="" class="bg-pattern__desktop">
    <HelloWorld />
  </main>
</template>

<style scoped>

  main {
    position: relative;
    z-index: 12;
    background: var(--lightPink);
    height: 100vh;
  }

  .bg-pattern__desktop {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    z-index: -1;
  }

</style>
