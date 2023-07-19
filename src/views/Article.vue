<template>
  <div class="article">
    <van-nav-bar
      :title="article.original_status.title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      :placeholder="true"
      :safe-area-inset-top="true"
      class="title"
    />
    <div class="content" v-html="article.original_status.text"></div>
  </div>
</template>

<script>
export default {
  props: ["article"],
  data() {
    //   articles: {}
  },
  methods: {
      onClickLeft() {
          console.log('aa')
          window.history.back();
      }
  },
  mounted() {
      let articles = {}
      if(this.article) {
          articles = this.article;
          localStorage.setItem('articles', JSON.stringify(articles));
      } else {
          articles = JSON.parse(localStorage.getItem('articles'));
          this.article = this.$route.params;
      }
    // console.log(this.article);
  },
};
</script>

<style lang="less" scoped>
.article {
  .title {
    font-size: 0.35rem;
  }

  .content {
    margin: 0.3rem;
    font-size: 0.3rem;

    ::v-deep img {
      width: 8rem;
    }
  }
}
</style>