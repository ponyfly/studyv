<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/home2">Home2</router-link> |
      <router-link to="/home3" exact>Home3</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about1">About1</router-link> |
      <router-link to="/about2">About2</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/formsu">FormSu</router-link> |
      <router-link to="/component">ComponentS</router-link> |
      <router-link to="/componentd">ComponentD</router-link> |
      <router-link to="/ComponentSlot">ComponentSlot</router-link> |
      <router-link to="/ComponentBorder">ComponentBorder</router-link> |
      <router-link to="/ComponentTransition">ComponentTransition</router-link> |
      <router-link to="/ComponentMixin">ComponentMixin</router-link> |
      <router-link to="/RouterCom/6">RouterCom</router-link> |
      <router-link to="/ComponentFetch">ComponentFetch</router-link> |
      <router-link to="/ComponentFetch1/6">ComponentFetch1</router-link> |
      <router-link to="/ComponentCart">ComponentCart</router-link> |
      <router-link to="/Ele">Ele</router-link> |
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <router-view name="viewA" />
  </div>
</template>

<style lang="stylus">
  @import "./assets/css/base.css"
  h2
    color #000
    font-size 30px
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size 16px;
    height:100%;
    display flex;
    flex-direction column
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983
  }
  .f36
    font-size 36px
</style>
