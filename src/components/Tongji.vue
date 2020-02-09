<template>
  <div class="login">
    <van-nav-bar
          left-text=""
          left-arrow
          @click-left="onClickLeft"
          color="red"
        >
        <div class="fontcol" slot=left><van-icon name="arrow-left"  color="#28cd80" />&nbsp;统计</div>
        </van-nav-bar>

    <div class="info">
        <div class="btn">
          <van-button round color="#28cd80" size="mini" plain>本月</van-button>
        </div>
        <div class="all">
          <div>支出￥5302.3</div>
          <div>收入￥32.3</div>
        </div>
      </div>

    <div class="Chart">
      <div id="myChart1">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
    }
  },
  computed:{
  },
  mounted() {
    this.drawLine1();
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1)
    },
  drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart.setOption({
    tooltip: {
        trigger: 'axis'
    },
    color:['#28cd80','#FF8096'],
    legend: {
        data:['收入','支出']
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1号','2号','3号','4号','5号','6号','7号','8号','9号','10号','11号','12号','13号','14号','15号','16号','17号','18号','19号','20号','21号','22号','23号']
    },
    yAxis: {
        type: 'value',
        axisLabel:{
          formatter:'{value}(元)'
        }
    },
    series: [
        {
            name:'收入',
            type:'line',
            stack: '总量',
            lineStyle:{
              normal:{
                color:"#28cd80"
              }
            },
            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'支出',
            type:'line',
            stack: '总量',
            lineStyle:{
              normal:{
                color:"#FF8096"
              }
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
      });
    }
    },
}
</script>

<style scoped>
.fontcol{
  color: #28cd80;
}
.info{
  min-height: 4vh;
  display: flex;
  padding: 10px;
  font-size: 12px;
  background-color: #F9F9F9;

}
.all{
  width: 50%;
  color: rgb(138, 137, 137);
  text-align: right;
  
}
.btn{
  width: 50%;
  padding-top: 0.5%
}
.Chart{
  padding: 15px;
  box-shadow: 0px 3px 5px #ebe8e8;
}
#myChart1 {
  width: 92%;
  min-height: 50vh;
}
</style>