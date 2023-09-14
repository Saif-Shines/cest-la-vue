<script setup>
import { useVisitorCount } from "../composables/useVisitorCount";
import { onMounted } from "vue";

const visitorCount = useVisitorCount();

onMounted(() => {
  visitorCount.incrementLocalVisitorCount();
  console.log("onMounted Login Page", visitorCount.localVisitorCount.value);
});
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" />
    <button @click="visitorCount.incrementLocalVisitorCount">
      Continue with email
    </button>
    <footer>Visitor Count: {{ visitorCount.localVisitorCount }}</footer>
  </main>
</template>

<style>
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
