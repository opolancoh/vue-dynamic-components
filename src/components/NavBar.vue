<template>
  <!-- eslint-disable max-len -->
  <div
    class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
  >
    <h5 class="my-0 mr-md-auto font-weight-normal">Vue Dynamic Component Rendering</h5>
    <nav id="nav" class="my-2 my-md-0 mr-md-3">
      <router-link class="p-2" to="/">Home</router-link>
      <router-link class="p-2" to="/free">Free</router-link>
      <router-link class="p-2" to="/pro">Pro</router-link>
      <router-link class="p-2" to="/enterprise">Enterprise</router-link>
      <router-link class="p-2" to="/about">About</router-link>
    </nav>
    <a class="btn btn-outline-primary" href="#">Sign up</a>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #007bff;
}</style
>>
