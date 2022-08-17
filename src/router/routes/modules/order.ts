import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const order: AppRouteModule = {
  path: '/order',
  name: 'Order',
  component: LAYOUT,
  redirect: '/order/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'icon-park-solid:transaction-order', // icon 地址 https://icones.netlify.app/collection/all?s=home
    title: '订单',
    orderNo: 10, // orderNo越小，权重越高，在上面展示
  },
  children: [
    {
      path: 'index',
      name: 'OrderIndex',
      component: () => import('/@/views/page/order/index.vue'),
      meta: {
        title: '订单列表',
        icon: 'icon-park-solid:transaction-order',
        hideMenu: true,
      },
    },
    {
      path: 'detail/:id',
      name: 'OrderDetail',
      component: () => import('/@/views/page/order/orderDetail.vue'),
      meta: {
        title: '订单详情',
        icon: 'icon-park-solid:transaction-order',
        hideMenu: true,
        dynamicLevel: 3,
        realPath: '/order/detail',
      },
    },
  ],
};

export default order;
