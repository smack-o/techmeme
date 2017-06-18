<template>
  <div class="bar">
    <router-link to='nominate' class="item"><i>编辑推荐</i></router-link>
    <router-link to='strategy' class="item"><i>城市攻略</i></router-link>
    <router-link to='collection' class="item"><i>我的收藏</i></router-link>
  </div>
</template>

<script>
import nominate from './nominate';
import strategy from './strategy';
import collection from './collection';

export default {
  name: 'tab',
  data() {
    return {

    };
  },
  components: {
    nominate,
    strategy,
    collection,
  },
};
</script>
<style scoped>
.bar{
  display: flex;
  height: 8em;
  border-bottom: 1px solid #e9e9e9;
}
.bar .item{
  flex: 1;
  font-size: 3em;
  text-decoration: none;
  color: black;
  text-align: center;
  line-height: 100px;
}
.bar .item i{
  font-style: normal;
  font-weight: bolder;
}
.router-link-active i{
  border-bottom: 0.2em solid black;
}
</style>
