<template>
  <div>
    <div class="hello">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'nominate',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
<style scoped>
.hello{
  font-size: 3em;
}
</style>
