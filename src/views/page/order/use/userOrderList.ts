import { reactive, ref } from 'vue';
import provinces from "china-division/dist/provinces";
import cities from "china-division/dist/cities";
import areas from "china-division/dist/areas";
import { formatToDateTime } from '/@/utils/dateUtil';
import { OrderParamsModel } from '/@/api/order/model/orderListModel';
export const userOrderList = () => {
  const dateFormat = ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss'];
  const formState: OrderParamsModel = reactive({
    orderNo: '',
    tel: '',
    wxNo: '',
    orderStatus: '',
    nickName: '',
    shopType: '',
    city: '',
    orderTime: '',
    pageSize: 1,
    pageNum: 10,
  });

  const dataSource: OrderParamsModel[] = ref([
    {
      key: '1',
      nickName: '胡彦斌',
      orderNo: 32,
      orderStatus: '支付中',
      shopType: '喜糖',
      price: 100,
      city: '山东省',
      tel: 1311600755,
      startTime: '2022/5/1',
      endTime: '2022/10/1',
    },
    {
      key: '2',
      nickName: '胡彦斌12222',
      orderNo: 32,
      orderStatus: '支付中222',
      shopType: '喜糖222',
      price: 100,
      city: '山东省222',
      tel: 1311600755,
      startTime: '2022/5/1',
      endTime: '2022/10/1',
    },
  ]);

  const handleFinish = () => {};

  const handleFinishFailed = () => {};

  const onCityChange = (val) => {
    console.error('val', val);
  };

  const handleTableChange = (page) => {};

  const onTimeChange = (time) => {
    formState.startTime = formatToDateTime(time[0]);
    formState.endTime = formatToDateTime(time[1]);
  }

  return {
    formState,
    dataSource,
    dateFormat,
    handleFinish,
    handleFinishFailed,
    onCityChange,
    handleTableChange,
    onTimeChange,
  };
}