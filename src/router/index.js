
import{createRouter,createWebHistory} from 'vue-router'
import AboutView from '../views/About.vue'
import VideoView from '../views/Video.vue'
import Home from '../views/Home.vue'
import PhotoView from   '../views/Photo-Detail.vue'
import VideoDetailView from '../views/Video-Detail.vue'
import ContactView from '../views/Contact.vue'
import Add from '../views/Add.vue'

const routes = [
    { path: '/about', component: AboutView},
    { path: '/video', component: VideoView},
    { path: '/', component: Home},
    { path: '/photo-detail', component: PhotoView},
    { path: '/video-detail', component: VideoDetailView},
    { path: '/add', component: Add},
    { path: '/contact', component: ContactView}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
