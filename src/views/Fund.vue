<template>
  <div class="fund">
    <van-swipe
      class="my-swipe"
      :autoplay="2000"
      indicator-color="white"
      lazy-render
    >
      <van-swipe-item v-for="(item, i) in images" :key="i">
        <van-image :src="item.icon_url" />
      </van-swipe-item>
    </van-swipe>

    <div class="tab">
      <van-tabs type="card">
        <van-tab v-for="(item, i) in tablist" :key="i" :title="item.tab_name">
          <div class="tab-desc">
            <h6>{{ item.comment }}</h6>
            <p>{{ item.tips }}</p>
          </div>
          <van-cell-group v-for="(desc, index) in item.items" :key="index">
            <van-cell>
              <div class="items">
                <van-image
                  width="100"
                  height="100"
                  :src="desc.img_src"
                />
                <span class="desc-name">{{desc.name}}</span>
                <span class="desc-pe">
                  <span>{{desc.content[0].value}}</span>
                  <span>{{desc.content[0].desc}}</span>
                </span>
                <span class="desc-roe">
                  <span>{{desc.content[1].value}}</span>
                  <span>{{desc.content[1].desc}}</span>
                </span>
              </div>
            </van-cell>
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import * as api from "@/api/index";
export default {
  data() {
    return {
      images: [],
      tablist: [],
    };
  },
  async mounted() {
    api.getFundBanner().then((result) => {
      this.images = result.data.items;
    });

    (async () => {
      let datas = await api.getFundtab();
      this.tablist = datas.data.tab;
    })();
  },
};
</script>

<style lang="less" scoped>
.tab {
  .tab-desc {
    h6 {
      margin: 0.3rem;
      font-size: 0.35rem;
      color: orange;
    }

    p {
      margin: 0.3rem;
      font-size: 0.35rem;
      color: #999;
    }
  }

  .items {
    display: flex;
    align-items: center;

    .van-image {
      flex: 2;
    }

    .desc-name {
      flex: 2;
    }

    .desc-pe {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .desc-roe {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

  }


}
</style>