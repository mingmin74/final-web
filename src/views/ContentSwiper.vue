<template>
  <a-carousel :after-change="onChange">
      <div v-for="(item,index) in imgList" :key="index"><img style="width:100%;height:260px" :src="item.src" alt="" srcset="">
    </div>
  </a-carousel>
</template>
<script>
export default{
  data() {
    const onChange = current => {
      console.log(current);
    };
    return {
      onChange,
      imgList:[
        {id:'001',src:'https://i.niupic.com/images/2022/01/06/9STF.jpg'},
        {id:'002',src:'https://i.niupic.com/images/2022/01/06/9STF.jpg'},
        {id:'003',src:'https://i.niupic.com/images/2022/01/06/9STF.jpg'}
        ]  
    };
  },

};
</script>
<style scoped>

.ant-carousel :deep(.slick-slide) {
  width: 100%;
  text-align: center;
  height: 260px;
  line-height: 250px;
  overflow: hidden;
}

</style>