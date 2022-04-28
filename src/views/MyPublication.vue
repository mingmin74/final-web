<template>
<div class="my_publish">
  <div class="header" style="padding:20px">
    <h2 style="margin:0px">我的发表(n)</h2>
  </div>
  <a-divider style="margin:0px" />
  <div class="content" ></div>
  
</div>
 
</template>

<script>
import { useStore } from 'vuex'
import httpServe from '../api/request'
// import { message } from 'ant-design-vue';
import { onMounted,computed} from 'vue';
export default {
  setup() {
    let store = useStore()
    let author_id = computed(()=>{
      return store.state.authorId
    })
    let token = computed(()=>{
      return store.state.token
    })
    onMounted(()=>{
      getAllArticle()
    })
    function getAllArticle(){
       httpServe({
          method: 'post',
          url:'http://localhost:8080/article/getAllArticle',
          data:author_id,
          headers:{
            "Authorization": token
          }
        })
        .then((res)=>{
          console.log(res);
      })
    }
    return{
      token,
      author_id,
      getAllArticle
    }

  }
}
</script>

<style lang="less" scoped>
</style>

