<template>
  <van-cell-group inset>
    <van-cell is-link to="/login">
      <template #title> 登录财金通 </template>
      <template> 账号密码登录 </template>
    </van-cell>

    <van-cell>
      <van-grid :border="false">
        <van-grid-item icon="/imgs/me1.png" text="收藏" />
        <van-grid-item icon="/imgs/me2.png" text="评论" />
        <van-grid-item icon="/imgs/me3.png" text="赞过" />
        <van-grid-item icon="/imgs/me4.png" text="最近" />
      </van-grid>
    </van-cell>
  </van-cell-group>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>