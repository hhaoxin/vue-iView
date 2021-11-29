<template>
  <div>
    <Breadcrumb :style="{margin: '10px 10px'}" style="float: left;">
      <BreadcrumbItem to="/">首页
      </BreadcrumbItem>
      <BreadcrumbItem> iView
      </BreadcrumbItem>
      <BreadcrumbItem>栅格系统
      </BreadcrumbItem>
    </Breadcrumb><br><br>
    <Row>
      <Col span="6" style="background-color: rgb(24, 155, 111);">6格</Col>
      <Col span="18" style="background-color: rgb(176, 194, 187);">18格</Col> 
    </Row><br /><br />
    <Row>
      <Col span="6" style="background-color: rgb(24, 155, 111);">6格</Col>
      <Col span="6" style="background-color: rgb(176, 194, 187);">6格</Col>
      <Col span="6" style="background-color: rgb(24, 155, 111);">6格</Col>
      <Col span="6" style="background-color: rgb(176, 194, 187);">6格</Col>
    </Row><br><br>
    <Row>
      <Col span="8" style="background-color: rgb(176, 194, 187);">8格</Col>
      <Col span="8" style="background-color: rgb(24, 155, 111);">8格</Col>
      <Col span="8" style="background-color: rgb(176, 194, 187);">8格</Col>
    </Row>
  </div>
</template>

