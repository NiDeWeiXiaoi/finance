<template>
  <div class="stock">
    <van-cell is-link icon="chart-trending-o">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <h6>股票榜单</h6>
      </template>
    </van-cell>

    <van-tabs v-model="active">
      <van-tab
        :title="markts[index]"
        v-for="(item, index) in stocks"
        :key="index"
      >
        <van-cell-group inset>
          <van-cell>
            <template>
              <div class="Stockitems" v-for="(stock, i) in stocks[index]" :key="i">
                <span class="index">{{ i + 1 }}</span>
                <span class="name">{{ stock.name }}</span>
                <span class="arrow">
                  <van-icon
                    name="down"
                    :class="
                      stock.chg > 0 ? 'arrow-down red' : 'arrow-down green'
                    "
                  />
                </span>
                <span class="num">{{ stock.value }}</span>
              </div>
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import * as api from "@/api/index";
export default {
  data() {
    return {
      active: 0,
      markts: ["全球", "沪深", "港股", "美股"],
      stocks: [],
    };
  },
  mounted() {
    this.markts.forEach(async (item, index) => {
      let result = await api.getStocks({ type: index });
      /*
                this.stock[i] = result.data.item
                数组通过下标修改元素无法响应页面更新
            */
      //响应式更新页面
      this.$set(this.stocks, index, result.data.items);
    });
  },
};
</script>

<style lang="less" scoped>
.stock {
  ::v-deep .van-cell__left-icon {
    font-size: 0.5rem;
  }

  h6 {
    margin: 0;
    font-size: 16px;
  }

   ::v-deep .van-tabs__line {
       background: #1989fa;
   } 

  .Stockitems {
    display: flex;
    height: 40px;

    .index {
      flex: 1;
    }

    .name {
      flex: 6;
    }

    .arrow {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .value {
      flex: 2;
    }

    .red {
      color: red;
      transform-origin: center;
      transform: rotate(180deg);
    }

    .green {
      color: green;
    }
  }

}
</style>