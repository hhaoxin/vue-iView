<template>
  <div>
    <p>设置属性 type 为 date 或 daterange 分别显示选择单日和选择范围类型。</p>
    <Row>
      <Col span="8">
        <DatePicker
          type="date"
          placeholder="选择日期"
          style="width: 200px"
          show-week-numbers
        ></DatePicker>
      </Col>
      <Col span="8">
        <DatePicker
          type="daterange"
          placement="bottom-end"
          placeholder="选择日期"
          style="width: 200px"
          show-week-numbers
        ></DatePicker>
      </Col>
      <Col span="8">
         <DatePicker type="daterange" split-panels placeholder="选择日期" style="width: 200px" show-week-numbers></DatePicker>
      </Col>
    </Row>
    <br /><br />
    <Row>
      <Col span="8">
        <DatePicker confirm type="daterange" split-panels placeholder="面板不联动" style="width: 200px" show-week-numbers></DatePicker>
      </Col>
      <Col span="8">
        <DatePicker confirm :value="value1" format="yyyy年MM月dd日" type="date" placeholder="日期格式 " style="width: 200px" show-week-numbers></DatePicker>
      </Col>
      <Col span="8">
        <DatePicker confirm :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="日期格式" style="width: 200px" show-week-numbers></DatePicker>
      </Col>
    </Row>
    <br /><br />
    <p>设置属性 confirm，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。</p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  min-height: 100%;
}
</style>
