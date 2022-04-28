<template>
<div class=""></div>
    <a-input-search
      v-model:value="searchValue"
      placeholder="搜索话题"
      style="width: 200px"
      @search="onSearch"
    /> 
</template>

<script>
import { ref } from 'vue';
export default {
    //  const options = [
    //   {
    //     value: 'zhejiang',
    //     label: 'Zhejiang',
    //     children: [
    //       {
    //         value: 'hangzhou',
    //         label: 'Hangzhou',
    //       }
    //     ]
    //   },
    //   {
    //     value: 'jiangsu',
    //     label: 'Jiangsu',
    //     children: [
    //       {
    //         value: 'nanjing',
    //         label: 'Nanjing',
    //       }
    //     ],
    //   }
    // ],
setup() {

    return{

    }
}
}
</script>

<style>

</style>