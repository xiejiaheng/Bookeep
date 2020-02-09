<template>
  <div class="login">
    <van-nav-bar
          left-text=""
          left-arrow
          @click-left="onClickLeft"
          color="red"
        >
        <div class="fontcol" slot=left><van-icon name="arrow-left"  color="#28cd80" />&nbsp;登录</div>
        </van-nav-bar>

    <div class="title">
      <div>Book</div>
    </div>

    <div class="logins" v-show="loginorres">
      <van-cell-group>
        <van-field
          v-model="user.name"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="user.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
        <p @click="tores">没用账号去注册</p>
      </van-cell-group>
      <van-button color="#28cd80" size="large">登录</van-button>
    </div>

    <div class="logins" v-show="!loginorres">
      <van-cell-group>
        <van-field
          v-model="user.name"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入手机号"
        />

        <van-field
          v-model="user.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />

        <van-cell-group>
          <van-field
            v-model="user.sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
</van-cell-group>

        <p @click="tores" v-show=false>没用账号去注册</p>
      </van-cell-group>
      <van-button color="#28cd80" size="large">{{logorres}}</van-button>
    </div>

  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      user:{
        name:'',
        password:'',
        sms:''
      },
      loginorres:true
    }
  },
  computed:{
    logorres(){
      return this.loginorres?'登录':'注册'
    }
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1)
    },
    tores(){
      this.loginorres=false
    }
  }
}
</script>

<style scoped>
.login{
  width: 100vw;
  height: 100vh;
}
.fontcol{
  color: #28cd80;
}
.title{
  color: #28cd80;
  font-size:80px;
  font-weight: 900;
  opacity: 0.2;
  position: relative;
  margin-top: 20px;
}
.title div:nth-child(1){
  text-align: right;
  padding-right: 30px;
}
.logins{
  margin: 0 auto;
  width: 90%;
  min-height: 30vh;
}
.logins p {
  text-align: right;
  font-size: 12px;
  color: rgb(138, 137, 137);
  padding: 10px 0;
}
</style>