<template>
    <div class="the-one-warp">
        <div class="goback" @click="goback">返回</div>
    </div>

</template>

<script>
    export default {
        name: "the-one",
        methods: {
              goback(){
                  this.$router.push({path:'/'});
              }
        }
    }
</script>

<style lang="less" scoped>
    .the-one-warp{
        width: 100%;
        height: 100%;
        background-color: tan;
        overflow: hidden;
        .goback{
            width: 100px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            background-color: indianred;
            cursor: pointer;
            color: white;
            font-size: 0.1rem;
        }
    }
</style>
