<template>
  <div class="app-wrapper">
    <div class="app-container">
      <van-nav-bar :title="title" fixed>
        <template #left>
          <van-icon name="wap-nav" size="20px" @click="showMenu = true" />
        </template>
      </van-nav-bar>
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
      <van-popup v-model="showMenu" position="left" class="menu-wrapper">
        <van-collapse v-model="activeMenu" accordion :border="false">
          <van-collapse-item
            v-for="(sidebar,index) in sideBarConfig"
            :key="index"
            :title="sidebar.title"
            :name="index"
            size="large"
            :border="false"
            class="menu-second"
          >
            <div v-for="secondMenu in sidebar.children" :key="secondMenu.title" class="menu-third">{{ secondMenu.title }}</div>
          </van-collapse-item>
        </van-collapse>

      </van-popup>
    </div>
  </div>
</template>
<script>
import { tabBarConfig, sideBarConfig } from '@/config'
import variables from '@/assets/styles/variables.scss'

export default {
  data() {
    return {
      tabBarConfig,
      sideBarConfig,
      showMenu: false,
      activeMenu: '1'
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
<style lang="scss">
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
    .menu-wrapper {
      width: 80%;
      height: 100%;
      padding: 10px 5px;
      background: #304156;
      .menu-second {
        color: #ffffff;
        background: #304156;
        .van-cell,.van-collapse-item__content {
          color: #ffffff;
          background: inherit;
        }
        .van-collapse-item__content {
          padding: 0;

        }
      }
      .menu-third {
        padding: 12px 25px;
        background: #263445;
      }
    }

  }
}

</style>
