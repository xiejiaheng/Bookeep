<template>
  <div class="alldetails">
    <div class="top">
      <div class="black">
        <van-nav-bar
          left-text=""
          left-arrow
          @click-left="onClickLeft"
          color="red"
        >
        <div class="fontcol" slot=left><van-icon name="arrow-left"  color="#28cd80" />&nbsp;账单</div>
        </van-nav-bar>
      </div>
      <div class="screen">
        <div>筛选<van-icon name="arrow-down" /></div>
        <div></div>
        <div :style="activo">分类<van-icon :name="activohow?'arrow-up':'arrow-down'" /></div>
      </div>
      <div class="info">
        <div class="btn">
          <van-button round color="#28cd80" size="mini" plain>本月</van-button>
        </div>
        <div class="all">
          <div>支出￥5302.3</div>
          <div>收入￥32.3</div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="panl">
        <div class="left">
            <h5>好口味外卖订单</h5>
            <p>餐饮美食</p>
            <time>10-26 23:56</time>
        </div>
        <div class="cont"></div>
        <div class="right">
          <h4>-56.00</h4>
        </div>
      </div>
      <div class="panl">
        <div class="left">
            <h5>好口味外卖订单</h5>
            <p>餐饮美食</p>
            <time>10-26 23:56</time>
        </div>
        <div class="cont"></div>
        <div class="right">
          <h4>-56.00</h4>
        </div>
      </div>
      <div class="panl">
        <div class="left">
            <h5>好口味外卖订单</h5>
            <p>餐饮美食</p>
            <time>10-26 23:56</time>
        </div>
        <div class="cont"></div>
        <div class="right">
          <h4>-56.00</h4>
        </div>
      </div>
      <div class="panl">
        <div class="left">
            <h5>好口味外卖订单</h5>
            <p>餐饮美食</p>
            <time>10-26 23:56</time>
        </div>
        <div class="cont"></div>
        <div class="right">
          <h4>-56.00</h4>
        </div>
      </div>
      <div class="panl">
        <div class="left">
            <h5>好口味外卖订单</h5>
            <p>餐饮美食</p>
            <time>10-26 23:56</time>
        </div>
        <div class="cont"></div>
        <div class="right">
          <h4>-56.00</h4>
        </div>
      </div>
      <div class="panl">
        <div class="left">
            <h5>好口味外卖订单</h5>
            <p>餐饮美食</p>
            <time>10-26 23:56</time>
        </div>
        <div class="cont"></div>
        <div class="right">
          <h4>-56.00</h4>
        </div>
      </div>
      <div class="panl">
        <div class="left">
            <h5>好口味外卖订单</h5>
            <p>餐饮美食</p>
            <time>10-26 23:56</time>
        </div>
        <div class="cont"></div>
        <div class="right">
          <h4>-56.00</h4>
        </div>
      </div>
      <div class="panl">
        <div class="left">
            <h5>好口味外卖订单</h5>
            <p>餐饮美食</p>
            <time>10-26 23:56</time>
        </div>
        <div class="cont"></div>
        <div class="right">
          <h4>-56.00</h4>
        </div>
      </div>
      <div class="panl">
        <div class="left">
            <h5>好口味外卖订单</h5>
            <p>餐饮美食</p>
            <time>10-26 23:56</time>
        </div>
        <div class="cont"></div>
        <div class="right">
          <h4>-56.00</h4>
        </div>
      </div>
    </div>
    <div class="footer">
      <van-tabbar v-model="active" active-color="#28cd80" route="">
        <van-tabbar-item name="home" icon="gold-coin" to="/Allbill">账单</van-tabbar-item>
        <van-tabbar-item name="search" icon="balance-list" to="/Tongji">统计</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="btns">
      记一笔
    </div>
  </div>
</template>

<script>
export default {
  name:'alldetails',
  data(){
    return{
      activo:{
        color: '#28cd80'
      },
      activohow:true,
      active: 'home'
    }
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.alldetails{
  width: 100vw;
  min-height: 100vh;
}
.top{
  width: 100vw;
  min-height: 21vh;
  position: fixed;
  top: 0;
  z-index: 99;
}
.black{
  min-height: 5vh;
  border-bottom: 1px rgb(238, 239, 241) solid;
}
.screen{
  background-color: white;
  min-height: 6vh;
  display: flex;
  border-bottom: 1px rgb(238, 239, 241) solid;
}
.screen div{
  line-height: 5vh;
  margin-left: 10px;
  font-size: 12px;
  color: rgb(138, 137, 137);
}
.info{
  min-height: 4vh;
  display: flex;
  padding: 10px;
  font-size: 12px;
  background-color: #F9F9F9;

}
.fontcol{
  color: #28cd80;
}
.avtiov{
  color: #28cd80;
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
.content{
  width: 96vw;
  margin-top: 20vh;
  z-index: 1;
}
.panl{
  width: 99%;
  height: 10vh;
  display: flex;
  padding: 9px;
  border-bottom: 1px rgb(238, 239, 241) solid;
}
.panl:last-child{
  margin-bottom: 50px;
}

.left{
  width: 40%;
  height: 100%;
  position: relative;
}
.left p,time{
  margin-top: 5px;
  font-size: 14px;
}
.left time{
  position: absolute;
  bottom: 0px;
  color: rgb(138, 137, 137);
}
.cont{
  width: 40%;
  height: 100%;
}
.right{
  width: 20%;
  height: 100%;
  text-align: right;
}
.right h4{
  font-size: 18px;
}
.btns{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #28cd80;
  color: white;
  text-align: center;
  line-height: 50px;
  position: fixed;
  bottom: 60px;
  right: 10px;
  z-index: 100;
  font-size: 12px;
}
</style>