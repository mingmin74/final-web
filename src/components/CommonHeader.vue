<template>
<div class="common_header">
     <div class="tabbar">
        <div style="flex:1;">
            <router-link to="/index"> <img style="width:100%;height:70px" src="../assets/logo.jpg" alt="" srcset=""></router-link>
           </div>
        <div style="flex:3">
            <a-input-search
                size="large"
                v-model:value="inputVal"
                placeholder="input search text"
                style="width: 300px;border-radius:20px"
                @search="onSearch"/>
        </div>
        <div class="tabbarRight"> 
            <div >
                <calendar-outlined style="fontSize:25px" />
                <span>签到</span>
            </div>
              <a-badge dot><mail-outlined style="fontSize:25px" title="消息中心"/></a-badge>
            <div>
                <a-popover placement="topLeft">
                    <template #content>
                       <p v-if="isLogin" @click="loginOut">退出账号</p> 
                       <router-link to="/loginRegister" ><p v-if="!isLogin" @click="handleLogin">去登陆</p></router-link> 
                       <router-link to="/personalCenter"><p>个人中心</p></router-link>
                    </template>
                    <a-avatar size="large">
                         <!-- 默认头像 -->
                        <template #icon>
                            <img :src="userPic" v-if='userPic' alt="" srcset="">
                            <UserOutlined v-if='userPic' />
                            </template>
                    </a-avatar>
                    <span v-if="isLogin">{{userName}}</span>
                </a-popover>
             
            </div>
        </div>
</div>
     <div class="pick">
        <a-menu style="background-color:#0B614B;color:#fff" v-model:selectedKeys="current" mode="horizontal">
            <a-sub-menu key="sub1">
            <template #icon>
                <unordered-list-outlined />
            </template>
            <template #title>全部分类</template>
            <a-menu-item-group >
                <a-menu-item v-for="(item,index) in categoryList" :key="index">{{item.category_title}}</a-menu-item>
            </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="mail">
            推荐
            </a-menu-item>
            <a-menu-item key="essence">
            精华
            </a-menu-item>
            <a-menu-item key="attentioned">
            已关注
            </a-menu-item>
            <a-menu-item key="publish">
                <router-link to="/publish">
                    <a-button >发布</a-button> 
                </router-link>
            </a-menu-item>
        </a-menu>
    </div>
</div>

</template>

<script>
import { mapState } from 'vuex'
import httpServe from '../api/request'
import { MailOutlined , CalendarOutlined , UserOutlined , UnorderedListOutlined } from '@ant-design/icons-vue';
export default {
components: {
    MailOutlined,
    CalendarOutlined,
    UserOutlined,
    UnorderedListOutlined,
    },
      computed: {
    ...mapState({isLogin:'isLogin',userName:'userName',userPic:'userPic'}),
  },
    data() {
        return {
            categoryList:[]
        }
    },
    created() {
        this.getAllGategory()
        console.log('11111111111111111111111111',this.$store.state.isLogin);
        console.log('12222222222222222222222222',this.$store.state.userPic);
    },
    mounted(){
    //组件挂载后,尝试从浏览器存储中获取数据
    let uname=localStorage.getItem("userName");
    //如果能获取到,则代表登录过,直接将获取的值赋给vuex中的变量;若没有获取到就取空值,则没有登录
    this.$store.commit('CHANGE_UNAME',uname||'')
  },
    methods: {
        handleLogin(){
            this.$router.push('/loginRegister')
            this.$store.commit('CHANGE_FLAG','login')
            localStorage.setItem('flag','login')
        },
        loginOut(){
            this.$store.commit('CHANGE_STATUS',false)
            localStorage.removeItem('isLogin')
            localStorage.removeItem('author_id')
            localStorage.removeItem('ZL_token')
            localStorage.removeItem('userName')
            localStorage.removeItem('userPic')
            this.$router.push('/index')
        },
        getAllGategory(){
            httpServe.get('http://localhost:8080/article_catrgory/getAllCategory')
            .then((res)=>{
            this.categoryList=res.data.results
            console.log( this.categoryList);
        })}
    }
}
</script>

<style lang="less" scoped>
    .tabbar{
        margin: 0 250px;
        background-color: #fff;
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .tabbarRight{
            flex: 1.5;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
    .pick{
        padding: 0 250px;
        background-color: #0B614B;
        height: 50px;
    }
</style>