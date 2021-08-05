<template>
    <div class="the-one-warp">
        <div class="goback" @click="goback">返回</div>
        <div>{{num}}</div>
        <div class="goback" @click="hdClick">按钮</div>
    </div>
</template>

<script>
    import {ref} from "vue";
    import { useRouter } from "vue-router"
    export default {
       setup(){
           // 什么时候执行setup？
           // 执行于beforeCreate之前。 用来做什么：  Vue对象创建之前数据的准备工作
           // setup中访问不到 this
           // console.log("setup");
           // ref方法的作用就是把我们的数据变成响应式数据, ref只对值类型的数据起作用。

            let num =ref(20); //此时的num是一个响应式的对象，而不是单纯的数字20
             console.log(num);//
             console.log(num.value);//
            let hdClick=()=>{
                num.value++
            }
           const router = useRouter(); // 第一步
           let goback=()=>{
               router.push({path: '/'});
           }
            return {
                num,
                hdClick,
                goback
            }
       },
        beforeCreate(){
            console.log("beforeCreate");
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
