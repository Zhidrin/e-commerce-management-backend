<template>
  <div class="content-container" direction="vertical">
    <el-tabs v-model="activeTab" type="car" @tab-click="handleClick">
      <el-tab-pane label="基础设置" name="1">
        <base-setting></base-setting>
      </el-tab-pane>
      <el-tab-pane label="价格库存" name="2">
        <price-setting></price-setting>
      </el-tab-pane>
      <el-tab-pane label="商品详情" name="3">
        <detail-setting></detail-setting>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GoodBaseSetting from "./GoodBaseSetting.vue";
import GoodDetailSettingVue from "./GoodDetailSetting.vue";
import GoodPriceSetting from "./GoodPriceSetting.vue";

export default {
  data() {
    return {
      activeTab: "1",
    };
  },
  components: {
    "base-setting": GoodBaseSetting,
    "price-setting": GoodPriceSetting,
    "detail-setting": GoodDetailSettingVue,
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style scoped></style>
