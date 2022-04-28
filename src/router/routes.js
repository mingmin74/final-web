const  routes=[
    {
        path:"/",
        redirect:'/index'
    },
    //登录
    {
        path:"/login",
        component:()=> import('@/views/Login'),
        meta: {
            isLogin: false,
            isShowHeader:false
        }
    },
     //登录和注册页面
     {
        path:"/loginRegister",
        component:()=> import('@/views/loginRegister'),
        meta: {
            isLogin: false,
            isShowHeader:false
        }
    },
    //注册
    {
        path:"/register",
        component:()=> import('@/views/Register'),
        meta: {
            isLogin: false,
            isShowHeader:false
        }
    },
    //首页
    {
        path:"/index/:user?",
        component:()=> import('@/views/Index'),
        name:'index',
        meta: {
            isLogin: false,
            isShowHeader:true
        }
    },
    // 发布成功页
    {
        path:"/publishSuccessfully",
        component:()=> import('@/views/PublishSuccessfully'),
        name:'publishSuccessfully',
        meta: {
            isLogin: true,
            isShowHeader:true
        }
    },
    //文章详情页
    {
        path:"/ArticleContent",
        component:()=> import('@/views/ArticleContent'),
        name:'ArticleContent',
        meta: {
            isLogin: true,
            isShowHeader:true
        }
    },
    //个人中心
    {
        path:"/personalCenter",
        component:()=> import('@/views/PersonalCenter'),
        name:'personalcenter',
        meta: {
            isLogin: true,
            isShowHeader:true
        }
    },
    //发布文章
    {
        path:"/publish",
        component:()=> import('@/views/PublishArticle'),
        name:'publish',
        meta: {
            isLogin: true,
            isShowHeader:true
        }
    },
    //文章分类
    {
        path:"/category",
        component:()=> import('@/views/ArticleCategory'),
        name:'category',
        meta: {
            isLogin: true,
            isShowHeader:true
        }
    },
]
export default routes
