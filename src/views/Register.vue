<template>
  <div class="register">
    <a-form
      class="right"
      name="custom-validation"
      :model="formState"
      :rules="rules"
      v-bind="layout"
      @finish="onFinish"
      @validate="handleValidate"
      @finishFailed="onFinishFailed"
    >
    <a-form-item  label="用户名" name="username">
      <a-input v-model:value="formState.username"   />
    </a-form-item>
    <a-form-item  label="手机号" name="phonenum">
      <a-input v-model:value="formState.phonenum"   />
    </a-form-item>
    <a-form-item  label="密码" name="password">
      <a-input  v-model:value="formState.password" type="password"  />
    </a-form-item>
    <a-form-item  label="确认密码" name="checkpass">
      <a-input v-model:value="formState.checkpass" type="password"  />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 8 }">
      <a-button style="color:rgb(9,166,120);margin-right:60px"  @click="handlelogin">登录</a-button>
      <a-button type="primary" html-type="submit">注册</a-button>
    </a-form-item>
    </a-form>
  </div>
</template>

<script>

import { message } from 'ant-design-vue';
import httpServe from '../api/request'
export default {
  data() {
    const onFinish = values => {
      console.log('Success:', values);
      this.submit(values)
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    //强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$
    let validatePass = async (_rule, value) => {
      let reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/
      if (value === '') {
        return Promise.reject('请输入密码');
      } else if(!reg.test(value)){
        return Promise.reject("必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 6-20 之间");
      }else{
        return Promise.resolve()
      }
    };
     let validatePass2 = async (_rule, value) => {
      if (value === '') {
        return Promise.reject('请输入确认密码');
      } else if (value !== this.formState.password) {
        return Promise.reject("两次密码不一致");
      } else {
        return Promise.resolve();
      }
    };
     let checkphone = async (_rule, value) => {
       let reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
      if (value === '') {
        return Promise.reject('请输入手机号');
      } else if (!reg.test(value)) {
        return Promise.reject("手机号格式不正确");
      } else {
        return Promise.resolve();
      }
    };
    const rules = {
      username:[{ required: true, message: '请输入你的用户名'},{min: 1,max: 20,message: '长度在1-20之间',trigger: 'blur'}],
      password: [{ required: true, validator: validatePass, trigger: 'blur' }],
      checkpass: [{ required: true,validator: validatePass2, trigger: 'blur' }],
      phonenum: [{ required: true,validator: checkphone, trigger: 'blur' }],
    };
     const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 12,
      },
    };
    return {
      layout,
      formState:{
        username:'',
        password:'',
        checkpass:'',
        phonenum:''
      },
      onFinish,
      onFinishFailed,
      rules
    }
  },
  methods: {
    handlelogin(){
    localStorage.setItem('flag','login')
    this.$store.commit('CHANGE_FLAG','login')
    },
    submit(value){
    httpServe.post('http://localhost:8080/user/register',value)
    .then((res)=>{
    console.log(res)
    if(res.data.data!=200){
      message.info(res.data.message)
      return false
    }
    message.success(res.data.message)
    this.$router.push('/login')
  })
    }
   
  },
}
</script>

<style lang="less" scoped>
.register{
  width: 375px;
  height: 350px;
  padding-top: 50px;
}
</style>