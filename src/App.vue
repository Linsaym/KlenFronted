<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const count = ref(1);
let min = ref(0);
let sec = ref(0);

setInterval(() => {
  sec.value++;
  if (sec.value > 59) {
    sec.value = 0;
    min.value++;
  }
}, 1000);

function times() {
  count.value *= 2;
}
</script>

<template>
  <div>
    <button @click="times()">increment</button>
    <button @click="count--">decrement</button>
    <p>{{ count }}</p>
    <p style="color: rebeccapurple">{{ min }}:{{ sec }}</p>
    <p style="color: rebeccapurple"></p>
  </div>
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
