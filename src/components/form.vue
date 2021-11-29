<template>
  <Tabs value="name1">
    <TabPane label="input输入框" name="name1">
      <h2>input输入框</h2>
      基本用法：<Input
        v-model="value"
        placeholder="Enter something..."
        style="width: 200px"
      />
      可清空:<Input
        v-model="value14"
        placeholder="Enter something..."
        clearable
        style="width: 200px"
      />
      长度限制：<Input
        v-model="value14"
        maxlength="10"
        show-word-limit
        placeholder="长度限制"
        style="width: 200px"
      /><br />
      <p>开启属性 password 可以切换显示隐藏密码。</p>
      密码框：<Input
        v-model="value18"
        type="password"
        password
        placeholder="Enter something..."
        style="width: 200px"
      />
      <div>
        图标前后缀：
        <Input
          prefix="ios-contact"
          placeholder="Enter name"
          style="width: auto"
        />
        <Input
          suffix="ios-search"
          placeholder="Enter text"
          style="width: auto"
        />
      </div>
    </TabPane>
    <TabPane label="switch开关" name="name2">
      <!-- 基本用法 -->
      <span>基本用法:</span>
      <i-Switch v-model="switch1" @on-change="change" /><br /><br />
      <!-- 自定义颜色 -->
      <span>自定义颜色:</span>
      <i-Switch true-color="#13ce66" false-color="#ff4949" /><br /><br />
      <!-- 尺寸 -->
      <span>尺寸:</span>
      <i-Switch size="large" />
      <i-Switch />
      <i-Switch size="small" /><br /><br />
      <!-- 阻止切换  -->
      <span>阻止切换:</span>
      <i-Switch
        :before-change="handleBeforeChange"
        true-color="#13ce66"
        false-color="#ff4949"
      />
      <br /><br />
      <!-- 文字 -->
      <span>文字:</span>
      <i-Switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
      </i-Switch>
      <!-- 图标 -->
      <span>图标：</span>
      <i-Switch>
        <Icon type="md-checkmark" slot="open"></Icon>
        <Icon type="md-close" slot="close"></Icon>
      </i-Switch>
      <br /><br />
      <i-Switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
      </i-Switch>
      <i-Switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
      </i-Switch>
    </TabPane>
    <TabPane label="select选择器" name="name3">
      <selectDemo></selectDemo>
    </TabPane>
    <TabPane label="日期选择器" name="name4">
      <date></date>
    </TabPane>
    <TabPane label="Upload上传" name="name5">
      <Upload></Upload>
    </TabPane>
  </Tabs>
</template>
<script>
import selectDemo from '@/components/table/selectDemo';
import date from '@/components/table/date'
import Upload from '@/components/Upload'
export default {
  components: {selectDemo, date, Upload},
  data() {
    return {
      value: "",
      value14: "Hello World",
      //switch
      switch1: false
    };
  },
  methods: {
    change(status) {
      this.$Message.info("开关状态：" + status);
    },
    handleBeforeChange() {
      return new Promise(resolve => {
        this.$Modal.confirm({
          title: "切换确认",
          content: "您确认要切换开关状态吗？",
          onOk: () => {
            resolve();
          }
        });
      });
    }
  }
};
</script>
<style></style>
