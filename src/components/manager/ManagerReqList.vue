<template>
  <div class="content-container" direction="vertical">
    <div>
      <el-container class="content-row">
        <div class="input-tip">用户状态：</div>
        <div class="input-field">
          <el-input v-model="queryParams.userState"></el-input>
        </div>
        <div class="input-tip">用户信息：</div>
        <div class="input-field">
          <el-input v-model="queryParams.userInfo"></el-input>
        </div>
      </el-container>

      <el-container class="content-row">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="primary" @click="clear">清空搜索条件</el-button>
      </el-container>
    </div>
    <div>
      <el-table :data="reqList" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="用户信息" width="200" prop="userInfo">
        </el-table-column>
        <el-table-column label="状态" width="100" prop="state">
          <template #default="scope"
            ><el-tag :type="scope.row.state ? 'success' : ''">
              {{ scope.row.state ? "通过" : "待审核" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" width="200" prop="updateTime">
        </el-table-column>
        <el-table-column label="添加时间" width="200" prop="addTime">
        </el-table-column>
        <el-table-column label="操作" width="100" prop="state">
          <template #default="scope">
            <el-button
              :type="scope.row.state ? 'danger' : 'success'"
              size="mini"
              @click="handleClick(scope.$index)"
            >
              {{ scope.row.state ? "下线" : "通过" }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Mock from "../../mock/Mock";

export default {
  data() {
    return {
      queryParams: {
        userState: "",
        userInfo: "",
      },
      reqList: [],
    };
  },
  mounted() {
    this.reqList = Mock.getManagerReqList();
  },
  methods: {
    search() {
      this.reqList = Mock.getManagerReqList();
    },
    clear() {
      this.reqList = [];
    },
    handleClick(index) {
      let msg =
        "确认执行" + (this.reqList[index].state ? "下线" : "通过") + "操作吗？";
      this.$confirm(msg, "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.reqList[index].state = !this.reqList[index].state;
          this.$message({
            message: "操作成功！",
          });
        })
        .catch(() => {
          this.$message({ message: "操作取消！" });
        });
    },
  },
};
</script>

<style scoped></style>
