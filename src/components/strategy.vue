<template>
  <div class="strategy">
    <div class="item">
      <img :src="img" alt="风景">
      <div class="prompt">
        <p><span class="mold">攻略</span></p>
        <p class="genre">传统市场</p>
      </div>
      <p>作者：<i>Jesse</i></p>
      <p class="status"><i>建筑师</i></p>
    </div>
    <div class="item">
      <img :src="img" alt="风景">
      <div class="prompt">
        <p><span class="mold">攻略</span></p>
        <p class="genre">传统市场</p>
      </div>
      <p>作者：<i>Jesse</i></p>
      <p class="status"><i>建筑师</i></p>
    </div>
    <div class="item">
      <img :src="img" alt="风景">
      <div class="prompt">
        <p><span class="mold">攻略</span></p>
        <p class="genre">传统市场</p>
      </div>
      <p>作者：<i>Jesse</i></p>
      <p class="status"><i>建筑师</i></p>
    </div>
    <div class="item">
      <img :src="img" alt="风景">
      <div class="prompt">
        <p><span class="mold">攻略</span></p>
        <p class="genre">传统市场</p>
      </div>
      <p>作者：<i>Jesse</i></p>
      <p class="status"><i>建筑师</i></p>
    </div>
  </div>
</template>

<script>
import img from '../assets/img/1.jpg';

export default {
  name: 'strategy',
  data() {
    return {
      img,
      msg: 'Welcome to hello1',
    };
  },
};
</script>
<style scoped>
.strategy{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 3em;
}
.strategy .item{
  margin-top: 1em;
  margin-right: 1em;
  margin-left: 1em;
  height: 10.5em;
  border-radius: 0 0 0.5em 0.5em;
  box-shadow: 1px 0 0px #e9e9e9, 0 10px 10px #e9e9e9;
}
.strategy .item img{
  margin:auto;
  width: 8em;
  height: 8em;
  border-radius: 0.5em 0.5em 0 0;
}
.strategy .item .prompt{
  height: 3em;
  margin-top: -3em;
}
.strategy .item .prompt .mold{
  background-color: #fff;
  padding: 0 0.4em;
}
.strategy .item .prompt .genre{
  font-size: 1em;
  color: #fff;
}
.strategy .item p{
  font-size: 0.8em;
  text-indent: 0.8em;
  text-align: left;
}
.strategy .item p i{
  font-style: normal;
}
.strategy .item .status{
  font-size:  0.6em;
  text-indent: 1em;
  color: #e9e9e9;
}
</style>
