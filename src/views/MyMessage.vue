<template>
    <div class="my_message">
        <div class="left_right">
            <ul>
            <li id="category" :class="{selected:index===current}" @click='changeLi(index)' v-for="(item,index) in message" :key="index">
                {{ item.label}}
            </li>
            </ul>
            <a-button style="color:#bbb;border-radius:20px">清空</a-button>
        </div>
         <a-divider style="margin:0" />
        <div>
            <div v-if="current=='0'">系统消息</div>
            <div v-if="current=='1'"> <a-empty :image="simpleImage" /></div>
            <div v-if="current=='2'">我的评论</div>
        </div>
  </div>
</template>

<script>
import { Empty } from 'ant-design-vue';
export default {
    data() {
        const message=[
        {label:'系统通知',value:'0'},
        {label:'活动提醒',value:'1'},
        {label:'我的评论',value:'2'}]
    return {
        simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
        message,
        current:'0'
    }
    },
    methods: {
        changeLi(index){
            this.current=index
        }
    },

}
</script>

<style lang="less" scoped>
.my_message{
    .left_right{
        display: flex;
        justify-content: space-between;
        align-items: center;
ul{
    margin: 0;
    padding: 0;
        display: flex;
        #category:nth-child(2){
            border-left: 2px solid #ddd;
            border-right:2px solid #ddd;
        }
        #category{
        margin: 20px 0;
        padding: 0 20px;
        font-size: 20px;
    }

    }
    
    }
  
}
</style>