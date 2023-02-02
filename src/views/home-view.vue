<!--
 * @Date: 2023-02-02 11:31:26
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-02 15:20:15
 * @FilePath: /easy-vue3-template/src/views/home-view.vue
-->
<template>
  <div class="home-main">
    <ul class="list">
      <li class="item" v-for="(item, index) in linkList" :key="index">
        <span class="title">
          {{ item.title }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
const linkList = [
  {
    title: 'Vue',
    path: ''
  },
  {
    title: 'Vite',
    path: ''
  },
  {
    title: 'Vue-router@4',
    path: ''
  },
  {
    title: 'Pinia',
    path: ''
  },
  {
    title: 'Eslint',
    path: ''
  },
  {
    title: 'Prettier',
    path: ''
  },
  {
    title: 'StyleLint',
    path: ''
  },
  {
    title: 'Node.js v16.18.0',
    path: ''
  }
]
</script>
<style lang="scss" scoped></style>
