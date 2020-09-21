// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
          meta: { src: 'https://nietylkodj.pl/topPage/1home_optimized_optimized.jpg' },
        },
        {
          path: 'oferta',
          name: 'Oferta',
          component: () => import('@/views/offer/Index.vue'),
          meta: { src: 'https://nietylkodj.pl/topPage/2oferta_optimized.jpg' },
        },
        {
          path: 'galeria',
          name: 'Galeria',
          component: () => import('@/views/gallery/Index.vue'),
          meta: { src: 'https://nietylkodj.pl/topPage/3galeria_optimized.jpg' },
          children: [
           {
             path: 'indywidualna',
            component: () => import('../components/GalleryIndividual.vue'),
            meta: { src: 'https://nietylkodj.pl/topPage/3galeria_optimized.jpg' },
           },
          ],
        },
        {
          path: 'technika-estradowa',
          name: 'Technika Estradowa',
          component: () => import('@/views/stagetechnique/Index.vue'),
          meta: { src: 'https://nietylkodj.pl/topPage/4technika_optimized.jpg' },
        },
        {
          path: 'zaufali-nam',
          name: 'Zaufali nam',
          component: () => import('@/views/trustedus/Index.vue'),
          meta: { src: 'https://nietylkodj.pl/topPage/5zaufalinam_optimized.jpg' },
        },
        {
          path: 'referencje',
          name: 'Referencje',
          component: () => import('@/views/reference/Index.vue'),
          meta: { src: 'https://nietylkodj.pl/topPage/6referencje_optimized.jpg' },
        },
        {
          path: 'opinie',
          name: 'Opinie',
          component: () => import('@/views/reviews/Index.vue'),
          meta: { src: 'https://nietylkodj.pl/topPage/7opinie_optimized.jpg' },
        },
        {
          path: 'o-nas',
          name: 'O nas',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: 'https://nietylkodj.pl/topPage/8nas_optimized.jpg' },
        },
        {
          path: 'kontakt',
          name: 'Kontakt',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: 'https://nietylkodj.pl/topPage/9kontakt_optimized.jpg' },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
