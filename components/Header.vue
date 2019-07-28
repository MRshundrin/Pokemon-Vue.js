<template>
  <section id="header">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
  #header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 2px solid black;
    background-image: url(https://coverfiles.alphacoders.com/386/38619.jpg);
    background-size: contain;
    background-position: left;

    #select {
      width: 60px;
      height: 50px;
      font-size: 30px;
    }

    button, a {
      width: 50px;
      height: 50px;
      margin: 0 30px;
      border: none;
      background-color: transparent;
      background-size: cover;
      background-position: center;
    }

    .list {
      background-image: url(http://cdn.onlinewebfonts.com/svg/img_82026.png);
    }

    .tile {
      background-image: url(https://cdn4.iconfinder.com/data/icons/web-mobile1/100/Untitled-34-512.png);
    }

    .back-button {
      background-image: url(https://img.icons8.com/plasticine/2x/left.png);
    }
  }
</style>