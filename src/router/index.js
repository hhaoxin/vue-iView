import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//iview
import ButtonIcon from '@/components/Button-icon'
import shange from '@/components/shange'
import buju from '@/components/buju'
import shoufengqin from '@/components/shoufengqin'
import Menu from '@/components/Menu'
import Badge from '@/components/Badge'
import form from '@/components/form'
//表格
import table1 from '@/components/table/table1'
import table2 from '@/components/table/table2'
import table3 from '@/components/table/table3'
import table4 from '@/components/table/table4'
import table5 from '@/components/table/table5'
import table6 from '@/components/table/table6'
import table7 from '@/components/table/table7'
//布局
import buju1 from '@/components/buju/buju1'
import buju2 from '@/components/buju/buju2'
//登录/注册
import login01 from '@/components/login/login01'
import login02 from '@/components/login/login02'
import login03 from '@/components/login/login03'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ButtonIcon',
      name: 'ButtonIcon',
      component: ButtonIcon
    },
    {
      path: '/shange',
      name: 'shange',
      component: shange
    },
    {
      path: '/buju',
      name: 'buju',
      component: buju
    },
    {
      path: '/shoufengqin',
      name: 'shoufengqin',
      component: shoufengqin
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/Badge',
      name: 'Badge',
      component: Badge
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    //表格
    {
      path: '/table1',
      name: 'table1',
      component: table1
    },
    {
      path: '/table2',
      name: 'table2',
      component: table2
    },
    {
      path: '/table3',
      name: 'table3',
      component: table3
    },
    {
      path: '/table4',
      name: 'table4',
      component: table4
    },
    {
      path: '/table5',
      name: 'table5',
      component: table5
    },
    {
      path: '/table6',
      name: 'table6',
      component: table6
    },
    {
      path: '/table7',
      name: 'table7',
      component: table7
    },
    //布局
    {
      path: '/buju1',
      name: 'buju1',
      component: buju1
    },
    {
      path: '/buju2',
      name: 'buju2',
      component: buju2
    },
    //登录注册
    {
      path: '/login01',
      name: 'login01',
      component: login01
    },
    {
      path: '/login02',
      name: 'login02',
      component: login02
    },
    {
      path: '/login03',
      name: 'login03',
      component: login03
    }
  ]
})
