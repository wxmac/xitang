export const columns = [
  {
    title: '序号',
    key: 'index',
    slots: { customRender: 'index' },
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    key: 'nickName',
  },
  {
    title: '订单号',
    dataIndex: 'orderNo',
    key: 'orderNo',
  },
  {
    title: '订单状态',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    slots: { customRender: 'orderStatus' },
  },
  {
    title: '商品类型',
    dataIndex: 'shopType',
    key: 'shopType',
    slots: { customRender: 'shopType' },
  },
  {
    title: '消费金额',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '所在城市',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: '手机号',
    dataIndex: 'tel',
    key: 'tel',
  },
  {
    title: '下单时间',
    dataIndex: 'orerTime',
    key: 'orerTime',
    slots: { customRender: 'orerTime' },
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];