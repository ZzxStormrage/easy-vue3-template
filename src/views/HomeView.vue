<!--
 * @Date: 2023-01-31 16:22:48
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-01 11:51:23
 * @FilePath: /my-vue3-app/src/views/HomeView.vue
-->
<template>
    HomeView

    <div>
        <span>测试 Store</span>
        {{ user.name }}
        <button @click="updateName" >修改store中name的值</button>
    </div>

</template>
<script setup>
import useStore from '@/store';
const { user } = useStore()

const updateName = () => {
    user.updateName('zzx'+  Math.round( Math.random() * 10))
}

</script>
<style lang='scss' scoped>
</style>