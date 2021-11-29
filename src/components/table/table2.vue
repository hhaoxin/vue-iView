<template>
  <div>
    <!-- 当前位置 -->
    <Breadcrumb :style="{ margin: '10px 10px' }" style="float: left;">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem>表格</BreadcrumbItem>
      <BreadcrumbItem>斑马纹</BreadcrumbItem> 
    </Breadcrumb><br /><br />
    <!-- 表格 -->
    <Table stripe :columns="columns1" :data="data1"></Table><br><br>
    <p>设置表的属性 stripe ，表格会间隔显示不同颜色，用于区分不同行数据。</p>
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
        }
      ]
    };
  }
};
</script>
