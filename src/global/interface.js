import Vue from 'vue'
import axios from 'axios'
function XHRpost (url, data, fallback, fail) {
  axios.post(url, data)
    .then(function (response) {
      if (fallback) fallback(response.data)
    })
    .catch(function (error) {
      if (fail) fallback(error)
    })
}
Vue.prototype.$XHRpost = XHRpost
