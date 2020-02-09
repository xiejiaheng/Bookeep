<template>
  <div :class="['Home',show?'over':'']" @click="closeNav">
    <div class="top">
      <div class="usr">
        <div class="usr-img">
          <van-icon name="apps-o" size="1.5rem" color="white" @click.stop="showNav" />
          <div class="panl">
            <p>本月支出</p>
            <H3>￥3025.36</H3>
            <h5>本月收入￥0.00</h5>
            <router-link to='/Allbill' class="btn-over">查看所有明细</router-link>
            <div @click="popupshow=true" class="btn-add">记一笔</div>
          </div>
        </div>
      </div>
    </div>

    <div class="centont">
      <div class="title">统计</div>
      <div class="date" style="background-color: white;">
            <div class="datexz" @click="dialogs">2019年8月<van-icon name="arrow-down" /></div>
            <div class="datexz-right">
              <div class="btn-ty active">支出</div>
              <div class="btn-ty">收入</div>
            </div>
      </div>
      <div class="eCharts">
        
        <div class="tools">
          
          <div class="dialog">
            <van-popup
              v-model="dialogshow"
              round
              position="bottom"
              :style="{ height: '50%' }"
            >
            
            <van-datetime-picker
                v-model="currentDate"
                type="year-month"
                :min-date="minDate"
                :formatter="formatter"
                :max-date="maxDate"
                @confirm="confirms"
                @cancel="cancels"
              />
            </van-popup>
              
          </div>
        </div>
        <div id="myChart"></div>
      </div>
    </div>

    <van-overlay :show="show" @click="show = false" z-index="5" />
    <transition name="fade">
      <div class="usrNav" v-show="show">
        <div class="usrNav-top">
          <div class="usr-img">
            <van-image round width="60px" height="60px" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="tologin" />
            <p class="p1">请先登录！</p>
            <div class="usr-ti">B</div>
            
          </div>
          
        </div>
        <div class="nav-box">
          
        </div>
      </div>
    </transition>

    <div class="pop">
    <van-popup
      v-model="popupshow"
      position="bottom"
      :style="{ height: '62%' }">
      <div class="popup">
        <div>
          <van-button  color="#28cd80" size="mini">支出</van-button>
          <van-button plain type="default" size="mini">收入</van-button>
        </div>
        <div class="div-right">
          <van-button plain type="default" size="mini">10月18日</van-button>
        </div>
      </div>
      <div>
        <van-cell-group>
          <van-field v-model="info.title" placeholder="标题" />
        </van-cell-group>
        <div class="type">
          <div>餐饮</div>
          <div>餐饮阿萨</div>
          <div>餐饮</div>
          <div>餐饮</div>
          <div>餐饮</div>

          <div>餐饮</div>
          <div>餐饮</div>
          <div>餐饮</div>
          <div>餐饮</div>
          <div>餐饮</div>
          <div>设置</div>
        </div>
        <!-- <van-field v-model="info.price" placeholder="￥" /> -->
        <br>
        <div class="price">￥{{info.price}}</div>
        <div class="ss">
          <van-number-keyboard
          :show="keyboardshow"
          theme="custom"
          extra-key="."
          close-button-text="完成"
          @close='closekey'
          v-model="info.price"
          :maxlength="16"
          
        />
        </div>
        
      </div>
    </van-popup>
    </div>
  </div>
</template>
	
<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
      currentDate: null,
      dialogshow:false,
      minDate: new Date(2019, 7, 1),
      maxDate: new Date(2019, 10, 1),
      popupshow: false,
      keyboardshow:true,
      info:{
        title:null,
        price:''
      }
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    tologin(){
      this.$router.push('/Login')
    },
    closekey(){
      this.popupshow = false
    },
    dialogs(){
      console.log('sss')
      this.dialogshow= !this.dialogshow
    },
    showNav() {
      this.show = true;
    },
    closeNav(e) {
      if (e.target.className !== "nav-box"&& e.target.className !== "usrNav-top" && e.target.className !== "van-image__img" && e.target.className !== "usr-ti" && e.target.className !== "p1" && e.target.className !== "usr-img") {
        console.log(e.target.className)
        this.show = false;
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          subtext: "本月",
          left: "center"
        },
        tooltip: {
          // trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: 'vertical',
          bottom: 0,
          left: "center",
          data: ["交通", "服装", "通讯", "娱乐", "伙食", "人情", "sss情"]
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              {
                label: {
                  normal: {
                    backgroundColor: "#eee",
                    borderColor: "#777",
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                      title: {
                        color: "#eee",
                        align: "center"
                      },
                      abg: {
                        backgroundColor: "#333",
                        width: "100%",
                        align: "right",
                        height: 25,
                        borderRadius: [4, 4, 0, 0]
                      },
                      Sunny: {
                        height: 30,
                        align: "left",
                        backgroundColor: "#333"
                      },
                      Cloudy: {
                        height: 30,
                        align: "left",
                        backgroundColor: "#333"
                      },
                      Showers: {
                        height: 30,
                        align: "left",
                        backgroundColor: "#333"
                      },
                      weatherHead: {
                        color: "#333",
                        height: 24,
                        align: "left"
                      },
                      hr: {
                        borderColor: "#777",
                        width: "100%",
                        borderWidth: 0.5,
                        height: 0
                      },
                      value: {
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: "left"
                      },
                      valueHead: {
                        color: "#333",
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: "center"
                      },
                      rate: {
                        width: 40,
                        align: "right",
                        padding: [0, 10, 0, 0]
                      },
                      rateHead: {
                        color: "#333",
                        width: 40,
                        align: "center",
                        padding: [0, 10, 0, 0]
                      }
                    }
                  }
                }
              },
              { value: 1548, name: "交通" },
              { value: 535, name: "服装" },
              { value: 510, name: "通讯" },
              { value: 634, name: "娱乐" },
              { value: 736, name: "伙食" },
              { value: 562, name: "人情" },
              { value: 562, name: "sss情" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }
      return value;
    },
    cancels(){
      this.dialogshow=false
    },
    confirms(){
      console.log(this.currentDate)
      this.dialogshow=false
    }
  }
};
</script>
	
