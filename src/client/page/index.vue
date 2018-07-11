<template>
    <div>
        <div class="main" :class="{'active': barShow}">
            <div class="left-bar">
                <fourleafs :size="40" :left="60" :top="60"></fourleafs>
                <ul>
                    <li><i class="fa fa-home"></i><span class="text">首页</span></li>
                    <li @click="openLayer"><i class="fa fa-sign-in"></i><span class="text">登陆</span></li>
                    <li><i class="fa fa-sign-out"></i><span class="text">退出</span></li>
                </ul>
                <transition name="fade">
                    <div class="shadow" v-if="barShow" @click="barShow=false"></div>
                </transition>
            </div>      
            <div class="right-cont">
                <div class="head">
                    <div class="bar-btn" @click="barShow=!barShow"><i class="fa fa-bars"></i></div>
                    <div class="name"><span class="text">胖了个胖胖</span><i class="fa fa-paper-plane"></i></div>
                </div>
                <div class="wrapper" ref="wrapper">
                    <ul>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容,内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/article">
                                <h1>内容标题</h1>
                                <p>内容内容内容内容内容内容内容内容。。。。</p>
                                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-08-01</span></div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>      
        </div>
        <transition name="slide-fade">
            <div class="layer-plate" v-if="layerShow">
                <div class="close" @click="closeLayer"><i class="fa fa-times"></i></div>
                <login v-if="loginShow" @toRegister="toRegister"></login>
                <register v-if="!loginShow" @toLogin="toLogin"></register>
            </div>
        </transition>
    </div>
</template>


<script>
import fourleafs from '@/page/components/fourLeafs'
import login from '@/page/login'
import register from '@/page/register'
import BScroll from 'better-scroll'
export default {
  data () {
      return {
          barShow: false,
          layerShow: false,
          loginShow: true
      }
  },
  methods: {
      openLayer () {
          this.barShow = false
          this.layerShow = true
          this.loginShow = true
      },
      closeLayer () {
          this.layerShow = false
      },
      toRegister () {
          this.loginShow = false
      },
      toLogin () {
          this.loginShow = true
      }
  },
  mounted () {
      this.$nextTick(() => {
          if(!this.scroll) {
              this.scroll = new BScroll(this.$refs.wrapper, {
                  click: true
              })
          } else if(!this.$refs.wrapper) {
              return
          } else {
              this.scroll.refresh()
          }
      })
  },
  components: {
      fourleafs,
      login,
      register
  }
}
</script>
<style lang="scss">
    @import '@/assets/base.scss';
    .main{ 
        transform: translateX(-($bar-width));
        transition: all .2s;

        &.active{
            transform: translateX(0);
        }

        .left-bar{
            width: $bar-width; 
            height: 100vh;
            background: $bg-color;
            position: absolute; 
            top: 0;

            ul{
                list-style: none;
                margin-top: 50px;

                li{
                    line-height: $bar-btn;
                    border-bottom: 1px solid #2b8aa0;
                    font-size: 14px;
                    position: relative;
                    text-align: center;
                    color: #fff;


                    .fa{
                        padding: 0 5px;
                        color: #fff;
                    }

                    &::before{
                        content: ' ';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        border-bottom: 1px solid #b6c6ca;

                    }
                }
                
            }

            .shadow{
                position: absolute;
                top: 0;
                right: -100vw;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.3);
                z-index: 2;
            }
        }
        .right-cont{ 
            width: 100%; 
            height: 100vh; 
            position: absolute; 
            top: 0;
            left: $bar-width;
            background: #fff;

            .head{
                height: $bar-btn;
                border-bottom: 1px solid #fff;
                display: flex;
                justify-content: space-between;
                background: $bg-color;

                .bar-btn{
                    width: $bar-btn;
                    height: $bar-btn;
                    text-align: center;
                    line-height: $bar-btn;
                    font-size: 24px;
                    color: #fff;
                }

                .name{
                    line-height: $bar-btn;
                    color: #fff;
                    font-size: 14px;
                    padding: 0 15px;
                }
            }

            .wrapper{
                position: absolute;
                top: $bar-btn;
                bottom: 0;
                overflow: hidden;
                width: 100vw;

                ul{
                    li{
                        border-bottom: 1px solid #f0f0f0;
                        padding: 15px 18px;

                        h1{
                            font-size: 18px;
                            line-height: 25px;
                            margin-top: 6px;
                            color: #000;
                        }

                        p{
                            margin-top: 6px;
                            font-size: 13px;
                            line-height: 19px;
                            max-height: 38px;
                            overflow: hidden;
                            -o-text-overflow: ellipsis;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 2;
                            display: -webkit-box;
                            color: #999;
                            -webkit-box-orient: vertical;
                        }

                        .meta{
                            margin-top: 8px;
                            line-height: 22px;
                            font-size: 12px;
                            color: #b1b1b1;
                        }
                    }
                }
            }
        }
    }
    .layer-plate{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $bg-color;

        >.close{
            color: #fff;
            position: absolute;
            top: 4px;
            right: 10px;
            font-size: 24px;
        }
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(100vw);
        opacity: 0;
    }
</style>
