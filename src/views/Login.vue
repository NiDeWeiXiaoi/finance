<template>
  <div class="login">
    <div class="close" @click="close">
      <van-icon name="cross" />
    </div>

    <div class="logo">
      <van-image width="2rem" height="2rem" src="/imgs/logo.png" />
    </div>

    <div class="form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="account"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />

        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            account: "",
            password: ""
        }
    },
    methods: {
        close() {
            this.$router.go(-1);
        },
        onSubmit() {
            this.$store.dispatch('login',{account:this.account, password: this.password});
        }
    }
};
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: rgba(245, 245, 245);
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;

    .logo {
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form {
        margin: 0.5rem;
    }
}
</style>