<style scoped>
.price{
  clear: both;
  text-align: left;
  padding-left: 15px;
  font-weight: 600;
  font-size: 22px;
}
.pop{
  overflow: hidden;
  width: 100vw;
}
.popup{
  padding: 10px;
  overflow: hidden;
  display: flex;
}
.popup div{
  width: 50%;
}
.div-right{
  text-align: right;
}
.type{
  margin-top: 5px;
  min-height: 6vh;
  padding: 0 10px;
}
.type div{
  text-align: center;
  margin: 5px;
  float: left;
  min-width: 30px;
  line-height: 10px;
  font-size: 12px;
  padding: 5px;
  border-radius: 10%;
  border: #dadadd 1px solid;
}











.over{
  overflow: hidden;
}
.nav-box{
  height: 70%;
  background-color: #fefeff;
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  /* transition: 5s ease all; */
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-70vw);
}

.Home {
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  background-color: #fbfbfc;
}
.top {
  /* background-color: #28cd80; */
  height: 35vh;
  position: absolute;
  z-index: 2;
  background: -webkit-linear-gradient(to bottom, #28cd80, rgb(251, 251, 252));
  background: linear-gradient(to bottom, #28cd80, rgb(251, 251, 252));
}
.top:before {
  content: "";
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: rgb(250, 247, 247) solid 25px;
  opacity: 0.3;
  position: absolute;
  top: -20%;
  left: -15%;
}
.usr {
  width: 100vw;
  min-height: 6vh;
}
.usr-img {
  padding: 5px;
}
.usr-img p {
  margin-top: 10px;
}
.usrNav {
  width: 70vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  z-index: 6;
  transition: all 0.3s linear;
  overflow: hidden;
}
.usrNav-top {
  width: 100%;
  height: 30%;
  background-color: #28cd80;
}
.usr-img {
  padding: 15px;
  color: white;
  font-size: 14px;
  position: relative;
}
.usr-ti {
  color: rgb(232, 233, 240);
  font-size: 150px;
  font-weight: 900;
  position: absolute;
  right: 20px;
  top: 0px;
  opacity: 0.3;
}
.panl {
  margin: 10px 1% 0px 1%;
  width: 98%;
  height: 40vh;
  background-color: white;
  box-shadow: 0px 3px 5px #ebe8e8;
  border-radius: 3px;
}
.panl p {
  padding: 45px 0px 10px 0px;
  color: #373d52;
  text-align: center;
}
.panl h3 {
  color: #28cd80;
  text-align: center;
  font-size: 24px;
}
.panl h5 {
  margin-top: 10px;
  color: #373d52;
  text-align: center;
  font-size: 12px;
}
.btn-over {
  display: block;
  margin: 20px auto 0px;
  width: 90%;
  height: 45px;
  border-top: 1px solid rgb(218, 215, 215);
  border-bottom: 1px solid rgb(218, 215, 215);
  color: #000;
  line-height: 45px;
  position: relative;
}
.btn-over::after {
  content: ">";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 22px;
  color: rgb(194, 191, 191);
}
.btn-add {
  display: block;
  width: 120px;
  height: 45px;
  background-color: #28cd80;
  color: white;
  border-radius: 30px;
  margin: 10px auto 0px;
  text-align: center;
  line-height: 45px;
}
.centont {
  min-height: 100vh;
  padding-top: 50vh;
  padding-left: 5%;
  width: 90%;
  background-color: white;
}
.title {
  color: #000;
  font-weight: 600;
  font-size: 16px;
}
.eCharts {
  margin-top: 10px;
  width: 99%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 3px 5px #ebe8e8;
}
#myChart {
  margin-top: 35px;
  width: 100%;
  min-height: 50vh;
}
.dialog{

}
.datexz{
  padding: 5px;
  font-size: 14px;
  color: #373d52;
  width: 60%;
  float: left;
}
.datexz-right{
  width: 30%;
  float: right;
  display: flex;
}
.btn-ty{
  margin-top: 5px;
  font-size: 12px;
  border-radius: 3px;
  width: 45%;
  height: 23px;
  background-color: #37cd87;
  text-align: center;
  line-height: 23px;
  color: white;
  border: 1px solid #37cd87;
}
.active{
  font-size: 12px;
  border-radius: 3px;
  width: 45%;
  height: 23px;
  background-color: #fafafa;
  text-align: center;
  line-height: 23px;
  color: #37cd87;
  border: 1px solid #37cd87;
}
.date{
  background-color: white;
}
</style>
	