<template>
    <div>
        <Breadcrumb :style="{margin: '10px 10px'}" style="float: left;">
            <BreadcrumbItem to="/">首页
            </BreadcrumbItem>
            <BreadcrumbItem> iView
            </BreadcrumbItem>
            <BreadcrumbItem>Menu导航栏
        </BreadcrumbItem>
        </Breadcrumb><br><br>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            首页
        </MenuItem>
        <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />
              用户管理 
            </template>
            <MenuGroup>
                <MenuItem name="2-1">新增和启动</MenuItem>
                <MenuItem name="2-2">活跃分析</MenuItem>
                <MenuItem name="2-3">时段分析</MenuItem>
            </MenuGroup>
        </Submenu>
        <!-- 法一 -->
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <!-- 法二 -->
        <Submenu name="4">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>iView
                  </template>
                  <MenuItem name="4-1" to="/ButtonIcon">按钮 图标</MenuItem>
                  <MenuItem name="4-2" to="/shange">栅格系统</MenuItem>
                  <MenuItem name="4-3" to="/buju">Layout布局</MenuItem>
                  <MenuItem name="4-4" to="/shoufengqin">手风琴</MenuItem>
        </Submenu>
    </Menu>
    <br>
    <p>更换主题</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
    
    <Row>
        <Col span="8">
            <!-- accordion开启手风琴 -->
            <Menu :theme="theme1" :open-names="['1']" accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
    </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light' // 默认主题
            }
        }
    }
</script>
