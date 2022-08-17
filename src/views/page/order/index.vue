<template>
  <div class="a-container">
    <Form
      layout="inline"
      :model="formState"
      :label-col="{ span: 10 }"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed">

      <FormItem label="订单号" class="a-formItem">
        <Input v-model:value="formState.orderNo" placeholder="请输入订单号" ></Input>
      </FormItem>
      <FormItem label="手机号" class="a-formItem">
        <Input v-model:value="formState.tel" placeholder="请输入手机号" ></Input>
      </FormItem>
      <FormItem label="微信号" class="a-formItem">
        <Input v-model:value="formState.wxNo" placeholder="请输入微信号" ></Input>
      </FormItem>
      <FormItem label="订单状态" class="a-formItem">
        <Select v-model:value="formState.orderStatus">
          <select-option value="">全部</select-option>
          <select-option value="1">待支付</select-option>
          <select-option value="2">已取消</select-option>
          <select-option value="3">已付款</select-option>
        </Select>
      </FormItem>
      <FormItem label="昵称" class="a-formItem">
        <Input v-model:value="formState.nickName" placeholder="请输入昵称" ></Input>
      </FormItem>
      <FormItem label="商品类型" class="a-formItem">
        <Select v-model:value="formState.shopType">
          <select-option value="">全部</select-option>
          <select-option value="1">喜糖</select-option>
          <select-option value="2">曝光卡</select-option>
        </Select>
      </FormItem>
      <FormItem label="所在城市" class="a-formItem">
          <Cascader
            v-model:value="formState.city"
            change-on-select
            :options="cityOptions"
            showSearch
            placeholder='请选择省市区'
            :allowClear="true"
            :format="dateFormat"
            @change="onCityChange"
          />
      </FormItem>
      <FormItem label="下单时间" class="a-formItem"> 
        <RangePicker v-model:value="formState.orderTime" @change="onTimeChange">
          
        </RangePicker>
      </FormItem>
      <FormItem class="a-formItem">
        <Button type="primary">搜索</Button>
      </FormItem>
    </Form>


    <Table 
    class="a-table"
    :dataSource="dataSource" 
    :columns="columns"
    @change="handleTableChange"
    >
      <template #orderStatus="{ text }">
        {{ text }}
      </template>
      <template #shopType="{ text }">
        {{ text }}
      </template>
      <template #orerTime="{ record }">
        {{ record.startTime }} - {{ record.endTime }}
      </template>
      <template #action="{ record }">
        <Button type="link">查看</Button>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { 
  Form,
  FormItem,
  Select,
  SelectOption,
  Input,
  Button,
  Cascader,
  RangePicker,
  Table
  } from 'ant-design-vue'
import { userCity } from '/@/commonUse/userCity'
import { userOrderList } from './use/userOrderList'
import { columns } from './use/columns'
const { cityOptions } = userCity({ key: 'name' });
const { 
  formState,
  dataSource,
  dateFormat,
  handleFinish,
  handleFinishFailed,
  onCityChange,
  handleTableChange, 
  onTimeChange,
  } = userOrderList();

</script>

<style lang="less" scoped>
.a-container {
  padding: 20px;
  .a-formItem {
    margin-top: 20px;
  }
  .a-table {
    margin-top: 30px
  }
}
</style>