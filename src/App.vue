<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  --font: system-ui, sans-serif;
  --font-small: 14px;
  --font-input: 16px;
  --font-p: 18px;
  --font-h3: 21px;
  --font-h2: 28px;
  --font-h1: 32px;
  --color-dark: #231F1C;
  --color-light: #FFF8F2;
  --color-link: #5E3202;
}
html, body {
  padding: 0;
  margin: 0;
  background: var(--color-light);
  color: var(--color-dark);
  font-family: var(--font);
  font-size: var(--font-p);
  position: relative;
}
* {
  box-sizing: border-box;
}
img {
  margin: 0;
  max-width: 100%;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
  -webkit-box-shadow: 0 0 0 30px var(--color-light) inset !important;
}
a {
  text-decoration: none;
  color: var(--color-link);
}
h1 {
  font-size: var(--font-h1);
  line-height: 1.2;
}
@media all and (max-width: 960px) {
  h1 {
    font-size: var(--font-h2);
  }
}
h2 {
  font-size: var(--font-h2);
  line-height: 1.2;
}
h3 {
  font-size: var(--font-h3);
  line-height: 1.5;
}
</style>
