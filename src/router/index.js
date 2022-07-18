import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/UserHomepage.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/UserProductList.vue'),
    children: [
      {
        path: 'detail/:product',
        name: 'detail/:product',
        component: () => import('../components/ProductDetails.vue')
      }
    ]
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('../views/WishlistPage.vue')
  },
  {
    path: '/receipt',
    name: 'receipt',
    component: () => import('../views/ReceiptPage.vue')
  },
  {
    path: '/thankyou',
    name: 'thankyou',
    component: () => import('../views/ThankYou.vue')
  },
  {
    path: '/confirmation/:orderId',
    name: 'confirmation',
    component: () => import('../views/ConfirmationPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardPage.vue'),
    children: [
      {
        path: 'manageproducts',
        name: 'manageproducts',
        component: () => import('../components/ManageProducts.vue')
      },
      {
        path: 'manageorders',
        name: 'manegeorders',
        component: () => import('../components/ManageOrders.vue')
      },
      {
        path: 'managecoupons',
        name: 'managecoupons',
        component: () => import('../components/ManageCoupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../components/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savePosition) {
    return {
      top: 0
    }
  }
})

export default router
