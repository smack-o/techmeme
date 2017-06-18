<template>
  <div>
    <div class="hello">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'collection',
  data() {
    return {
      msg: 'hello2',
    };
  },
};
</script>
<style scoped>
.hello{
  font-size: 3em;
}
</style>
