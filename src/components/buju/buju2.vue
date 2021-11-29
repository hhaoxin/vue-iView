<template>
  <div class="layout">
    <Alert show-icon banner closable type="warning"><Icon type="ios-volume-up" />：目前还在开发和完善当中，敬请期待....</Alert>
    <Layout>
      <!-- 顶部 -->
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"><img src="../../assets/logo.png"></div>
          <div class="layout-nav">
            <MenuItem name="1" to="/">
              <Icon type="md-home" /></Icon>首页 
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-paper"></Icon>关于
            </MenuItem>
            <!-- <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>Item 3
            </MenuItem> -->
            <MenuItem name="4">
              <Icon type="md-notifications" />消息
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <!-- 中间布局 -->
      <Layout :style="{padding: '0 50px'}">
        <Content :style="{minHeight: '80vh', background: '#fff',padding: '10px 0'}">
          <Layout>
            <!-- 左侧导航栏 -->
            <Sider breakpoint="md" collapsible :collapsed-width="78" hide-trigger :style="{background: '#fff'}">
              <!-- accordion设置手风琴效果 -->
              <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" accordion>
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="md-grid" /></Icon>表格
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
                    <Icon type="ios-analytics"></Icon>布局</Icon>
                  </template>
                  <MenuItem name="3-1">响应式布局</MenuItem>
                  <MenuItem name="3-2">二级菜单</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <!-- 内容 -->
            <Content :style="{ minHeight: '280px', background: '#fff'}">
              <router-view/>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <!-- 底部 -->
      <Footer class="layout-footer-center">2020-11 &copy; 黄浩新 | 版权所有 1771824493@qq.com</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 50px;
    height: 30px;
    background: #2dda0b;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 0px;
}
img {
  width: 50px;
  height: auto;
}
.layout-nav{
    width: 320px;
    margin: 0 auto;
    margin-right: 10px;
}
.layout-footer-center{
    text-align: center;
}
</style>
