<template>
  <div class="index">
    <div class="bar">
      <div class="item">编辑推荐</div>
      <div class="item">城市攻略</div>
      <div class="item">我的收藏</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      msg: '首页',
    };
  },
};
</script>

<style scoped>
  .bar{
    display: flex;
    height: 100px;
    border-bottom: 1px solid #e9e9e9;
  }
  .bar .item{
    flex: 1;
    font-size: 2.5em;
    text-align: center;
    line-height: 100px;
  }
</style>
