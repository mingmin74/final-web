<template>
  <div class="common_footer">
      <div style="display:flex;padding-top:30px;margin:0 250px;justify-content:space-between">
        <ul>
        <li>底部导航</li>
        <li>底部导航</li>
        <li>底部导航</li>
        <li>底部导航</li>
    </ul>
    <ul>
        <li>积分管理</li>
        <li>积分管理</li>
        <li>积分管理</li>
        <li>积分管理</li>
    </ul>
    <ul>
        <li>关于我们</li>
        <li>关于我们</li>
        <li>关于我们</li>
        <li>关于我们</li>
    </ul>
    <div>地址：XXXXX</div>
    </div>
   <div class="footer_end">Copyright   ©2017-2019  青鸾云Powered by©Discuz!    ( 豫ICP备17038200号 )</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.common_footer{
    position: relative;
    bottom: 0;
    background-color: #eefaec;
    height: 250px;
    width: 100%;
    .footer_end{
        background-color: #ddfad8;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
}
</style>