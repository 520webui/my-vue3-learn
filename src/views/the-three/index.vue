<template>
    <div class="the-one-warp">
        <div class="goback" @click="goback">返回</div>
        <div>{{obj.name}}</div>
        <div>{{obj.age}}</div>
        <div class="goback" @click="hdClick">按钮</div>
    </div>
</template>

<script>
    import {reactive} from "vue"
    import { useRouter } from "vue-router"
    export default {
        setup(){
            let theObj ={
                name:"Vue",
                age:7,
            }
            let obj = reactive(theObj);
            let hdClick=()=>{
                obj.age++;
            }
            const router = useRouter(); // 第一步
            let goback=()=>{
                router.push({path: '/'});
            }
            return {
                obj,
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
