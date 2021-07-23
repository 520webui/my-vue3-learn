<template>
    <div class="the-one-warp">
        <div class="goback" @click="goback">返回</div>
        <div>{{arr[0]}}</div>
        <div>{{arr}}</div>
        <div class="goback" @click="hdClick">按钮</div>
    </div>
</template>

<script>
    export default {
        name: "the-one",
        data() {
            return {
                arr: [10, 20, 30]
            }
        },
        methods: {
            goback() {
                this.$router.push({path: '/'});
            },
            hdClick() {
               /*Object.defineProperty()不支持引用类型数的数据劫持（触发不了set）
                 vue3.0 中利用了new Proxy() 代理对象来管理数据响应式（Vue3.0 的双向数据绑定原理）
                 console.log('执行了');*/
                this.arr[0] = 100;
                 /*this.$set(要修改的数组，要修改的下标，要修改的值)
                 在Vue2.0中提供了$set方法来支持界面的修改
                 this.$set(this.arr,0,100)
                 console.log(this.arr);*/
            }
        }
    }
</script>

<style lang="less" scoped>
.the-one-warp {
    width: 100%;
    height: 100%;
    background-color: tan;
    overflow: hidden;
    .goback {
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
