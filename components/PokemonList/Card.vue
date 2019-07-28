<template>
  <div  class="flip-card">
    <div class="flip-card-inner">

      <slot name="flip-card-front" />
        
      <slot name="flip-card-back" />>
  
    </div>
  </div> 
</template>

<style scoped lang="scss">
  
  .flip-card {
    width: 300px;
    height: 380px;
    padding-bottom: 20px;
    background: transparent;
    margin: 30px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;

    &-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    &-front, &-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
    
    &-front {
      background-color: #feb014;
      color: black;
      font-size: 30px;
    }

    &-back {
      background-color: #f79114;
      color: white;
      transform: rotateY(180deg);
    }

    img {
      width: 120px;
      height: auto;
    }

    &:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
  }

</style>