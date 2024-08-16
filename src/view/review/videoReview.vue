<template>
    <div class="container">
        <div class="video">
            <div class="navbar">
                <div class="bar-left">
                    <div class="bar-item" :class="videoStatus === 0 ? 'active' : ''" @click="changeStatus(0)">待审核</div>
                    <div class="bar-item" :class="videoStatus === 1 ? 'active' : ''" @click="changeStatus(1)">已过审</div>
                    <div class="bar-item" :class="videoStatus === 2 ? 'active' : ''" @click="changeStatus(2)">未过审</div>
                </div>
                <div class="bar-right">
                    <div class="refresh">刷新</div>
                    <div class="total">总数:{{ total }}</div>
                </div>
            </div>
            <div class="video-table">
                <table>
                    <tr>
                        <thead>
                            <tr>
                                <th style="min-width: 90px;">VID</th>
                                <th style="min-width: 176px;">封面</th>
                                <th style="min-width: 200px;">标题</th>
                                <th style="min-width: 120px;">投稿用户</th>
                                <th style="min-width: 180px;">分区</th>
                                <th style="min-width: 150px;">投稿时间</th>
                                <th style="min-width: 100px;">状态</th>
                                <th style="min-width: 80px;"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in video" :key="index" >
                                <td style="min-width: 90px;"> {{ item.vid }}</td>
                                <td style="width: 176px">
                                    <img :src="item.cover_url" class="cover" alt="">
                                </td>
                            </tr>
                        </tbody>
                    </tr>
                    <div class="video-table-page">
                        <el-pagination 
                        background
                                layout="prev, pager, next"
                                :total="total"
                                :page-size="10"
                                :pager-count="pagerCount"
                                :current-page="page"
                                @current-change="pageChange"
                        />
                    </div>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
import request from '@/utils/request'
    export default{
        data(){
            return{
                videoStatus:0,
                total:0,
                page:1,
                pagerCount: 7,
                video:[],
            }
        },
        methods:{
            async getVideos(){
                const res = await request.get('/admin/getpage',{
                    params:{
                        page:this.page,
                        status:this.videoStatus
                    }
                })
                this.total = res.total
                this.video = res.data
                console.log()
            },
            async reloadVideos() {
                await this.getVideos();
            },
            async pageChange(page) {
                this.page = page;
                await this.reloadVideos();
            },
            changeStatus(status){
                this.videoStatus = status;
                this.getvideo()
                console.log(this.videoStatus)
            }
        },
        async created() {
            await this.getVideos();
        },
    }

</script>

<style scoped>
    .container{
        height: 100% ;
        width: 100%;
        /* margin: 50px; */
    }

    .video{
        width: 100%;
        margin: 50px;
        background-color: #fff;
    }

    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar .bar-left{
        display: flex;
    }

    .navbar .bar-right{
        display: flex;
        margin-right: 30px;
    }

    .refresh{
        margin-right: 30px;
        color: #00a1d6;
        cursor: pointer;
    }

    .bar-item{
        margin-left: 60px;
        margin-top: 10px;
        padding:20px 0;
        font-size: larger;
        cursor: pointer;
    }

    .bar-item.active{
        color: #00a1d6;
        border-bottom: 1px solid #00a1d6;
    }

    .video-table{
        margin-top: 20px;
        width: 80%;    }

    .video-table table{
        padding: 0 4px 8px;
    }

    .cover {
        height: 81px;
        width: 144px;
        object-fit: cover;
        box-shadow: 2px 2px 8px #0000001f;
    }

    .video-table-page{
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>