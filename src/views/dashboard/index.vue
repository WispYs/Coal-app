<template>
  <div class="page-container">
    <line-chart :cdata="lineData" />
    <pie-chart :cdata="pieData" />
    <bar-chart :cdata="barData" />
  </div>
</template>
<script>
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
export default {
  components: {
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      lineData: {
        name: [],
        value: []
      },
      barData: {
        name: [],
        value: []
      },
      pieData: null
    }
  },
  mounted() {
    this.__fetchLineData()
  },
  methods: {
    __fetchLineData() {
      this.barData = {
        name: ['一般隐患A', '一般隐患B', '一般隐患C', '一般隐患D', '重大隐患'],
        value: [266, 307, 995, 113, 820]
      }

      this.lineData = {
        name: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        value: [127, 530, 812, 790, 708, 401, 657, 803, 943, 359, 440, 839]
      }

      this.pieData = [
        {
          name: '一般隐患A',
          value: 266
        },
        {
          name: '一般隐患B',
          value: 307
        },
        {
          name: '一般隐患C',
          value: 995
        },
        {
          name: '一般隐患D',
          value: 113
        },
        {
          name: '重大隐患',
          value: 820
        }
      ]
    }
  }

}
</script>
<style lang="scss"></style>
