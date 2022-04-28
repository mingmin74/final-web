<template>
  <div class="personal_center">
    <a-row class="center_detail"  >
    <a-col :span="6" class="person_left">
        <div class="img_icon" >
            <a-avatar class="img_detail" :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
            <template #icon>
                <AntDesignOutlined />
            </template>
            </a-avatar>
            <div class="username">不可抗力</div>
            <div>id:28374897498</div>
        </div>
        <ul style="text-align:left;padding:0">
          <li :class="{selected:index===pattern}" id="list_border" v-for="(item,index) in mine" :key="index"  @click="changeLi(item,index)">
              <icon-font  :type="item.icon" />
              <span style="padding-right:50px">{{item.label}} </span> 
              <a-badge :count="index+1" :number-style="{ backgroundColor: '#52c41a' }" />
          </li>
        </ul>
    </a-col>
    <a-col :span="17"  :offset="1" class="person_right">
      <my-attention v-if="pattern=='0'"></my-attention>
      <my-publication v-if="pattern=='1'"></my-publication>
      <my-comments v-if="pattern=='2'"></my-comments>
      <my-message v-if="pattern=='3'"></my-message>
      <my-install v-if="pattern=='4'"></my-install>
    </a-col>
  </a-row>
  </div>
</template>

<script>
import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3194161_jfevjxbnk8.js',
});
import { AntDesignOutlined } from '@ant-design/icons-vue';
import MyAttention from './MyAttention.vue';
import MyPublication from './MyPublication.vue';
import MyComments from './MyComments.vue';
import MyMessage from './MyMessage.vue';
import MyInstall from './MyInstall.vue';
export default {
 components: {
  AntDesignOutlined,
  MyAttention,
  MyPublication,
  MyComments,
  MyMessage,
  IconFont,
  MyInstall
  },
  data() {
      const mine=[
        {label:'关注的部落',value:'0',icon:'icon-guanzhu'},
        {label:'我的发表',value:'1',icon:'icon-fabiaojielun'},
        {label:'我的评论',value:'2',icon:'icon-pinglun'},
        {label:'留言消息',value:'3',icon:'icon-feiji'},
        {label:'我的设置',value:'4',icon:'icon-feiji'}]
      return {
           pattern: '0',
           mine
      }
  },
  methods: {
        changeLi(item, index) {
        this.pattern = index;
        },
  },
}
</script>

<style lang="less" scoped>
.selected{
  border-left: 3px solid #009966;
  color: #009966 !important;
}
li{
    list-style: none;
}
.personal_center{
     background-color: #eefaec;
  
     .center_detail{
         padding-top: 20px;
            margin: 0 250px;
  .person_left{
      border-radius:10px ;
           background-color: #fff;
          .img_icon{
            color: #fff;
            padding:20px; 
            background-image: linear-gradient(to bottom right, #009966,#0B614B );
            border-radius:10px 10px 0 0;
          }
          ul #list_border{
            
              margin-top:20px;
              padding-left:20px;
              font-size:17px;
              color:#444
          }
             .img_detail{
          
            margin-bottom: 20px;
            background-color: aquamarine;
            height: 20px;
            }
        }
    .person_right{
      background-color: #fff;
      }
     }
      
    
}
</style>

