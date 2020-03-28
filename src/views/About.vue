<template>
  <div>
    <Header :title="title" :subtitle="subtitle" />
    <div class="container"></div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'About',
  components: { Header },
  data() {
    return {
      title: 'About Page',
      subtitle: 'This is an about page.',
    };
  },
};
</script>
