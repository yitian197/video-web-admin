<template>
    <div class="container">  
        <div class="aside">
            <div class="aside-top">
                <span>管理中心</span>
            </div>
            <div class="aside-body">
                <el-menu router="true">
                    <el-menu-item>
                        <span>首页</span>
                    </el-menu-item>
                    <el-sub-menu index="content">
                        <template #title>
                            <span>内容管理</span>
                        </template>
                        <el-menu-item index="/content/ranking">
                            <span>排行管理</span>
                        </el-menu-item>
                        <el-menu-item index="/content/tag">
                            <span>标签管理</span>
                        </el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="/review">
                        <template #title>
                            <i class="iconfont icon-caidan"></i>
                            <span>审核管理</span>
                        </template>
                        <el-menu-item index="/review/video">
                            <i class="iconfont icon-shipinshenhe"></i>
                            <span>视频审核</span>
                        </el-menu-item>
                        <el-menu-item index="/review/article">
                            <i class="iconfont icon-wenzhang"></i>
                            <span>文章审核</span>
                        </el-menu-item>
                    </el-sub-menu>  
                </el-menu>
            </div>         
        </div>  
        <div class="main-content">
            <router-view></router-view>
        </div>  
    </div> 
</template>
  

<script>


</script>

<style>
.container{
    backface-visibility: hidden;
    display: flex;
    flex: 1 1 auto;
    max-width: 100%;
    min-height: 100dvh;
    position: relative;
}
.aside{
    width: 250px;
    background-color: #fff;
}

.aside-top{
    display: flex;
    font-size: x-large;
}

.aside-top span{
    margin:20px auto;
}

</style>