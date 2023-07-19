<template>
  <div class="header">
    <van-nav-bar>
      <template #left>
        <van-icon name="user-circle-o" />
      </template>

      <template #title>
        <van-search
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
        />
      </template>

      <template #right>
        <van-icon name="envelop-o" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    }
  }
};
</script>

<style lang="less" scoped>
.header {

    ::v-deep .van-nav-bar__title {
        max-width: 100%;
    }

    .van-icon {
        font-size: 25px;
    }

    .van-search {
        width: 280px;
    }
}
</style>