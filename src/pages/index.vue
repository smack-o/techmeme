<template>
  <div class="index">
    <tab></tab>
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import tab from '../components/tab';

export default {
  name: 'index',
  data() {
    return {
      msg: '首页',
    };
  },
  components: {
    tab,
  },
};
</script>

<style scoped>

</style>
