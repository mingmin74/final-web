<template>
<div class="common_list">
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="articleData">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
          <span v-for="{type,text} in item.actions" :key="type">
            <component v-bind:is="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <template #extra>
          <img
            width="272"
            alt="logo"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </template>
        <a-list-item-meta :description="item.description">
          <template #title>
            <a :href="item.href">{{ item.title }}</a>
          </template>
          <template #avatar><a-avatar :src="item.avatar" /></template>
        </a-list-item-meta>
        {{ item.article_content }}
      </a-list-item>
    </template>
  </a-list>
  </div>
</template>
<script>
import {useStore} from 'vuex'
import {onMounted , ref ,computed} from 'vue'
import httpServe from '@/api/request';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';


export default {

  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  setup() {
   let actions = ref([
      {
        type: 'StarOutlined',
      },
      {
        type: 'LikeOutlined',
      },
      {
        type: 'MessageOutlined',
      },
    ]);
    const store = useStore()
    let articleData=ref([])
    let token=computed(()=>{return store.state.token})
    onMounted(()=>{
      getArticleData()
    })
    function getArticleData(){
      httpServe({
        method: 'get',
        url: 'http://localhost:8080/article/getAllArticle',
        headers:{
              "Authorization": token.value
            }
      }).then((res)=>{
        articleData.value = res.data.data
        articleData.value.forEach((element)=>{
          actions.value.forEach((item)=>{
            if(item.type=='StarOutlined'){
              item.text=element.star_num
            }else if(item.type=='LikeOutlined'){
              item.text=element.like_num
            }else{
              item.text=element.comment_num
            }
          })
          element.actions=actions.value
        })
        console.log('articleData-------------------',articleData.value);
      })
    }
    const pagination = {
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    };
    
    return {
      getArticleData,
      articleData,
      token,
      pagination,
      actions,
    };
  },
};
</script>
<style lang="less" scoped>
.common_list{
  margin:0 250px;
}
</style>