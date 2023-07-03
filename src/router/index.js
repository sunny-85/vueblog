import { createRouter, createWebHistory } from 'vue-router'
import List from '../components/blogText.vue'
import Home from '../components/blogHome.vue'
import Detail from '../components/blogDetail.vue'
import None from '../components/pageNone.vue'

const routes = [
    {
      path: "/list", // [경로]
      component: List // [로드 파일]
    },
    {
      path: "/", // [경로]
      component: Home // [로드 파일]
    },
    {
      path: "/detail/:id", // url 파라미터
      component: Detail // [로드 파일]
    },
    {
      path: "/:anything(.*)", // url 파라미터
      component: None // [로드 파일]
    }
  ];

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router;