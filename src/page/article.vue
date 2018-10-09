<template>
    <div class="wrapper" ref="wrapper">
        <div class="article">
            <div class="back" @click="$router.back()"><i class="fa fa-angle-double-left"></i></div>
            <h1 class="title">input | button | textarea 元素的checked, disabled，hidden属性控制</h1>
            <div class="article-info">
                <div class="meta"><i class="fa fa-clock-o"></i><span class="text">2018-06-09 00:20</span></div>
            </div>
            <div class="content">
                <p>这三种元素涉及到的checked, disabled，hidden属性的控制方法如下</p>
                <p>一、attribute方法： </p>
                <p>
                    //以下3行，都会影响HTML的（ checked | disabled | hidden ）属性，且会将ele.（ checked | disabled | hidden ）设置为true
                    ele.setAttribute('checked',  任意值);  
                    ele.setAttribute('disabled',  任意值);
                    ele.setAttribute('hidden',  任意值); 

                    //以下3行，都会删除HTML的（ checked | disabled | hidden ）属性，且会将ele.（ checked | disabled | hidden ）设置为false
                    ele.removeAttribute('checked');  
                    ele.removeAttribute('disabled');
                    ele.removeAttribute('hidden'); 
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
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
  }
}
</script>

<style lang="scss">
    @import '@/assets/base.scss';
    .wrapper{
        position: absolute;
        top: 0;
        bottom: 0;
        overflow: hidden;
        width: 100vw;
        
        .back{
            color: $bg-color;
            font-size: 24px;
            position: fixed;
            left: 15px;
            top: 3px;
        }

        .article{
            background: #fff;

            .title{
                margin: 0 0 15px;
                font-size: 28px;
                line-height: 1.4;
                padding: 25px 18px 0;
            }
            
            .article-info{
                padding: 0 18px;
                font-size: 13px;
                color: #b1b1b1;
                margin: 10px 0 2px 0;
            }

            p{
                padding: 0 18px;
                font-size: 16px;
                color: #2f2f2f;
                line-height: 1.7;
            }
        }
    }
</style>


