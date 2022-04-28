<template>
  <div class="loginRegister">
    <div class="form_content">
      <img src="../assets/lu.jpg" alt="" class="left">
      <div class="right">
        <login v-if="flag=='login'"></login>
        <register v-if="flag=='register'"></register>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import Login from './Login.vue'
import Register from './Register.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  components: {
    Login,
    Register
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const flag = computed(()=>store.state.flag)
    return{
      flag,
      router
    }
  }
}

</script>

<style lang="less" scoped>
.loginRegister{
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  background-image: linear-gradient(to bottom right, rgb(91,110,54) , rgb(165,187,123));
  .form_content{
    box-shadow: 2px 2px 2px #b4b3b3;
    display: flex;
    height: 350px;
    width: 750px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .right{
      background-color:#fff;
      flex: 1;
    }
    .left{
      flex: 1;
    }
  }

}
</style>