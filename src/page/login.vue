<template>
  <div class="hello">
    <error-msg :msg="msg" ref="msg"></error-msg>
    <div class="landing">
      <div class="title">登录</div>
      <div class="login">
        <div class="item">
          <label>手机号1</label>
          <i-input :form="form" :deleteBoolArr="deleteBoolArr" str="phone" place="请输入用户名"></i-input>
        </div>
        <div class="item">
          <label>密码</label>
          <i-input :form="form" inputType="password" :deleteBoolArr="deleteBoolArr" str="pwd" place="请输入密码"></i-input>
        </div>
      </div>
      <div class="main-btn" @click="login">登录</div>
    </div>
    <div class="links" @click="toRegister">
      新用户注册
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        phone: '',
        pwd: ''
      },
      msg: '',
      msgDisplay: false,
      rule: {
        phone: [
          { required: true, message: '用户名不得为空' }
        ],
        pwd: [
          { required: true, message: '密码不得为空' }
        ]
      },
      deleteBoolArr: {
        phone: false,
        pwd: false
      }
    }
  },
  methods: {
    toRegister() {
      this.$emit('toRegister')
    },
    login() {
      let _this = this
      if (!this.validate()) return
      this.validate()
      // 登陆，是否需要加密信息
      this.$XHRpost('api/login', {
        phone: this.form.phone,
        password: this.form.pwd
      }, function(data) {
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
