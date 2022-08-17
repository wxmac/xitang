import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:home', // icon 地址 https://icones.netlify.app/collection/all?s=home
    title: '首页',
    orderNo: 0, // orderNo越小，权重越高，在上面展示
  },
  children: [
    {
      path: 'index',
      name: 'HomeIndex',
      component: () => import('/@/views/page/home/index.vue'),
      meta: {
        title: '首页',
        icon: 'ion:home',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
