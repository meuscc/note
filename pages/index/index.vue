<template>
  <div>
    <h2>Counter Store</h2>

    <p data-testid="counter-values">
      Counter: {{ counter.n }}. Double: {{ counter.double }}
    </p>

    <p>胜多负少舒服舒服水电费水电费Increment the Store:</p>

    <button @click="counter.increment()" data-testid="increment">+1</button>
    <button @click="counter.increment(10)">+10</button>
    <button @click="counter.increment(100)">+100</button>
    <button @click="counter.n++">Direct Increment</button>
    <button
      @click="
        counter.$patch((state) => {
          state.n++;
          state.incrementedTimes++;
        })
      "
    >
      Direct patch
    </button>

    <p>Other actions:</p>

    <button @click="counter.fail">Test Errors</button>
    <button @click="counter.decrementToZero()">Decrement to zero</button>
    <button @click="counter.changeMe()">
      <code>counter.changeMe()</code>
    </button>

    <hr />

    <p>
      Complete store state via
      <code>store.$state</code>:
    </p>

    <pre>{{ counter.$state }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from "~/stores/counter";

const counter = useCounter();

console.log(counter);

// if (process.server) {
//   counter.n = 20
// }
</script>

<style scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
