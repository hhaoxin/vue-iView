<template>
    <div class="main">
        <form>
            <label for="username">账号:</label>
            <Input  v-model="username" type="text" prefix="ios-contact" placeholder="邮箱" style="width: auto"/><br/>
            <label for="passsword">密码:</label>
            <Input v-model="password" type="password" password prefix="ios-key" placeholder="密码" style="width: auto"/><br/>
            <Button style="submit">登录</Button>
        </form>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    }
}
</script>
<style scoped>
    .main{
      background-size: 100% 100%;
      height: 100%;
      /* position: absolute;  */
      width: 100%;
      background-size:cover;
      background-image: url("../../assets/login.png");
    }
</style>