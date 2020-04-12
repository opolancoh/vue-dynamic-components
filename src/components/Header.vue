<template>
  <component :is="headerName"></component>
</template>

<script>
import { mapState } from 'vuex';
import HeaderDefault from '@/components/HeaderDefault.vue';
import HeaderPro from '@/components/HeaderPro.vue';

export default {
  name: 'Header',
  components: {
    HeaderDefault,
    HeaderPro,
  },
  computed: {
    ...mapState(['headerName']),
  },
};
</script>
