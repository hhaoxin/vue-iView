<template>
  <div>
    <div class="bgImg">
      <Breadcrumb :style="{ margin: '10px 10px' }" style="float: left;">
        <BreadcrumbItem to="/">
          <Icon type="md-home" />首页
        </BreadcrumbItem> 
      </Breadcrumb><br /><br />
    <!-- <h2 style="text-shadow: 5px 5px 5px #FF0000;">欢迎进入黄浩新个人网站</h2><br> -->
    </div>
    <div style="margin: 0 15px;">
      <Carousel autoplay loop>
      <CarouselItem>
        <div class="demo-carousel"><img src="../assets/p8.jpg" /></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="../assets/p1.jpg" /></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="../assets/p2.jpg" /></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="../assets/p3.jpg" /></div>
      </CarouselItem>
    </Carousel>
    </div>
    <br><br>
    <h3>本站基于vue开发的前端模板，适用于开发网站或管理系统</h3><br>
    <h4>下载模板源代码即可快速搭建网站，海量模板供您选择！</h4>
  </div>
</template>

<script>
import ButtonIcon from "@/components/Button-icon";
export default {
  components: { ButtonIcon },
  name: "HelloWorld",
  data() {
    return {
      value2: 0,
    };
  }
};
</script>

<style scoped>
.demo-carousel {
  height: 400px;
  background: rgb(17, 153, 119);
}
img {
width:100%;
height:100%;
}
.bgImg {
  background-image: url("./../assets/bgimg.png");
  background-size: auto 100px;
  background-repeat:no-repeat;
  height: 100px;
  background-position-x: right;
}
</style>
