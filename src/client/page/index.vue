<template>
    <div class="main" :class="{'active': barShow}">
        <div class="left-bar">
            <fourleafs :size="40" :left="60" :top="60"></fourleafs>
            <ul>
                <li><i class="fa fa-home"></i><span class="text">首页</span></li>
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
        </div>      
    </div>
</template>


<script>
import fourleafs from '@/page/components/fourLeafs'
export default {
  data () {
      return {
          barShow: false
      }
  },
  components: {
      fourleafs
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
            position: absolute; 
            top: 0;

            ul{
                list-style: none;
                margin-top: 50px;

                li{
                    line-height: $bar-btn;
                    color: #fff;
                    border-bottom: 1px solid #2b8aa0;
                    font-size: 14px;
                    position: relative;
                    text-align: center;

                    .fa{
                        padding: 0 5px;
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
        }
    }
    
</style>
