import { createRouter ,createWebHistory} from "vue-router";
import Indexview from "@/views/IndexView"

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Indexview ,
        },
    ]
})


export default router