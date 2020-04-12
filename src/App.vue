<template>
  <div id="app">
    <NavBar />
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    NavBar,
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
