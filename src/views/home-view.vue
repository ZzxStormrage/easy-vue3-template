<!--
 * @Date: 2023-02-02 11:31:26
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-03 15:59:03
 * @FilePath: /easy-vue3-template/src/views/home-view.vue
-->
<template>
  <div class="home-main">
    <p class="title">Easy Vue3</p>
    <ul class="list">
      <li class="item" v-for="(item, index) in linkList" :key="index">
        <span>
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
    title: 'Vue Router@4',
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
<style lang="scss" scoped>
.home-main {
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(0 3 70) 0%, rgb(255 160 0 / 100%) 100%), linear-gradient(60deg, rgb(0 5 34) 0%, rgb(0 255 229) 100%),
    radial-gradient(100% 165% at 100% 100%, rgb(255 0 168) 0%, rgb(0 255 120) 100%), radial-gradient(100% 150% at 0% 0%, rgb(255 245 0) 0%, rgb(81 213 0) 100%);
  background-blend-mode: overlay, soft-light, difference, normal;

  .title {
    display: inline-block;
    width: 100%;
    padding-top: 0.5px;
    margin-top: 176px;
    overflow: hidden;
    font-size: 50px;
    color: transparent;
    text-align: center;
    background-image: linear-gradient(180deg, #f2e7f8, #3eaf7c);
    -webkit-background-clip: text;
    background-clip: text;
  }

  .list {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    width: 500px;
    height: 200px;
    margin: 0 auto;
    font-size: 35px;
    color: white;
    transform: translate(-50%, -70%);
    flex-wrap: wrap;
    justify-content: center;

    .item {
      margin: 0 10px;
    }
  }
}
</style>
