<!--
 * @Date: 2023-02-02 11:31:26
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-07 11:18:32
 * @FilePath: /easy-vue3-template/src/views/home-view.vue
-->
<template>
  <div class="home-main">
    <p class="title glitch" data-text="Easy Vue3">Easy Vue3</p>
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
  @keyframes noise-anim {
    $steps: 20;

    @for $i from 0 through $steps {
      #{percentage($i * (1 / $steps))} {
        clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      }
    }
  }

  @keyframes noise-anim-2 {
    $steps: 20;

    @for $i from 0 through $steps {
      #{percentage($i * (1 / $steps))} {
        clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      }
    }
  }

  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(0 3 70) 0%, rgb(255 160 0 / 100%) 100%), linear-gradient(60deg, rgb(0 5 34) 0%, rgb(0 255 229) 100%),
    radial-gradient(100% 165% at 100% 100%, rgb(255 0 168) 0%, rgb(0 255 120) 100%), radial-gradient(100% 150% at 0% 0%, rgb(255 245 0) 0%, rgb(81 213 0) 100%);
  background-blend-mode: overlay, soft-light, difference, normal;

  .title {
    position: relative;
    top: 130px;
    margin: 0 auto;
    width: 280px;
    font-size: 60px;
    color: white;
  }

  .glitch::after {
    position: absolute;
    top: 0;
    left: 2px;
    overflow: hidden;
    color: white;
    background: transparent;
    text-shadow: -1px 0 red;
    clip: rect(0, 300px, 0, 0);
    content: attr(data-text);
    animation: noise-anim 4s infinite linear alternate-reverse;
  }

  .glitch::before {
    position: absolute;
    top: 0;
    left: -2px;
    overflow: hidden;
    color: white;
    background: transparent;
    text-shadow: 1px 0 blue;
    clip: rect(0, 300px, 0, 0);
    content: attr(data-text);
    animation: noise-anim-2 4s infinite linear alternate-reverse;
  }

  .list {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 500px;
    height: 200px;
    font-size: 35px;
    color: white;
    transform: translate(-50%, -70%);
    flex-wrap: wrap;

    .item {
      margin: 0 10px;
    }
  }
}
</style>
