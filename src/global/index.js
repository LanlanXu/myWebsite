import Vue from 'vue'
/* 全局error组件 */
Vue.component('error-msg', {
  // 选项
  template: `<transition name="fade">
              <div class="msg" v-if="msgSec">{{msg}}</div>
            </transition>`,
  props: ['msg'],
  data () {
    return {
      errorDefaultSec: 2, // 报错默认倒计时消失时间
      msgSec: 0, // 显示的控制
      errorMsg: '', // 错误信息
      msgTimer: '' // 错误信息计时器
    }
  },
  methods: {
    loadErrorMsg () {
      clearInterval(this.msgTimer)
      this.msgSec = this.errorDefaultSec
      this.errorMsg = this.msg
      this.msgTimer = setInterval(() =>{
        if (!this.msgSec) {
          clearInterval(this.msgTimer)
        } else {
          this.msgSec--
        }
      }, 1000)
    }
  }
})

Vue.prototype.errorMsg = function (msg) {
  this.msg = msg
  this.$refs['msg'].loadErrorMsg()
}

/* 全局校验方法 */
Vue.prototype.validate = function (arr) {
  let bool = true
  for (let item in this.rule) {
    let value = this.form[item]
    let rules = this.rule[item]
    if (!bool) break
    if (arr && arr.indexOf(item) === -1) continue
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].required) {
        if (!value) {
          this.errorMsg(rules[i].message)
          bool = false
          break
        }
      } else if (rules[i].validator) {
        if (!rules[i].validator(value)) {
          bool = false
          break
        }
      } else if (rules[i].regExp) {
        if (!rules[i].regExp.test(value)) {
          this.errorMsg(rules[i].message)
          bool = false
          break
        }
      }
    }
  }
  return bool
}

/* 全局input组件 */
Vue.component('i-input', {
  // 选项
  template: `<div class="default-input">
              <input :type="inputType?inputType:'text'" :placeholder="place" v-model="form[str]" @input="closeDis(str)" @focus="closeDis(str)" @blur="closeHid(str)">
              <i class="fa fa-times close" v-if="deleteBoolArr[str]" @click="deleteCont(str)"></i>
            </div>`,
  props: ['form', 'deleteBoolArr', 'str', 'place', 'addclass', 'inputType'],
  methods: {
    closeDis (str) {
      this.deleteBoolArr[str] = !!this.form[str]
    },
    closeHid (str) {
      setTimeout(() => {
        this.deleteBoolArr[str] = false
      }, 200)
    },
    deleteCont (str) {
      this.form[str] = ''
      this.deleteBoolArr[str] = false
    }
  }
})
