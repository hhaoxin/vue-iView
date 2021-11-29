<template>
  <div>
    <!-- 当前位置 -->
    <Breadcrumb :style="{ margin: '10px 10px' }" style="float: left;">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem>表格</BreadcrumbItem>
      <BreadcrumbItem>排序 筛选</BreadcrumbItem> </Breadcrumb
    ><br /><br />
    <!-- 表格 -->
    <Table border :columns="columns5" :data="data5"></Table><br /><br />
    <p>通过给 columns 数据的项，设置 sortable: true，即可对该列数据进行排序。</p><br>
    <p>通过给 columns 数据的项，设置 filters，可进行筛选，filters 接收一个数组,必须指定一个筛选函数 filterMethod 才可以进行筛选，filterMethod 传入两个参数 value 和 row</p>
    <p>如果指定 filterMultiple: false，则使用单选，默认为多选。</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns5: [
        {
          title: "Date(排序)",
          key: "date",
          sortable: true // 排序
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age(排序)",
          key: "age",
          sortable: true
        },
        {
          title: "Address(筛选)",
          key: "address",
          filters: [
            {
              label: "New York",
              value: "New York"
            },
            {
              label: "London",
              value: "London"
            },
            {
              label: "Sydney",
              value: "Sydney"
            }
          ],
          filterMethod(value, row) {
            return row.address.indexOf(value) > -1;
          }
        }
      ],
      data5: [
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
