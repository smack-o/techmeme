<template>
  <div>
    <div class="hello">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to hello1',
    };
  },
};
</script>
<style scoped>
.hello{
  font-size: 3em;
}
</style>
