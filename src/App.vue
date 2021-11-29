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
              <Icon type="ios-analytics"></Icon>布局
            </template>
            <MenuItem name="3-1" to="/buju1">响应式布局</MenuItem>
            <MenuItem name="3-2" to="/buju2">布局2</MenuItem>
          </Submenu>
          <Submenu name="4">
              <template slot="title">
                <Icon type="ios-contact" />login
              </template>
              <MenuItem name="4-1" to="/login01">登录-样式1</MenuItem>
              <MenuItem name="4-2" to="/login02">登录-样式2</MenuItem>
              <MenuItem name="4-3" to="/login03">登录-样式3</MenuItem>
          </Submenu>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout style="min-height:100vh">
        <div class="menutop">
          <div class="news">
            <MenuItem name="" to="">
              <Icon type="md-notifications" />消息
            </MenuItem>
          </div>
        </div>
        <Content :style="{ margin: '20px', background: '#fff', minHeight: '420px' }">
          <!-- 内容 -->
          <router-view/>
        </Content>
        <!-- 底部 -->
        <Footer class="layout-footer-center">2020-11 &copy; 黄浩新 | 版权所有 1771824493@qq.com</Footer>
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
#app{
  font-family:'Avenir',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-align:center;
  color:#2c3e50;
  box-sizing:border-box;
}
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
  margin-right: 10px;
}
</style>
