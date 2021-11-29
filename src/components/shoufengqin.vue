<template>
  <div>
    <Breadcrumb :style="{margin: '10px 10px'}" style="float: left;">
      <BreadcrumbItem to="/">首页
      </BreadcrumbItem>
      <BreadcrumbItem> iView
      </BreadcrumbItem>
      <BreadcrumbItem>手风琴
      </BreadcrumbItem>
    </Breadcrumb><br><br>
    <h3>手风琴折叠面板</h3>
    <p>通过设置属性accordion开启手风琴模式，每次只能打开一个面板。</p>
    <Collapse v-model="value2" accordion>
      <Panel name="p1" class="pange">
        史蒂夫·乔布斯
        <p slot="content">
          史蒂夫·乔布斯（Steve
          Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
        </p>
      </Panel>
      <Panel name="p2" class="pange">
        斯蒂夫·盖瑞·沃兹尼亚克
        <p slot="content">
          斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
          Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。
        </p>
      </Panel>
      <Panel name="p3" class="pange">
        黄浩新
        <h4 slot="content">黄浩新是一位软件设计师</h4>
      </Panel>
    </Collapse>
    <br /><br />
    <h3>面板嵌套</h3>
    <p>折叠面板可以进行嵌套。</p>
    <Collapse accordion v-model="value3">
      <Panel name="1"  class="pange">
        史蒂夫·乔布斯
        <div slot="content">
          史蒂夫·乔布斯（Steve
          Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
          <Collapse accordion v-model="value4">
            <Panel name="1-1"  class="pange">
              iPhone
              <p slot="content">
                iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。
              </p>
            </Panel>
            <Panel name="1-2"  class="pange">
              iPad
              <p slot="content">
                iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan
                Ive
              </p>
            </Panel>
          </Collapse>
        </div>
      </Panel>
      <Panel name="2"  class="pange">
        斯蒂夫·盖瑞·沃兹尼亚克
        <p slot="content">
          斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
          Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。
        </p>
      </Panel>
      <Panel name="3"  class="pange">
        乔纳森·伊夫
        <p slot="content">
          乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
        </p>
      </Panel>
    </Collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: "",
      value3: '',
      value4: ''
    };
  }
};
</script>
<style scoped>
.pange {
  text-align: left;
}
</style>
