import Vue from 'vue'
import Router from 'vue-router'
import Catelog from '@/views/Catalog'
import JavaScript from '@/views/JavaScript/JavaScript'
import Html from '@/views/HTML/Html'
import Css from '@/views/CSS/Css'
import Git from '@/views/Git/Git'
import Mobile from '@/views/Mobile/Mobile'
import Vues from '@/views/Vue/VUE'
import MagnifyingGlass from '@/components/MagnifyingGlass/MagnifyingGlass'
import Date from '@/components/Date/Date'
import Drag from '@/components/Drag/Drag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catelog',
      component: Catelog,
      children: [{
        path: '/javaScript',
        name: 'javaScript',
        component: JavaScript,
        children: [
          {
            path: 'MagnifyingGlass',
            name: 'MagnifyingGlass',
            component: MagnifyingGlass
          },
          {
            path: 'Date',
            name: 'Date',
            component: Date
          },
          {
            path: 'Drag',
            name: 'Drag',
            component: Drag
          }
        ]
      },
      {
        path: 'Html',
        name: 'HTML',
        component: Html
      },
      {
        path: 'CSS',
        name: 'CSS',
        component: Css
      },
      {
        path: 'Git',
        name: 'Git',
        component: Git
      },
      {
        path: 'Mobile',
        name: 'Mobile',
        component: Mobile
      },
      {
        path: 'Vues',
        name: 'Vues',
        component: Vues
      }
      ]
    }
  ]
})
