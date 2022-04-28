import { createStore } from 'vuex'
export default createStore({
    state: {
        isLogin:localStorage.getItem("isLogin") || false,//登录状态
        userName:localStorage.getItem('userName') || '',//用户名,
        token:localStorage.getItem("ZL_Token") || '',
        authorId:localStorage.getItem("author_id") || '',
        flag:localStorage.getItem("flag")||undefined,
        userPic:localStorage.getItem("userPic") || ''
    },
    mutations: {
    // 进行数据更新，改变数据状态
        AUTHOR_ID(state, flag){
            state.authorId = flag;
        },
        CHANGE_STATUS(state, flag) {
            state.isLogin = flag;
        },
        CHANGE_FLAG(state, flag) {
            state.flag = flag;
        },
        CHANGE_UNAME(state,value){
            state.userName = value
        },
        TOKEN(state,value){
            state.token=value
        },
        CHANGE_PIC(state,value){
            state.userPic=value
        }
    },
    actions: {
       //执行动作，数据请求
    },
    getters: {
    // 获取到最终的数据结果
        isLogin: state => state.isLogin 
    }

   
})