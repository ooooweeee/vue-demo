import { createRouter, createWebHistory } from 'vue-router'
import Table from './views/Table.vue'
import Form from './views/Form.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'table',
      component: Table
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    }
  ]
})
