<template>
  <div>
    <!-- 当前位置 -->
    <Breadcrumb :style="{ margin: '10px 10px' }" style="float: left;">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem>表格</BreadcrumbItem>
      <BreadcrumbItem>查看 删除</BreadcrumbItem> </Breadcrumb
    ><br /><br />
    <!-- 表格 -->
    <Table border stripe :columns="columns12" :data="data6" border ref="table">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <!-- 操作 -->
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          >View</Button
        >
        <Button type="error" size="small" @click="remove(index)">Delete</Button>
      </template> </Table
    ><br />
    <Button type="primary" size="large" @click="exportData()">
        <Icon type="ios-download-outline"></Icon> 导出数据
    </Button>
    <br /><br />
    <p>
      从 3.2.0 版本开始支持 slot-scope 写法。在 columns 的某列声明 slot
      后，就可以在 Table 的 slot 中使用 slot-scope。slot-scope 的参数有 3
      个：当前行数据 row，当前列数据 column，当前行序号 index。
    </p>
    <br />
    <p>
      给某一列设置属性 resizable 为 true可以拖拽调整该列的宽度，需开启 border
      属性，且该列设置了 width 属性。
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns12: [
        {
          title: "姓名",
          slot: "name",
          minwidth: 110
        },
        {
          title: "Age",
          key: "age",
          minwidth: 90
        },
        {
          title: "Address",
          key: "address",
          minwidth: 180
          // resizable: true
        },
        {
          title: "操作",
          slot: "action",
          minwidth: 150,
          align: "center"
        }
      ],
      data6: [
        {
          name: "黄浩新",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "导出数据",
          age: 24,
          address: "给表设置ref=“table”，调用exportData()方法 "
        },
        {
          name: "拖拽调整列宽",
          age: 30,
          address:
            "给某一列设置属性 resizable 为 true开启 border 属性，且该列设置了 width 属性。"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `姓名：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
      this.$Message.info("已删除");
    },
    exportData() {
      this.$refs.table.exportCsv({
        filename: "The original data"
      });
    }
  }
};
</script>
