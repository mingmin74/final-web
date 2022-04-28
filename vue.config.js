module.exports={
    //关闭eslint校验工具
    lintOnSave:false,
    devServer: {
        proxy:{
          '/user':{
            target:'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {'^/user': '/' }
          },
          '/article_catrgory':{
            target:'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {'^/article_catrgory': '/' }
          },
          '/article':{
            target:'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {'^/article': '/' }
          },
          
        } 
    },
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#09A678',
              'link-color': '#1DA57A',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
}