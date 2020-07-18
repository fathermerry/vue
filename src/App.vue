<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  --input-height: 50px;
  --fontsize-title: 18px;
  --fontsize-body: 15px;
  --fontsize-label: 13px;
  --color-background: #FFFDF7;
  --color-text: #262626;
}

* {
  box-sizing: border-box;
}

html, body {
  position: relative;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: var(--fontsize-body);
}

#app {
  position: relative;
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: var(--color-background);
  color: var(--color-text);
}
</style>
