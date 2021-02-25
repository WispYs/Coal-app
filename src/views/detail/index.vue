<template>
  <div class="page-container">
    <van-form validate-first @submit="onSubmit" @failed="onFailed">
      <van-field
        v-model="detail.name"
        name="name"
        label="设备名称"
        placeholder="设备名称"
        :rules="[{ required: true, message: '请填写设备名称' }]"
      />
      <van-field
        v-model="detail.id"
        name="id"
        label="设备编号"
        placeholder="设备编号"
        :rules="[{ required: true, message: '请填写设备编号' }]"
      />
      <van-field
        readonly
        clickable
        name="type"
        :value="detail.type"
        label="设备类型"
        placeholder="点击选择设备类型"
        @click="showPicker = true"
      />
      <van-field
        v-model="detail.model"
        name="model"
        label="设备型号"
        placeholder="设备型号"
        :rules="[{ required: true, message: '请填写设备型号' }]"
      />
      <van-field
        readonly
        clickable
        name="createTime"
        :value="detail.createTime"
        label="录入时间"
        placeholder="点击选择录入时间"
        @click="showCalendar = true"
      />
      <van-field name="status" label="设备状态">
        <template #input>
          <van-radio-group v-model="detail.status" direction="horizontal">
            <van-radio name="open">开启</van-radio>
            <van-radio name="close">关闭</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="imgUrl" label="设备图片">
        <template #input>
          <van-uploader v-model="detail.imgUrl" />
        </template>
      </van-field>

      <div class="detail-button">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="typeList"
        @confirm="confirmType"
        @cancel="showPicker = false"
      />
    </van-popup>
    <van-popup v-model="showCalendar" position="bottom">
      <van-datetime-picker
        title="选择年月日"
        type="date"
        :color="variables.primaryColor"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="confirmTime"
      />
    </van-popup>

  </div>
</template>
<script>
import variables from '@/assets/styles/variables.scss'
import { parseTime } from '@/utils'

export default {
  data() {
    return {
      showPicker: false,
      showCalendar: false,
      typeList: ['采煤机', '刮板机', '皮带机', '移动变电站'],
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(2999, 12, 31),
      detail: {

      }
    }
  },
  computed: {
    variables() {
      return variables
    }
  },
  methods: {
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      } else if (type === 'day') {
        return `${val}日`
      }
      return val
    },
    onSubmit(values) {
      console.log('submit', values)
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo)
    },
    confirmType(value) {
      this.detail.type = value
      this.showPicker = false
    },
    confirmTime(value) {
      this.detail.createTime = parseTime(value)
      this.showCalendar = false
    }
  }
}
</script>
<style lang="scss" scoped>
.page-container {
  height: calc(100vh - 96px);
  padding-top: 10px;
  .detail-button {
    margin: 40px 20px;
  }
}
</style>
