
export interface OrderParamsModel {
  key?: string,
  orderNo: string;
  tel: string | number;
  wxNo: string | number;
  orderStatus: number;
  nickName: string;
  shopType: number;
  city: string;
  startTime: string;
  endTime: string;
  pageSize?: number;
  pageNum?: number;
}