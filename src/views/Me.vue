<template>
    <div class="me">
        <MeHeader></MeHeader>  
    </div>    
</template>

<script>
import MeHeader from "@/components/MeHeader"
export default {
    components: {
        MeHeader
    }
}
</script>


<style lang="less" scoped>
.me {
    width: 100vw;
    height: 100vh;
    padding-top: 1rem;
    background-image: url('../assets/img/meBg.jpg');
    background-color: #efefef;
    background-size: 100% 4rem;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
}
</style>