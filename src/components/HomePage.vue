<script setup>
import { useVisitorCount } from "../composables/useVisitorCount";
import { onMounted, ref } from "vue";

let homeVisitors = useVisitorCount();
const colorPref = ref("papaywhip");

onMounted(() => {
  console.log("the component is mounted");
  homeVisitors.incrementGlobalVisitorCount();
});
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <hr />
    <i>Visitor count (Home): {{ homeVisitors.globalVisitorCount }}</i>
    <i>Visitor count (Login): {{ homeVisitors.localVisitorCount }}</i>
    <hr />
    <i>{{ colorPref }}</i>
    <input
      type="color"
      name="colorPref"
      id="no"
      aria-label="there something here"
      v-model="colorPref"
    />
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
  background-color: v-bind(colorPref);
}

footer {
  align-self: flex-end;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
