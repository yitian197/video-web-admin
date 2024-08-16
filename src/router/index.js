import { createRouter ,createWebHistory} from "vue-router";
import Indexview from "@/view/IndexView"
import ranking from '@/view/content/rankingManage.vue'
import tag from '@/view/content/tagManage.vue'
import video from '@/view/review/videoReview.vue'
import article from '@/view/review/articleReview.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Indexview ,
            children:[
                // {path:'',redirect:''},
                {
                    path:'/content',
                    redirect:'/content/ranking',
                    children:[
                        {path:'/content/ranking',component:ranking},
                        {path:'/content/tag',component:tag}
                    ]
                },
                {
                    path:'/review',
                    redirect:'/review/video',
                    children:[
                        {path:'/review/video',component:video},
                        {path:'/review/article',component:article}
                    ]
                }
            ]
        },
    ]
})


export default router