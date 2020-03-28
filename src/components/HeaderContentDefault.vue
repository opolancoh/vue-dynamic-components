<template>
  <div id="content-default">
    <img
      class="d-block mx-auto mb-4"
      src="@/assets/bootstrap-solid.svg"
      alt=""
      width="72"
      height="72"
    />
    <h1>{{ title }}</h1>
    <p>
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HeaderContentDefault',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  },
};
</script>

<style scoped>
#content-default {
  text-align: center;
}
</style>
