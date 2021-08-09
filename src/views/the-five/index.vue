<template>
    <div class="the-one-warp">
        <div class="goback" @click="goback">返回</div>
        <div>{{name}}</div>
        <div>{{age}}</div>
        <div class="goback" @click="hdClick">按钮</div>
    </div>
</template>

<script>
    import {reactive,toRefs} from "vue"
    import { useRouter } from "vue-router"
    export default {
        setup(){
            let obj = {
                name:"Vue",
                age:7
            }

            obj = reactive(obj);
            let hdClick=()=>{
                console.log("执行了hdclick");
                obj.age ++;
            }
            const router = useRouter(); // 第一步
            let goback=()=>{
                router.push({path: '/'});
            }
            return {
                ...toRefs(obj),
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
