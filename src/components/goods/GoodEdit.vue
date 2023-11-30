<template>
  <div id="wangeditor">
    <div ref="editorElem" style="text-align: left"></div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: `Editor`,
  data() {
    return {
      editor: null,
      editorContent: "",
    };
  },
  mounted() {
    this.editor = new E(this.$refs.editorElem);
    this.editor.config.onchange = this.contentChange;
    this.editor.config.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontsize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underLine", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo", // 重复
    ];
    this.editor.create();
  },
  methods: {
    contentChange(html) {
      this.editorContent = html;
      this.$emit("contentChange", this.editorContent);
    },
  },
};
</script>

<style scoped></style>
