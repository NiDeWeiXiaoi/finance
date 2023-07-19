<template>
  <div id="app">

    <keep-alive>
      <router-view />
    </keep-alive>

    <tabBottom></tabBottom>
  </div>
</template>

<script>
import tabBottom from "@/components/tabBottom"
export default {
  data() {
    return {

    }
  },
  components: {
    tabBottom
  }
}
</script>

<style lang="less">

</style>
