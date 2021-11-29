<template>
  <div>
    <p>设置属性 multiple，可以选择多个文件。action上传的地址</p>
    <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
      <Button icon="ios-cloud-upload-outline">点击上传</Button>
    </Upload>
    <br><br>
    <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>拖拽上传,请把文件拖到此处</p>
        </div>
    </Upload>
  </div>
</template>
<script>
export default {};
</script>
