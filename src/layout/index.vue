<template>
  <div class="app-wrapper">
    <div class="app-container">
      <van-nav-bar
        :title="title"
        fixed
      />
      <div class="main-container">
        <router-view :key="key" />
      </div>
      <van-tabbar v-model="active" :active-color="variables.primaryColor">
        <van-tabbar-item
          v-for="(tab,index) in tabBarConfig"
          :key="index"
          :icon="tab.icon"
          @click="linkTo(tab.link)"
        >{{ tab.title }}</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import { tabBarConfig } from '@/config'
import variables from '@/assets/styles/variables.scss'

export default {
  data() {
    return {
      tabBarConfig
    }
  },
  computed: {
    active: {
      get() {
        let activeIndex = 0
        this.tabBarConfig.forEach((it, i) => {
          if (it.link === this.$route.path) {
            activeIndex = i
          }
        })
        return activeIndex
      },
      set(val) {
        console.log(val)
      }
    },
    title: {
      get() {
        let title = ''
        this.tabBarConfig.forEach((it, i) => {
          if (it.link === this.$route.path) {
            title = it.title
          }
        })
        return title
      },
      set(val) {
        console.log(val)
      }
    },
    variables() {
      return variables
    },
    key() {
      return this.$route.path
    }
  },
  mounted() {
    console.log(this.tabBarConfig)
  },

  methods: {
    linkTo(route) {
      // if (route === this.$route.path) return false
      this.$router.push({ path: route })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  min-height: 100%;
  position: relative;
  background: #f2f2f2;
  overflow: hidden;
  .app-container {
    height: 100%;
    .main-container {
      margin-top: 46px;
      background: #f2f2f2;
      padding: 0 0 60px;
    }
  }
}

</style>
