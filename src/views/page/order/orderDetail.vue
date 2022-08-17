<template>
  <div class="a-container">
    <Card class="a-card">
      <div class="payState">
        <PageHeader class="a-header" title="订单基本信息" @back="() => null">
          <template #backIcon>
            <AreaChartOutlined :style="{ color: '#eb2f96', fontSize: '25px' }"/>
          </template>
        </PageHeader>
        <b>已支付</b>
      </div>

      <div class="payInfo">
        <div class="payInfo_com">
          <span>昵称：</span>
          <span>咕咕鸡</span>
        </div>
        <div class="payInfo_com">
          <span>昵称：</span>
          <span>咕咕鸡</span>
        </div>
        <div class="payInfo_com">
          <span>昵称：</span>
          <span>咕咕鸡</span>
        </div>
        <div class="payInfo_com">
          <span>昵称：</span>
          <span>咕咕鸡</span>
        </div>
      </div>
    </Card>

    <Card class="a-card">
      <div class="payState">
        <PageHeader class="a-header"  title="商品信息" @back="() => null">
          <template #backIcon>
            <AreaChartOutlined :style="{ color: '#eb2f96', fontSize: '25px' }"/>
          </template>
        </PageHeader>
      </div>
      <div class="payInfo" style="display: block">
        <div class="payInfo_com">
          <span>商品类型：</span>
          <span>曝光卡</span>
        </div>
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { 
  Col,
  Card,
  PageHeader,
  Row
  } from 'ant-design-vue'
import { AreaChartOutlined } from '@ant-design/icons-vue'

</script>

<style lang="less" scoped>
.a-container {
  padding: 20px;
  font-size: 14px;
  .a-card {
    box-shadow: 0  0 10px #ccc;
    border-radius: 12px;
    margin-bottom: 30px;
  }
  .a-header {
    padding-left: 0;
  }
  .payState {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 600;
  }
  .payInfo {
    display: flex;
    flex-wrap: wrap;
    &_com {
      margin-bottom: 10px;
      margin-right: 60px;
    }
  }
}
</style>