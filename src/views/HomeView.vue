<template>
  <div class="home">
    <navHeader></navHeader>
    
    <!--导航列表 -->
    <navList></navList>
    
    <!-- 指数 -->
    <hotStock></hotStock>

    <!-- 文章列表 -->
    <Articles></Articles>

  </div>
</template>

<script>
import navHeader from "@/components/navHeader"
import navList from "@/components/navList"
import hotStock from "@/components/hotStock"
import Articles from "@/components/Articles"


import * as api from "@/api/index"

export default {
  name: "HomeView",
  components: {
    navHeader,
    navList,
    hotStock,
    Articles

  },
  async mounted() {
  //  let res = await api.getFundBanner()
  //  console.log(res)
  }
};
</script>

<style>
.d1 {
  width: 200px;
  height: 200px;
  background: skyblue;
}

.d2 {
  width: 2rem;
  height: 2rem;
  background: tan;
}
</style>
