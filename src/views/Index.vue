<template>
  <div class="index">
    <div class="content">
      <div class="swiper">
        <a-row>
          <a-col :span="18" style="padding:20px"> <content-swiper></content-swiper></a-col>
          <a-col :span="6"  style="padding:20px 20px 20px 30px ;box-sizing: border-box;text-align:left;overflow:hidden">
              <div class="notice" style="font-size:20px;margin-bottom:10px">
                  <icon-font  type="icon-gonggao" />
                  <span>公告</span>
              </div>
              <a-divider style="margin:0;" />
              <ul class="notice_list">
                  <li style="color:#0B614B">[公告] 甜甜西米露新书推荐</li>
                  <li>[公告] 甜甜西米露新书推荐</li>
                  <li>[公告] 甜甜西米露新书推荐</li>
                  <li>[公告] 甜甜西米露新书推荐</li>
                  <li>[公告] 甜甜西米露新书推荐</li>
                  <li>[公告] 甜甜西米露新书推荐</li>
              </ul>
          </a-col>
    </a-row>
      </div> 
    </div>
    <common-list :articleData='articleData'></common-list>
    <common-footer></common-footer>
  </div>
</template>

<script>
import { createFromIconfontCN } from '@ant-design/icons-vue';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3194161_ujhh8c1oi9r.js',
});
import ContentSwiper from './ContentSwiper.vue'
import CommonFooter from '../components/CommonFooter.vue';
import CommonList from '../components/CommonList.vue'

export default {
  components: {
    ContentSwiper,
    IconFont,
    CommonFooter,
    CommonList
  },
  setup(){
   
 
    return {
     
    }
  },

    
 

}
</script>

<style lang="less" scoped>
  li{
      list-style: none;
  }
  .index{
    .content{
      // height: 600px;
      background-color: #f3f5f7;
      padding-top: 20px;
      .swiper{
        box-sizing: border-box;
        border-radius: 10px;
        height: 300px;
        margin: 0 250px;
        background-color: #fff;  
        .notice_list{
          margin-bottom: 0;
          margin-top: 10px;
          padding: 0;
          li{
            border-bottom: 1px solid #eee;
            padding: 5px 0;
          }
        }
      }
    }
  }
</style>