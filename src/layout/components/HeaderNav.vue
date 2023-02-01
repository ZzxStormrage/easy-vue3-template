<!--
 * @Date: 2023-02-01 12:22:04
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-01 14:52:04
 * @FilePath: /my-vue3-app/src/layout/components/HeaderNav.vue
-->
<template>
    <div class="header-nav">
        <ul class="nav-list">
            <li v-for="(item,index) in navList" :key="index" class="item">
                <router-link :to="item.path">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>

const navList = ref([
    {
        title: 'HOME',
        path: '/'
    },
    {
        title: 'ABOUT',
        path: 'about'
    }
])

</script>
<style lang='scss' scoped>
.header-nav {
  background: rgb(0 0 0 / 80%);

  .nav-list {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 890px;
    height: 48px;

    .item {
      margin-right: 20px;
      font-size: 12px;
      color: #f5f5f7;
      font-weight: 400;
    }
  }
}
</style>