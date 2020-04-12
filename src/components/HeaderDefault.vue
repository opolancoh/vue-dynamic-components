<template>
  <div id="content-default">
    <img
      class="d-block mx-auto mb-4"
      src="@/assets/bootstrap-solid.svg"
      alt=""
      width="72"
      height="72"
    />
    <h1>{{ item.title }}</h1>
    <p>
      {{ item.subtitle }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HeaderDefault',
  computed: {
    ...mapState({
      item: (state) => state.headerData,
    }),
  },
};
</script>

<style scoped>
#content-default {
  text-align: center;
}
</style>
