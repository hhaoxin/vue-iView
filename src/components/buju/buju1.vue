<template>
  <div id="app" class="layout">
    <Layout>
      <Sider
        breakpoint="md"
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <Menu
          active-name="0"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
          :open-names="['0']"
          accordion
        >
          <MenuItem name="0">
            <Icon type="logo-vimeo"></Icon>vue模板网站
          </MenuItem>
          <Submenu name="1">
            <template slot="title">
              <Icon type="md-grid" />表格
            </template>
            <MenuItem name="1-1" to="/table1">简单表格</MenuItem>
            <MenuItem name="1-2" to="/table2">斑马纹</MenuItem>
            <MenuItem name="1-3" to="/table3">可选择</MenuItem>
            <MenuItem name="1-4" to="/table4">排序 筛选</MenuItem>
            <MenuItem name="1-5" to="/table5">查看/删除/导出</MenuItem>
            <MenuItem name="1-6" to="/table6">修改</MenuItem>
            <MenuItem name="1-7" to="/table7">可展开</MenuItem>
            <MenuItem name="1-8" to="/select">选择器</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>iView
            </template>
            <MenuItem name="2-1" to="/ButtonIcon">按钮 图标</MenuItem>
            <MenuItem name="2-2" to="/shange">栅格系统</MenuItem>
            <MenuItem name="2-3" to="/buju">Layout布局</MenuItem>
            <MenuItem name="2-4" to="/shoufengqin">手风琴</MenuItem>
            <MenuItem name="2-5" to="/Menu">Menu导航栏</MenuItem>
            <MenuItem name="2-6" to="/Badge">Badge 徽标数</MenuItem>
            <MenuItem name="2-7" to="/form">表单</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>菜单3</Icon>
            </template>
            <MenuItem name="3-1">二级菜单</MenuItem>
            <MenuItem name="3-2">二级菜单</MenuItem>
          </Submenu>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>
        <div class="menutop">
          <div class="news">
            <MenuItem to="">
              <Icon type="md-notifications" />消息
            </MenuItem>
          </div>
        </div>
        <Content
          :style="{ margin: '20px', background: '#fff', minHeight: '220px' }"
        >
          <Breadcrumb :style="{ margin: '10px 10px' }" style="float: left;">
            <BreadcrumbItem to="/">
              <Icon type="md-home" />首页
            </BreadcrumbItem> 
          </Breadcrumb>
          <!-- 内容 -->
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-nav{
    width: 320px;
    margin: 0 auto;
    margin-right: 10px;
}
/* .layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
} */
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.menutop {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
}
.news {
  height: 50px;
  display: flex;
  align-items: center;
  right: 10px;
  position: absolute;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
