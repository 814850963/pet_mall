<template>
  <div class="school">
    <h2 @click="showName">学校名称{{name}}</h2>
    <h2>学校地址{{address+123}}</h2>
  </div>
</template>

<script>
import {mixin,mixin2} from '../mixin' 
export default {
  name: 'School',
  data(){
    return {
      // name: "shangguigu",
      // address: "cangping"
    }
  },
  method:{
    
  },
  mixins: [mixin,mixin2],
  // props:['name','address']
  // 接收对数值进行限制
  props:{
    name: {
      type: String,
      required:true,
      default:"123321"
    },
  },
}
</script>

<style scoped>
  .school{
    background-color: orange;
  }
</style>