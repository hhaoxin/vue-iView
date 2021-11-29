<template>
  <div>
    <!-- 当前位置 -->
    <Breadcrumb :style="{ margin: '10px 10px' }" style="float: left;">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem>表格</BreadcrumbItem>
      <BreadcrumbItem>简单表格</BreadcrumbItem> 
    </Breadcrumb><br /><br />
    <!-- 表格1 -->
    <h3>table1</h3>
    <Table :columns="columns1" :data="data1"></Table>
    <br><br>
    <!-- 表格2 -->
    <h3>table2</h3>
    <Table height="200" :columns="columns1" :data="data1"></Table><br>
    <p>通过设置属性 height 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。3.4.0 版本后也可以设置 max-height 属性。</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "黄浩新",
          age: 21,
          address: "广东.广州",
          date: "2020-11-11"
        }
      ]
    };
  }
};
</script>
