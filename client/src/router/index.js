import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardList from '../views/BoardList.vue'
import BoardInfo from '../views/BoardInfo.vue'
import NewBoardUpdate from '../views/NewBoardUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/BoardList',
    name: 'BoardList',
    component: BoardList
  },
  {
    path: '/BoardInfo',
    name: 'BoardInfo',
    component: BoardInfo
  },
  {
    path: '/NewBoardUpdate',
    name: 'NewBoardUpdate',
    component: NewBoardUpdate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
