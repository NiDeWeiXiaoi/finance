<template>
  <div class="tabbottom" v-show="show">
    <van-tabbar v-model="active" :placeholder="true">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" to="stock">股票</van-tabbar-item>
      <van-tabbar-item icon="medal-o" to="/fund">基金</van-tabbar-item>
      <van-tabbar-item icon="balance-o" to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            show: true
        }
    },
    watch: {
      $route: {
        handler(newRoute, oldRoute) {
          let index = ['/', '/stock', '/fund', '/me'].indexOf(newRoute.path);
          if(index != -1) {
            this.show = true;
            this.active = index;
          } else {
            this.show = false;
          }
        },
        immediate: true,
      }
    }
}
</script>

<style lang="less" scoped>

</style>