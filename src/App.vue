<script>
export default {
  data: () => ({
    currentPage: "User",
    subTitle: "Get the email addresses",
  }),
};
</script>

<template>
  <header class="header">
    <span class="logo">
      <img src="@/assets/vue-heart.png" width="30" alt="logo is asdf" />
      C'est La Vue
    </span>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/user">User</router-link>
    </nav>
  </header>
  <div v-if="renderPage === 'UserPage'">
    <Suspense>
      <router-view />
      <!-- <component
        :is="renderPage"
        :key="renderPage"
        :subtitle="subTitle"
        @log="logger"
      /> -->
      <template v-slot:fallback> UserList is loading.. </template>
    </Suspense>
  </div>
  <div v-else>
    <component :is="renderPage" :key="renderPage" />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>
