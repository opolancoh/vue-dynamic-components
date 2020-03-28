<template>
  <div>
    <slot>
      <ContentDefault :title="title" :subtitle="subtitle" />
    </slot>
    <hr />
  </div>
</template>

<script>
import ContentDefault from '@/components/HeaderContentDefault.vue';

export default {
  name: 'Header',
  components: { ContentDefault },
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
