<template>
  <div>
    <Breadcrumb :style="{margin: '10px 10px'}" style="float: left;">
        <BreadcrumbItem to="/">首页
        </BreadcrumbItem>
        <BreadcrumbItem> iView
        </BreadcrumbItem>
        <BreadcrumbItem>按钮 图标
        </BreadcrumbItem>
    </Breadcrumb><br><br>
    <!-- 按钮 -->
    <Button>Default</Button>
    <!-- shape="circle"圆角 -->
    <Button
      :size="buttonSize"
      icon="ios-search"
      shape="circle"
    ></Button>
    <Button type="primary" icon="ios-search">Primary</Button><br><br>
    <Button type="success">Success</Button>
    <Button type="success" ghost>Success</Button><br><br>
    <Button
      :size="buttonSize"
      icon="ios-download-outline"
      type="primary"
      shape="circle"
    ></Button>
    <Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button><br><br>
    <Icon type="md-arrow-round-forward" />
    <a href="http://v1.iviewui.com/components/icon">点击查看更多图标</a>
  </div>
</template>
<script>
export default {
  name: 'ButtonIcon',
  data() {
    return {};
  }
};
</script>
