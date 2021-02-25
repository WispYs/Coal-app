<template>
  <div class="page-container">
    <van-tabs v-model="active" animated :color="variables.primaryColor">
      <van-tab v-for="(tab, index) in listTabs" :key="index" :title="tab">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-swipe-cell v-for="(item, i) in listDate" :key="i">
            <div class="list-item">
              <p>设备名称： {{ item.name }}</p>
              <p>设备编号： {{ item.id }}</p>
              <p>设备类型： {{ item.type }}</p>
              <p>设备单位： {{ item.unit }}</p>
              <p>设备型号： {{ item.model }}</p>
              <p>录入时间： {{ item.createTime }}</p>
            </div>
            <template #right>
              <van-button square :color="variables.primaryColor" class="swipe-button" text="编辑" />
              <van-button square type="danger" class="swipe-button" text="删除" />
            </template>
          </van-swipe-cell>
        </van-pull-refresh>

      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Toast } from 'vant'
import variables from '@/assets/styles/variables.scss'
import listDate from '@/data/list-data'

export default {
  data() {
    return {
      active: 0,
      isLoading: false,
      listTabs: ['未开始', '进行中', '已完成'],
      listDate
    }
  },
  computed: {
    variables() {
      return variables
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  }

}
</script>
<style lang="scss" scoped>
.page-container {
  background: #f2f2f2;
  padding: 0;
  .list-item {
    margin-top: 10px;
    background: #ffffff;
    padding: 10px 20px;
    text-align: left;
    p {
      font-size: 14px;
      line-height: 20px;
      color: #666;
    }
  }
  .swipe-button {
    height: 100%;
  }
}
</style>
