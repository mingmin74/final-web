<template>
帐号信息设置
  <div class="img_icon" >
    <a-avatar class="img_detail" :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
    <template #icon>
        <AntDesignOutlined v-if='imgUrl' />
        <img :src="imgUrl" v-if='imgUrl' alt="" srcset="">
    </template>
    </a-avatar>
    </div>
  <a-upload
    :show-upload-list="false"
    v-model:file-list="fileList"
     :before-upload="beforeUpload"
      name="file"
    :action='actionUrl'
    :headers="headers"
    @change="handleChange"
  >
    <a-button >
      <upload-outlined></upload-outlined>
     更换头像
    </a-button>
    
  </a-upload>
</template>
<script>
import {useStore} from 'vuex'
import { message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref ,computed } from 'vue';
export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    let store=useStore()
    let author_id=computed(()=>{
    return  store.state.authorId
    })
    const beforeUpload = file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    };
    let token= computed(()=>{
      return  store.state.token
    })
    let imgUrl=computed(()=>{
      return  store.state.userPic
    })
    const handleChange = info => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
        localStorage.setItem('userPic',info.file.response.data.imgUrl)
        store.commit('CHANGE_PIC',info.file.response.data.imgUrl)
        console.log('info.file.response.value--------------------',info.file.response.data.imgUrl);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    };
    const fileList = ref([]);
    return {
      fileList,
      beforeUpload,
      actionUrl: `http://localhost:8080/user/uploadAvatar?author_id=${author_id.value}`,
      author_id:'',
      token,
      imgUrl,
      headers: {
        authorization: token.value,
      },
      handleChange,
    };
  },
});
</script>