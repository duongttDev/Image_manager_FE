import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/About.vue'
import VideoView from '../views/Video.vue'
import Home from '../views/Home.vue'
import PhotoView from '../views/Photo-Detail.vue'
import VideoDetailView from '../views/Video-Detail.vue'
import ContactView from '../views/Contact.vue'
import Add from '../views/Add.vue'
import LoginView from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
    { path: '/about', component: AboutView },
    { path: '/video', component: VideoView },
    { path: '/login', component: LoginView },
    { path: '/home', component: Home, meta: { requiresAuth: true } },
    { path: '/', component: Home, meta: { requiresAuth: true } },
    { path: '/register', component: Register },
    { path: '/photo-detail', component: PhotoView },
    { path: '/video-detail', component: VideoDetailView },
    { path: '/add', component: Add },
    { path: '/contact', component: ContactView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Thêm hàm middleware để kiểm tra xác thực
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = sessionStorage.getItem('token');
        console.log(token)
        if (!token) {
            // Chưa đăng nhập, chuyển hướng đến trang login
            next('/login');
        } else {
            // Đã đăng nhập, cho phép truy cập trang yêu cầu xác thực
            next();
        }
    } else {
        // Trang không yêu cầu xác thực, cho phép truy cập
        next();
    }
});

export default router