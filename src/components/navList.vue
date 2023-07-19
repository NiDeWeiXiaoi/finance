<template>
  <div class="navlist">
    <van-grid :border="false" square>
      <van-grid-item
        v-for="item in navList"
        :key="item.title"
        :icon="item.src"
        :text="item.title"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: "大盘行情", src: "/imgs/nav1.png" },
        { title: "股票组合", src: "/imgs/nav2.png" },
        { title: "股票开户", src: "/imgs/nav3.png" },
        { title: "选股攻略", src: "/imgs/nav4.png" },
        { title: "指数选基", src: "/imgs/nav5.png" },
        { title: "基金组合", src: "/imgs/nav6.png" },
        { title: "私募基会", src: "/imgs/nav7.png" },
        { title: "基金必看", src: "/imgs/nav8.png" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>