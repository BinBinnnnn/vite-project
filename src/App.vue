<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="event-list-view">Event</RouterLink> |
          <RouterLink to="about">About</RouterLink> |
          <RouterLink to="student-list-view">Student</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  text-align: center;
  color: #0eedcb;
  background-color: #ebfbf2; /* 浅灰色背景 */
}

nav {
  padding: 30px;
  background-color: #ffffff; /* 白色背景 */
  border-radius: 8px; /* 圆角边框 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  backdrop-filter: blur(10px); /* 背景模糊效果 */
  position: relative; /* 相对定位 */
  overflow: hidden; /* 隐藏溢出的内容 */
}
nav::before {
  content: ''; /* 伪元素内容 */
  position: absolute; /* 绝对定位 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #10dd7e 0%, #2575fc 100%); /* 渐变背景 */
  opacity: 0.1; /* 透明度 */
  z-index: -1; /* 层级 */
}

nav a {
  font-weight: bold;
  color: #838282;
}

nav a.router-link-exact-active {
  color: #08e0c0;
}

h2 {
  font-size: 20px;
}
</style>
