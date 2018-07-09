<template>
  <div class="hello">
    <error-msg :msg="msg" ref="msg"></error-msg>
    <div class="landing">
      <div class="title">注册</div>
      <div class="login">
        <div class="item">
          <label>手机号</label>
          <i-input :form="form" :deleteBoolArr="deleteBoolArr" str="phone" place="请输入手机号" class="special" inputType="number"></i-input>
          <!--<span class="getMsgCode" @click="getMsg()">获取验证码</span>-->
        </div>
        <!--<div class="item">
          <label>验证码</label>
          <i-input :form="form" :deleteBoolArr="deleteBoolArr" str="msgcode" place="请输入验证码"></i-input>
        </div>-->
        <div class="item">
          <label>密码</label>
          <i-input :form="form" :deleteBoolArr="deleteBoolArr" str="pwd" place="请输入密码" inputType="password"></i-input>
        </div>
        <div class="item">
          <label>确认密码</label>
          <i-input :form="form" :deleteBoolArr="deleteBoolArr" str="pwd2" place="请再次输入密码" inputType="password"></i-input>
        </div>
      </div>
      <div class="main-btn" @click="register">注册并登录</div>
    </div>
    <div class="links">
      <router-link :to="{ name: 'login'}">
        有账号？直接登录
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    let validatePhoneCheck = (value) => {
      let bool = /^[1][0-9]{10}$/.test(value)
      if (!bool) this.errorMsg('请输入正确格式的手机号')
      return bool
    }
    let validatePwdCheck = (value) => {
      let bool = this.form.pwd === value
      if (!bool) this.errorMsg('两次密码不一致')
      return bool
    }
    return {
      form: {
        phone: '',
        // msgcode: '',
        pwd: '',
        pwd2: ''
      },
      deleteBoolArr: {
        phone: false,
        // msgcode: false,
        pwd: false,
        pwd2: false
      },
      msg: '',
      msgDisplay: false,
      rule: {
        phone: [
          { required: true, message: '手机号不得为空' },
          { validator: validatePhoneCheck }
        ],
        // msgcode: [
        //   { required: true, message: '短信验证码不得为空' }
        // ],
        pwd: [
          { required: true, message: '密码不得为空' },
          { regExp: /^[0-9a-zA-Z]{6,20}$/, message: '密码须为6位以上的数组和字母组成' }
        ],
        pwd2: [
          { validator: validatePwdCheck }
        ]
      }
    }
  },
  methods: {
    getMsg () {
      if (!this.validate('phone')) return
      // 获取验证码接口
      this.$XHRpost('api/getmsgcode', {}, function () { })
    },
    register () {
      let _this = this
      if (!this.validate()) return
      // 注册，是否需要加密信息
      this.$XHRpost('api/register', {
        phone: this.form.phone,
        // msgcode: this.form.msgcode,
        password: this.form.pwd
      }, function (data) {
        _this.errorMsg(data.msg)
        if (data.success) {
          // 储存用户名和密码
          // 跳转
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.getMsgCode {
  color: #000;
  font-size: 1.1rem;
  vertical-align: middle;
}

.special {
  width: calc(76% - 6rem);
  padding-right: 0.5rem;
}
</style>
