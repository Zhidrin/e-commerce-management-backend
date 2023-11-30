<template>
  <div class="content-container" direction="vertical">
    <div>
      <el-container class="content-row">
        <div class="input-tip">商品名称：</div>
        <div class="input-field">
          <el-input v-model="queryParams.goodName"></el-input>
        </div>
        <div class="input-tip">用户名称：</div>
        <div class="input-field">
          <el-input v-model="queryParams.username"></el-input>
        </div>
        <div class="input-tip">手机号码：</div>
        <div class="input-field">
          <el-input v-model="queryParams.phone"></el-input>
        </div>
      </el-container>
      <el-container class="content-row">
        <div class="input-tip">订单类型：</div>
        <div class="input-field">
          <el-input v-model="queryParams.tradeState"></el-input>
        </div>
        <div class="input-tip">平台单号：</div>
        <div>
          <el-input v-model="queryParams.tradeID"></el-input>
        </div>
        <div class="input-tip">支付时间：</div>
        <div class="input-field">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-model="queryParams.payTime"
          >
          </el-date-picker>
        </div>
      </el-container>
      <el-container class="content-row">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="primary" @click="clear">清空搜索条件</el-button>
        <el-button type="primary" @click="exportData">导出</el-button>
      </el-container>
    </div>
    <div>
      <el-table :data="tradeInfoList" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="名称" width="300" prop="name">
        </el-table-column>
        <el-table-column label="单号" width="250" prop="code">
        </el-table-column>
        <el-table-column label="用户" width="100" prop="user">
        </el-table-column>
        <el-table-column label="支付方式" width="100" prop="payment">
        </el-table-column>
        <el-table-column label="时间" width="200" prop="payTime">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Mock from "../../mock/Mock";
import Tools from "../../tools/Tools";

export default {
  name: ``,
  data() {
    return {
      queryParams: {
        goodName: "",
        username: "",
        phone: "",
        tradeState: "",
        tradeID: "",
        payTime: "",
      },
      tradeInfoList: [],
    };
  },
  mounted() {
    this.tradeInfoList = Mock.getTradeInfo();
  },
  methods: {
    search() {
      this.tradeInfoList = Mock.getTradeInfo();
    },
    clear() {
      this.tradeInfoList = Mock.getTradeInfo();
    },
    exportData() {
      Tools.exportJson("交易明细.json", JSON.stringify(this.tradeInfoList));
    },
  },
};
</script>

<style scoped></style>
