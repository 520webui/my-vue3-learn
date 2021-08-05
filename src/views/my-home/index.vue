<template>
    <div class="index-warp">
        <div class="the-one" @click="theOne">vue2数据不实时变化问题</div>
        <div  @click="theTwo">2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
    </div>
</template>

<script>
    import { useRouter } from "vue-router"
    export default {
       /* methods: {
            theOne() {
                this.$router.push({path: '/the-one'});
            },
            theTwo() {
                this.$router.push({path: '/the-two'});
            }
        }*/
        setup(){
            const router = useRouter(); // 第一步
            let theOne=()=>{
                router.push({path: '/the-one'});
            };
            let theTwo=()=>{
                router.push({path: '/the-two'});
            }
            return{
                theOne,
                theTwo,
            }
        }
    }
</script>

<style scoped lang="less">
    .index-warp {
        width: 100%;
        height: 100%;
        display: flex;
        div {
           flex: 1;
            width: 100px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            background-color: dimgray;
            color: #fff;
            cursor: pointer;
            margin-left: 10px;
            font-size: 0.12rem;
        }
        .the-one{
            margin-left: 0;
        }
    }
</style>
