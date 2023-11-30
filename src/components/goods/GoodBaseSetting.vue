<template>
  <div>
    <el-container class="content-row">
      <div class="input-tip">商品名称：</div>
      <div class="input-field">
        <el-input v-model="queryParams.name"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">商品简介：</div>
      <div class="input-field">
        <el-input
          v-model="queryParams.desc"
          type="textarea"
          :rows="3"
        ></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">商品封面：</div>
      <el-upload :auto-upload="false" :limit="1" list-type="picture-card">
        <i class="el-icon-plus"></i>
      </el-upload>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">列表图片：</div>
      <el-upload :auto-upload="false" :limit="5" list-type="picture-card">
        <i class="el-icon-plus"></i>
      </el-upload>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">上架日期：</div>
      <div class="input-field">
        <el-date-picker
          v-model="queryParams.timeRange"
          type="daterange"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">商品分类：</div>
      <div class="input-field">
        <el-select v-model="queryParams.category">
          <el-option key="0" label="男装" :value="0"> </el-option>
          <el-option key="1" label="男鞋" :value="1"> </el-option>
          <el-option key="2" label="围巾" :value="2"> </el-option>
        </el-select>
      </div>
      <div class="margin-top: 6px">
        <el-button type="primary" size="mini" @click="addCategory"
          >添加分类</el-button
        >
      </div>
    </el-container>
    <el-container class="content-row">
      <el-button type="success" plain @click="submit">提交</el-button>
      <div style="margin-left: 40px"></div>
      <el-button type="warning" plain @click="cancel">取消</el-button>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryParams: {
        name: "",
        desc: "",
        timeRange: "",
        category: 0,
      },
    };
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    submit() {
      this.$message({
        type: "success",
        message: "设置商品基本属性：" + JSON.stringify(this.queryParams),
      });
    },
    addCategory() {
      this.$router.push({ name: "GoodCategory" });
    },
  },
};
</script>

<style scoped></style>
