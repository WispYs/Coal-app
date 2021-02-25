<template>
  <div class="login-wrapper">
    <img class="login-logo" src="@/assets/images/logo.png" alt="">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
      setToken(values.username)
      this.$router.push({ path: '/list' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login-wrapper {
  padding: 20px;
  .login-logo {
    width: 100px;
    margin: 20vh auto 10vh;
  }
}

</style>
