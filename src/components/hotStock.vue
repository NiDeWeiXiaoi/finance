<template>
  <div class="quote">
    <h5 class="redian">今日热点</h5>
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item,i in quoteArr" :key="item.quote.symbol">
          <h5>{{item.quote.name}}</h5>
          <h5 :class="item.quote.chg > 0 ? 'green' : 'red'">{{item.quote.current}}</h5>
          <p :class="item.quote.chg > 0 ? 'green' : 'red'">{{item.quote.chg}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import * as api from "@/api/index";
export default {
  data() {
    return {
      quoteArr: [],
    };
  },
  async mounted() {
    let res = await api.getQuotes();
    this.quoteArr = res.data.items.slice(0, 3);
  },
};
</script>


<style lang="less" scoped>

.quote {
  .redian {
    padding-left: 10px;
  }
  
  h5 {
    margin: 0.1rem;
    font-size: 0.45rem;
  }
  p {
    margin: 0.1rem;
    font-size: 0.4rem;
  }

  .green {
      color: darkgreen;
  }

  .red {
    color: orangered;
  }

}

</style>