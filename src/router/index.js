import Vue from 'vue'
import VueRouter from 'vue-router'
import indexRouter from "./../router/index/index"
import majorRouter from "./../router/major"
import teacherRouter from "./../router/teacher"
import guideRouter from "./../router/guide"
import newsRouter from "./../router/news"
import articleRouter from "./../router/article"
import achievementRouter from "./../router/achievement"
import messageRouter from "./../router/message"
import aboutRouter from "./../router/about"
import index from "./../views/index"
import errorRouter from "./../router/error"
import showteacherRouter from "./../router/showteacher"

Vue.use(VueRouter);

// 路由
const routes = [
    indexRouter,
    majorRouter,
    teacherRouter,
    guideRouter,
    newsRouter,
    articleRouter,
    achievementRouter,
    messageRouter,
    aboutRouter,
    errorRouter,
    showteacherRouter,
    // 首页路由
    {
        path:"/",
        component:index,
        meta:{
            keepAlive:true
        }
    }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            window.console.log(savedPosition);
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});


export default router
