<template>
    <div class="error">
        <h1>404</h1>
        <p>未找到资源</p>
        <input type="button" class="btn btn-primary btn-lg" value="回到上一级" @click="toBack(0)">
        <input type="button" class="btn btn-primary btn-lg" value="返回首页" @click="toBack(1)">
    </div>
</template>

<script>
    export default {
        name: "error",
        methods:{
            toBack(value){
                switch (value) {
                    case 0:
                        this.$router.back();
                        break;
                    case 1:
                        this.$router.push({path:"/index"});
                        break
                }
            }
        }
    }
</script>

<style scoped>
.error{
    margin-top: 400px;
    height: 500px;
}
.error h1{
    margin-top: 125px;
    font-size: 150px;
}
.error p{
    font-size: 40px;
}
.error input{
    margin: 30px;
}
</style>
