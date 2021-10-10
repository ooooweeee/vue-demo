import { createRouter, createWebHistory } from 'vue-router'
import FormTable from './views/FormTable.vue'
import Table from './views/Table.vue'
import Form from './views/Form.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'form-table',
      component: FormTable
    },
    {
      path: '/table',
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
