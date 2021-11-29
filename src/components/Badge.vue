<template>
  <div>
    <Breadcrumb :style="{ margin: '10px 10px' }" style="float: left;">
      <BreadcrumbItem to="/">首页 </BreadcrumbItem>
      <BreadcrumbItem> iView </BreadcrumbItem>
      <BreadcrumbItem>Badge 徽标数 </BreadcrumbItem> </Breadcrumb
    ><br /><br />
    <Badge :count="3">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="100">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="1000" overflow-count="999">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <!-- 红点 -->
    <Badge dot>
      <a href="#" class="demo-badge"></a>
    </Badge>
    <br /><br />
    <Badge dot>
      <Icon type="ios-notifications-outline" size="26"></Icon>
    </Badge>
    <Badge dot> <a href="#">可以是一个链接</a> </Badge><br />
    <div style="text-align: left;">
      <Badge status="success" text="Success" />
      <br />
      <Badge status="error" text="Error" />
      <br />
      <Badge status="default" text="Default" />
      <br />
      <Badge status="processing" text="Processing" />
      <br />
      <Badge status="warning" text="Warning" />
    </div>
  </div>
</template>
<style scoped>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
</style>
