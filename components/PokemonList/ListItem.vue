<template>
  <div class="list-item">

    <div class="flip-sprite">
      <div class="flip-sprite-inner">

        <div class="flip-sprite-front">
          <slot name="frontSprite" class="flip-sprite-front"/>
        </div>

        <div class="flip-sprite-back">
           <slot name="backSprite" class="flip-sprite-back"/>
        </div>

      </div>
    </div>

    <slot name="main-param" />
    
    <div class="stat">
      <slot name="stat"/>
    </div>

  </div>
</template>


<style scoped lang="scss">
  
  .list-item {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: 30px auto;
    padding: 30px;
    background-color: #feb014;
    border: 1px solid black;
    width: 80%;
    
    .main-param {
      align-self: flex-start;
    }

    .flip-sprite {
      width: 150px;
      height: 150px;
      padding-bottom: 20px;
      

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

          img {
            width: 100%;
            height: 100%;
          }
      }
      
      &-front {
        background-color: #feb014;
      }

      &-back {
        transform: rotateY(180deg);
      }

      &:hover .flip-sprite-inner {
        transform: rotateY(180deg);
      }
    }
  }
  
</style>