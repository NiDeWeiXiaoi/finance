<template>
  <div class="articles">
    <van-cell :fixed="true" v-for="item,i in list" :key="i" :to="{name: 'article', query:{id: item.id, article: item}}">
      <div class="cell-header">
        <van-image
          width="1rem"
          height="1rem"
          fit="cover"
          position="left"
          :src="item.original_status.user.photo_domain + item.original_status.user.profile_image_url.split(',')[0]"
        />
        <div class="right-header">
            <div class="author">{{ item.original_status.user.screen_name }}</div>
            <div class="time">{{item.original_status.timeBefore}}</div>
        </div>
      </div>
      <p v-html="item.original_status.description"></p>
      <div class="cell-footer">
          <div class="item">
              <van-icon name="share-o" />
              <div class="num">{{item.original_status.retweet_count}}</div>
          </div>
          <div class="item">
              <van-icon name="chat-o" />
               <div class="num">{{item.original_status.reply_count}}</div>
          </div>
          <div class="item">
              <van-icon name="good-job-o" />
              <div class="num">{{item.original_status.like_count}}</div>
          </div>
      </div>
    </van-cell>
  </div>
</template>

<script>
import * as api from "@/api/index";
export default {
  data() {
    return {
      page: 1,
      list: [],
    };
  },
  methods: {
    async getList() {
      let res = await api.getArticles({ page: this.page });
      this.list = this.list.concat(res.items);
      this.page++;
    }
  },
  mounted() {
    this.getList();
    window.addEventListener('scroll', () => {
      let scrollHeight = document.documentElement.scrollHeight
      let scrollTop = document.documentElement.scrollTop
      let innerHeight = window.innerHeight

      if(scrollHeight - scrollTop -innerHeight < 50) {
        this.getList()
      }

    })

  },
};
</script>


<style lang="less" scoped>
.articles {
    .cell-header {
        display: flex;
        align-items: center;
    }

    .right-header {
        padding-left: 5px;
        line-height: 0.44rem;
        .author {
            font-size: 12px;
        }

        .time {
            color: #999;
        }
    }

    .cell-footer {
        display: flex;
        align-items: center;

        .item {
            display: flex;
            align-items: center;
            width: 1.5rem;
            height: 0.5rem;

            .num {
                padding-left: 5px;
            }
        }
    }
}
</style>